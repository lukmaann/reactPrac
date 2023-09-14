import axios from "axios";


axios.defaults.baseURL="http://localhost:3000"


export const register=async(value)=>{
    const {username,password}=value
    try {
        const {data}=await axios.post("/",{username,password});
        alert(data)
        
    } catch (error) {
         return Promise.reject("error")
    }



}