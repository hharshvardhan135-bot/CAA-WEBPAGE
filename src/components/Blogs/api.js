import { BLOG_ENDPOINT } from "../../api/apiRoute";

export const blogFetch = async ()=>{
    try{
        const response = await fetch (BLOG_ENDPOINT);

        if(!response.ok){
            throw new Error("error");
        }
        const data = await response.json();
        return data;
        
    }catch(error){
        console.error("error occured")
    }
    
}