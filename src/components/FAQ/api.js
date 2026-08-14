import { FAQ_ENDPOINT } from '../../api/apiRoute';

export const faq = async () => {
    try {
        const response = await fetch(FAQ_ENDPOINT);
        if (!response.ok) {
            throw new Error;
        } const data = await response.json();
        return data;
    } catch (error) {
        console.error("error occured")
    }
}