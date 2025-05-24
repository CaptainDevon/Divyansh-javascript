import path from 'path';
import { fileURLToPath } from 'url';
import inventory from '../entity/inventory.json' assert { type: "json" };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inventoryFilePath = path.join(__dirname, '../entity/inventory.json');

export const getInventory = async (req, res) => {
  try {
    res.json(inventory);
  } catch (e) {
    res.json({ "error message": e });
  }
};

export const getCategory=(req,res)=>{
  try
  {
    const {category}=req.params;
    if(!inventory[category])
    {
      res.json({message:`The category ${category} doesnt exist`})
    }
    else
    {
      const subcategories=Object.keys(inventory[category]);
      res.json({category:category,
      subCategory:subcategories});
    }
  }
  catch(e)
  {
    res.json({"message":e.message});
  }
};

export const getSubCategory=(req,res)=>{
  try
  {
    const {category,subcategory}=req.params;
    if(!inventory[category])
    {
      res.json({message:`The category ${category} doesnt exist`})
    }
    if(!inventory[category][subcategory])
    {
      res.json({message:`The sub-category ${subcategory} doesnt exist`})
    }
    else
    {
      res.json({category:category,
      subcategory:subcategory,
      itemsList:inventory[category][subcategory]
    });
    }
  }
  catch(e)
  {
    res.json({"message":e.message});
  }
};


export const getItemDetails=(req,res)=>{
  try
  {
    const {category,subcategory,itemCode}=req.params;

    if(!inventory[category])
    {
      res.json({message:`The category ${category} doesnt exist`})
    }
    if(!inventory[category][subcategory])
    {
      res.json({message:`The sub-category ${subcategory} doesnt exist`})
    }
    const items=inventory[category][subcategory];
    const item=items.find(i=>i.itemCode==itemCode);

    if(!item)
    {
      res.json({message:"the item doesnt exist"});
    }
    else
    {
      res.json(item);
    }
  }
  catch(e)
  {
    res.json({"message":e.message});
  }
};