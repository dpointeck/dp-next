import fs from "fs/promises";
import { dirname } from "path";
import { parse } from "yaml";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export async function getData() {

    const usesFilePath = `${dirname(__filename)}/../data/uses.yml`;
    const usesFile = await fs.readFile(usesFilePath, "utf8");
    
    const usesData = parse(usesFile);
   
    return usesData;
}