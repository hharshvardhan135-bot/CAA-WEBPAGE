import { MODEL_ENDPOINT } from "../../api/apiRoute";

export const modelApi = async () => {

    try {
        const response = await fetch(MODEL_ENDPOINT);
        
        if (!response.ok) {
            throw new Error("error occured");
        }
            const data = await response.json();
            
            return data;

    } catch {
        console.error(error);
    }

}