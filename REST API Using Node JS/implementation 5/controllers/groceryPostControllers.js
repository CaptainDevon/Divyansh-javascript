import path from 'path';
import { fileURLToPath } from 'url';
import inventory from '../entity/inventory.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inventoryFilePath = path.join(__dirname, '../entity/inventory.json');




export const addItems = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const item = req.body;

    if (!inventory[category]) {
      return res.json({ message: `Category "${category}" not found.` });
    }

    if (!inventory[category][subcategory]) {
      return res.json({ message: `Subcategory "${subcategory}" not found in category "${category}".` });
    }

    if(Array.isArray(item))
    {
        inventory[category][subcategory].push(...item);
    }
    else
    {
        inventory[category][subcategory].push(item);
    }
    

    await fs.writeFile(inventoryFilePath, JSON.stringify(inventory, null, 2), 'utf8');

    res.json({
      message: "Item added to the subcategory",
      category: category,
      subcategory: subcategory,
      item: item
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};
