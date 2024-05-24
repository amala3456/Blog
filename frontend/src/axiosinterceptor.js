import axios from 'axios';
//create an axios, with this we are sending each and every request with token to backend
const axiosInstance=axios.create({

    baseURL:'http://localhost:3005'
    //backend link
})

//adding axiosinterceptor to the request
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem('userToken')
    if(accessToken){
    if(config) config.headers.token=accessToken
    }
    return config
},
(error)=>{
    return Promise.reject(error);
}
)
export default axiosInstance;