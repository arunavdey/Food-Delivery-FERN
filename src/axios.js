import axios from "axios";

const instance = axios.create({
    //THE API (CLOUD FUNCTION) URL
    baseURL: "https://us-central1-food-del-d46f4.cloudfunctions.net/api",
    // "http://localhost:5001/food-del-d46f4/us-central1/api",
});

export default instance;
