import {create} from "zustand";
import axios from "axios";
axios.defaults.withCredentials = true;


import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from 'js-cookie';
const baseURL = import.meta.env.VITE_API_BASE_URL;


const UserStore=create((set)=>({

    isLogin:()=>{
      return !!Cookies.get("token");
    },



    LoginFormValue:{email:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormValue:{
                ...state.LoginFormValue,
                [name]:value
            }
        }))
    },

    isFormSubmit:false,

    UserOTPRequest:async (email)=>{
          set({isFormSubmit:true})
        let res=await axios.get(`${baseURL}/UserOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
           return  res.data['status']==='success'

    },



    OtpFormValue:{otp:""},
    OtpFormOnChange:(name,value)=>{
        set((state)=>({
            OtpFormValue:{
                ...state.OtpFormValue,
                [name]:value
            }
        }))
    },


    VeryFyLoginRequest:async (otp)=>{
        set({isFormSubmit:true})
        let email=getEmail()
        let res=await axios.get(`${baseURL}/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return  res.data['status']==='success'

    },
    UserLogoutRequest:async ()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`${baseURL}/UserLogout`);
        set({isFormSubmit:false})
        return  res.data['status']==='success'

    },



    ProfileForm:{
        "cus_add":"", "cus_city":"", "cus_country":"", "cus_fax":"", "cus_name":"", "cus_phone":"", "cus_postcode":"",
        "cus_state":"", "ship_add":"", "ship_city":"", "ship_country":"", "ship_name":"", "ship_phone":"",
        "ship_postcode":"", "ship_state":""
    },
    ProfileFormOnChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },
    ProfileDetails:null,
    ProfileDetailsRequest:async ()=>{
       try{
           let res=await axios.get(`${baseURL}/ReadProfile`);
           if(res.data['data'].length>0){
               set({ProfileDetails:res.data['data'][0]})
               set({ProfileForm:res.data['data'][0]})
           }else {
               set({ProfileDetails:[]})
           }
       }catch (e){
           unauthorized(e?.response?.status || 500);
       }
    },

    ProfileSaveRequest:async (PostBody)=>{
        try{
            set({ProfileDetails:null})
            let res=await axios.post(`${baseURL}/UpdateProfile`,PostBody);
                return res.data['status']==='success';

        }catch (e){
            unauthorized(e.response.status)
        }
    },






}))
export default UserStore;