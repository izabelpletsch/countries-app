import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchData(url: string) {
    try {
        const { data } = await axios.get(API_URL + url, {
            headers: { Authorization: API_KEY },
        });

        return data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e.status);
            console.error(e.response);

            return {
                error_status: e.status,
                msg: e.message,
            };
        } else {
            return {
                error_status: 500,
                msg: "Internal error",
            };
        }
    }
}
