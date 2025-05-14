import path from 'path';
import { fileURLToPath } from 'url';
import inventory from '../entity/inventory.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inventoryFilePath = path.join(__dirname, '../entity/inventory.json');
