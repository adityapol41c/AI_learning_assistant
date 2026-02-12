import fs from 'fs/promises';
import {PDFParse} from "pdf-parse";

/**
 * extract text from pdf file
 * @param {string} filePath 
 * @return {Promise<{text:string, numPages:number}>} 
 */
export const extractTextFromPDF = async (filePath) => {
    try{
        const dataBuffer = await fs.readFile(filePath);
        // pdf-parse expects a Uint8Array, not a buffer
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return{
            text: data.text,
            numPages: data.numpages,
            info:data.info,
        };
    }catch(error){
        console.error("pdf parsing error", error);
        throw new Error("failed to extract text from pdf");
    }
};
