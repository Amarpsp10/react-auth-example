import axios from "axios";
// import Cookies from 'js-cookie'
const baseUrl = 'https://localhost:8081';

const Api = axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type': 'application/json',
        accept : 'application/json',
    }
});

const Signup = async(body) =>{
    const response = Api.post('/api/signup',body).then(response=>{
        return response;
    }).catch((e)=>{
        return e.response;
    })
    return response;
}

const Login = async(body) =>{
    const response = Api.get('/api/login',body).then(response=>{
        return response;
    }).catch((e)=>{
        return e.response;
    })
    return response;
}

const VerifyEmail = async(body) =>{
    const response = Api.get('/api/verify-email',body).then(response=>{
        return response;
    }).catch((e)=>{
        return e.response;
    })
    return response;
}

const Logout = async(body) =>{
    const response = Api.get('/api/logout',body).then(response=>{
        return response;
    }).catch((e)=>{
        return e.response;
    })
    return response;
}

const ResetPassowrd = async(body) =>{
    const response = Api.post('/api/reset-password',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response;
    })
    return response;
}
const API = { Login, Signup, VerifyEmail, Logout, ResetPassowrd }

export default API;