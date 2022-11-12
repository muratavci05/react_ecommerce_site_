import axios from "axios";

export const useApi = () =>{

    const baseUrl = "https://ecommerce-api.udemig.dev/api/v2/"
    axios.defaults.baseURL = baseUrl

    const token = localStorage.getItem("token")

    // axios.defaults.headers.common["accept"] = "application/json"
    //  >>> i <<<<
    //axios.defaults.headers.common["content-type"] = "application/json"
    axios.defaults.headers.common["accept-language"] = "en_US"   

    if (token) {
        axios.defaults.headers.common ["Authorization"] = token
    }
        return axios

}

export default useApi;