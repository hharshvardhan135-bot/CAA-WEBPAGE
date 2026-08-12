import { FORM_ENDPOINT } from "../../api/apiRoute";

export const form = async (user) => {
    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error;
        }
        return response;

    } catch (error) {
        console.error(Error);
    }
}