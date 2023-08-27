/***************Import  packages*******************/
import axios from "axios"

//Base URL
const BASE_URI = 'http://localhost:5001/api/login'

class LoginService {
    Userlogin = async (payload) => {
        return await axios.post(BASE_URI, payload)
    }
}
export default new LoginService()


