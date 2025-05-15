import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import inventory from '../entity/inventory.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inventoryFilePath = path.join(__dirname, '../entity/inventory.json');

export const patchCategory=async (req, res) => {
  try 
  {
    const { category, updatedCategory } = req.params;

    if (!inventory.hasOwnProperty(category)) {
      res.json({ message: `Category '${category}' does not exist.` });
      return;
    }

    if (inventory.hasOwnProperty(updatedCategory)) {
      res.json({ message: `Category '${updatedCategory}' already exists.` });
      return;
    }

    const updatedInventory = {};
    for (const key in inventory) {
      if (key === category) {
        updatedInventory[updatedCategory] = inventory[key];
      } else {
        updatedInventory[key] = inventory[key];
      }
    }

    await fs.writeFile(inventoryFilePath, JSON.stringify(updatedInventory, null, 2), 'utf8');
    res.json({ message: `Category renamed from '${category}' to '${updatedCategory}'.` });
  } catch (e) {
    res.json({ message: e.message });
  }
};

export const patchSubcategory=async(req,res)=>{
    try
    {
        const{category,subCategory,updatedSubCategory}=req.params;
        if(!inventory[category])
        {
            res.json({message:`the category ${category} does not exist`});
            return;
        }
        if(!inventory[category][subCategory])
        {
            res.json({message:`The subcategory ${subCategory} is not present in ${category}`});
            return;
        }

        const reorderedSubcategories = {};

        for (const key in inventory[category]) 
        {
            if (key === subCategory) 
            {
                reorderedSubcategories[updatedSubCategory] = inventory[category][key];
            } 
            else 
            {
                reorderedSubcategories[key] = inventory[category][key];
            }
        }

        inventory[category] = reorderedSubcategories;

        await fs.writeFile(inventoryFilePath, JSON.stringify(inventory, null, 2), 'utf8');
        res.json({ message: `Category renamed from '${subCategory}' to '${updatedSubCategory}'.` });
    }
    catch(e)
    {
        res.json({message:e.message});
    }
};

export const patchItemContent=async(req,res)=>{
    try
    {
        const {category,subcategory,itemCode}=req.params;
        const {itemName,quantity,cost}=req.body;

        if(!inventory[category])
        {
            return res.json({message:`The Category ${category} does not exist in the inventory`});
        }

        if(!inventory[category][subcategory])
        {
            return res.json({message:`The subcategory ${subcategory} is not present in the ${category}`});
        }

        const items=inventory[category][subcategory];
        const item=items.find(i=>i.itemCode==itemCode);

        if(!item)
        {
            return res.json({message:"item does not exist"});
        }

        if(itemName) item.itemName=itemName;
        if(quantity) item.quantity=quantity;
        if(cost) item.cost=cost;

        await fs.writeFile(inventoryFilePath,JSON.stringify(inventory,null,2),'utf8');
        res.json({message:`the item content for the itemCode ${itemCode} has been updated`,
        content:item});
    }
    catch(e)
    {
        res.json({message:e.message});
    }
};  