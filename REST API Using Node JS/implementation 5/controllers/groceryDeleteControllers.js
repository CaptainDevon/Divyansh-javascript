import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import inventory from '../entity/inventory.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inventoryFilePath = path.join(__dirname, '../entity/inventory.json');


export const deleteCategory=async (req,res)=>{
    try
    {
        const {category}=req.params;
        if(!inventory[category])
        {
            return res.json({"message":`the category ${category} does not exist`});
        }

        delete inventory[category];

        await fs.writeFile(inventoryFilePath,JSON.stringify(inventory,null,2),'utf8');
        res.json({"message":`The category ${category} has been removed from the inventory`});
    }
    catch(e)
    {
        res.json({"message":e.message});
    }
};

export const deleteSubCategory=async(req,res)=>{
    try
    {
        const {category,subcategory}=req.params;
        if(!inventory[category])
        {
            return res.json({message:`The category ${category} does not exist`});
        }

        if(!inventory[category][subcategory])
        {
            return res.json({message:`The subcategory ${subcategory} is not present in ${category}`});
        }

        delete inventory[category][subcategory];

        await fs.writeFile(inventoryFilePath,JSON.stringify(inventory,null,2),'utf8');
        res.json({message:`The subcategory ${subcategory} has been removed from the ${category} in the inventory`});

    }
    catch(e)
    {
        res.json({message:e.message});
    }    
};

export const deleteItem=async (req,res)=>{
    try
    {
        const {category,subcategory,itemCode}=req.params;
        if(!inventory[category])
        {
            return res.json({message:`The category ${category} does not exist`});
        }

        if(!inventory[category][subcategory])
        {
            return res.json({message:`The subcategory ${subcategory} is not present in ${category}`});
        }  

        const items=inventory[category][subcategory];
        const item=items.find(i=>i.itemCode===itemCode);

        if(!item)
        {
            return res.json({message:`The item with code ${itemCode} was not found`});
        }
        
        inventory[category][subcategory]=items.filter(i=>i.itemCode!==itemCode);
        await fs.writeFile(inventoryFilePath,JSON.stringify(inventory,null,2),'utf8');
        res.json({message:`The itemCode ${itemCode} is removed from the ${subcategory}`});
        
        
    }
    catch(e)
    {
        res.json({message:e.message});
    }
    
};

export const deleteAllItems= async(req,res)=>{
    try
    {
        const{category,subcategory}=req.params;
        if(!inventory[category])
        {
            return res.json({message:`The category ${category} does not exist`}); 
        }

        if(!inventory[category][subcategory])
        {
            return res.json({message:`The subcategory ${subcategory} is not present in ${category}`});
        }

        
        inventory[category][subcategory] =[];
        await fs.writeFile(inventoryFilePath,JSON.stringify(inventory,null,2),'utf8');
        res.json({message:`All the items inside the subcategory ${subcategory} has been cleared`});
        
    }
    catch(e)
    {
        res.json({message:e.message});
    }
};