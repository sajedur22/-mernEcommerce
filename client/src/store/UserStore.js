import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../utility/utility.js";
import Cookies from 'js-cookie';


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
        let res=await axios.get(`/api/v1/UserOTP/${email}`);
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
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return  res.data['status']==='success'

    },
    UserLogoutRequest:async ()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserLogout`);
        set({isFormSubmit:false})
        return  res.data['status']==='success'

    },





}))
export default UserStore;