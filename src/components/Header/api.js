import { HEADER_ENDPOINT } from "../../api/apiRoute";

export const headerFetch = async () => {

    try {
        const response = await fetch(HEADER_ENDPOINT);
        
        if (!response.ok) {
            throw new Error("error occured");
        }
        
            const data = await response?.json();
            
            return data;
        
    }
    catch (error) {
        console.error("error");
        throw error;
    }

}
