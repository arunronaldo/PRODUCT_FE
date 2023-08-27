/***************Import  packages*******************/
import axios from "axios";

//Get token from Local Storage
const token = localStorage.getItem("accessToken");

//create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api',
    headers: {
        'Authorization': `${token}`
    }
});

const BASE_URI = 'http://localhost:5001/api'

class ProductService {
    //get all products API
    getallProducts = async () => {
        let URI = `${BASE_URI}/get-product-with-images`
        return await axiosInstance.post(URI)
    }
}
export default new ProductService()


