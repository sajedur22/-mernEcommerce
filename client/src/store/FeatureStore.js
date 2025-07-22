import {create} from "zustand";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const FeatureStore=create((set)=>({
    FeaturesList:null,
    FeatureListRequest:async ()=>{
        let res=await axios.get(`${baseURL}/FeaturesList`);
        if(res.data['status']==='success'){
            set({FeaturesList:res.data['data']});
        }
    },

    LegalsList:null,
    LegalsListRequest:async (type)=>{
        let res=await axios.get(`${baseURL}/LegalsDetails/${type}`);
        if(res.data['status']==='success'){
            set({LegalsList:res.data['data']});
        }
    },



}))
export default FeatureStore;