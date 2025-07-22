import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/utility.js";
const baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const WishStore=create((set)=>({

    isWishSubmit:false,


    WishSaveRequest:async (productID)=>{

        try {
            set({isWishSubmit:true})

            let res=await axios.post(`${baseURL}/SaveWishList`, {productID:productID})
            return res.data['status']==="success";
        }catch (e){
            unauthorized(e.response.status)
        }finally {
            set({isWishSubmit:false});
        }
    },


    WishList:null,
    WishCount:0,
    WishListRequest:async ()=>{

        try {
            let res=await axios.get(`${baseURL}/WishList`)
            set({WishList:res.data['data']})
            set({WishCount:res.data['data'].length})
        }catch (e){
            unauthorized(e.response.status)
        }
    },

    RemoveListRequest:async (productID)=>{

        try {
            let res=await axios.post(`${baseURL}/RemoveWishList`,{productID:productID})
            return res.data['status']==="success";
        }catch (e){
            unauthorized(e.response.status)
        }
    },

}))
export default WishStore;