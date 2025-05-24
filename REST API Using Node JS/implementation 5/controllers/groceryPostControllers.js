import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import inventory from "../entity/inventory.json" assert { type: "json" };
import { findItemCost, findItemDetails} from "../Helpers/helper.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inventoryFilePath = path.join(__dirname, "../entity/inventory.json");

export const addCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (inventory[category]) {
      return res.json({ message: "The Category already exists" });
    }
    inventory[category] = [];
    await fs.writeFile(
      inventoryFilePath,
      JSON.stringify(inventory, null, 2),
      "utf8"
    );
    return res.json({
      message: `The new Category ${category} has been added in the inventory`,
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

export const addSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    if (!inventory[category]) {
      return res.json({ message: "The category doesnt exists" });
    }
    if (inventory[category][subcategory]) {
      return res.json({ message: "The Subcategory already exists" });
    }
    inventory[category][subcategory] = [];
    await fs.writeFile(
      inventoryFilePath,
      JSON.stringify(inventory, null, 2),
      "utf8"
    );
    return res.json({
      message: `The new Subcategory ${subcategory} has been added in ${category}`,
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

export const addItems = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const item = req.body;

    if (!inventory[category]) {
      return res.json({ message: `Category "${category}" not found.` });
    }

    if (!inventory[category][subcategory]) {
      return res.json({
        message: `Subcategory "${subcategory}" not found in category "${category}".`,
      });
    }

    if (Array.isArray(item)) {
      inventory[category][subcategory].push(...item);
    } else {
      inventory[category][subcategory].push(item);
    }

    await fs.writeFile(
      inventoryFilePath,
      JSON.stringify(inventory, null, 2),
      "utf8"
    );

    res.json({
      message: "Item added to the subcategory",
      category: category,
      subcategory: subcategory,
      item: item,
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};



export const billing = async (req, res) => {
  try {
    const data = req.body;

    const itemCodes = data.map(i => i.itemCode);
    const quantity = data.map(j => j.quantity);

    let sum = 0;
    const itemDetailsList = [];

    for (let k = 0; k < itemCodes.length; k++) {
      let q = quantity[k];
      let code = itemCodes[k];

      let itemFound = false;

      for (let category in inventory) {
        for (let subcategory in inventory[category]) {
          const items = inventory[category][subcategory];

          const item = items.find(i => i.itemCode === code);
          if (item) {
            if (item.quantity < q) {
              return res.json({ message: `Insufficient quantity for item code ${code}` });
            }

            item.quantity -= q;

            const itemDetail = { ...item, quantity: q };
            itemDetailsList.push(itemDetail);
            sum += item.cost * q;

            itemFound = true;
            break;
          }
        }
        if (itemFound) break;
      }

      if (!itemFound) {
        return res.json({ message: `The item with code ${code} doesn't exist` });
      }
    }

    await fs.writeFile(inventoryFilePath, JSON.stringify(inventory, null, 2));

    res.json({
      "billing Information": itemDetailsList,
      "total amount": sum
    });

  } catch (e) {
    res.json({ message: e.message });
  }
};
