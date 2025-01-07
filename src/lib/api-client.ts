import axios from 'axios'

export const apiClient =axios.create({
    // url:'https://api-blogify.vercel.app/',
    // url:process.env.api_url,
    baseURL:'http://localhost:8000',
    // timeout:1000,
    headers:{
        "Content-Type":'application/json'
    },
    
    // withCredentials:true,
    
})