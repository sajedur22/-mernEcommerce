import {create} from "zustand";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const ProductStore=create((set)=>({

    BrandList:null,
    BrandListRequest:async ()=>{
        let res=await axios.get(`${baseURL}/ProductBrandList`);
        if(res.data['status']==='success'){
            set({BrandList:res.data['data']});
        }
    },


    CategoryList:null,
    CategpryListRequest:async ()=>{
        let res=await axios.get(`${baseURL}/ProductCategoryList`);
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']});
        }
    },


    SliderList:null,
    SliderListRequest:async ()=>{
        let res=await axios.get(`${baseURL}/ProductSliderList`);
        if(res.data['status']==='success'){
            set({SliderList:res.data['data']});
        }
    },


   ListByRemark:null,
    ListByRemarkRequest:async (Remark)=>{
        set({ListByRemark:null})
        let res=await axios.get(`${baseURL}/ProductListByRemark/${Remark}`);
        if(res.data['status']==='success'){
            set({ListByRemark:res.data['data']});
        }
    },

    ListProduct:null,
    ListByBrandRequest:async (BrandID)=>{
        set({ListProduct:null})
        let res=await axios.get(`${baseURL}/ProductListByBrand/${BrandID}`);
        if(res.data['status']==='success'){
            set({ListProduct:res.data['data']});
        }
    },
    ListByCategoryRequest:async (CategoryID)=>{
        set({ListProduct:null})
        let res=await axios.get(`${baseURL}/ProductListByCategory/${CategoryID}`);
        if(res.data['status']==='success'){
            set({ListProduct:res.data['data']});
        }
    },
    ListByKeywordRequest:async (Keyword)=>{
        set({ListProduct:null})
        let res=await axios.get(`${baseURL}/ProductListByKeyword/${Keyword}`);
        if(res.data['status']==='success'){
            set({ListProduct:res.data['data']});
        }
    },
    SearchKeyword:"",
    SetSearchKeyword:async (keyword)=>{
        set({SearchKeyword:keyword})
    },
    ListByFilterRequest:async (postBody)=>{
        set({ListProduct:null})
        let res=await axios.post(`${baseURL}/PorductListByFiltter`,postBody);
        if(res.data['status']==='success'){
            set({ListProduct:res.data['data']});
        }
    },
    Details:null,
    DetailsRequest:async (id)=>{
        set({Details:null})
        let res=await axios.get(`${baseURL}/ProductDetails/${id}`);
        if(res.data['status']==='success'){
            set({Details:res.data['data']});
        }
    },

    ReviewList:null,
    ReviewRequest:async (id)=>{

        let res=await axios.get(`${baseURL}/ProductReviewList/${id}`);
        if(res.data['status']==='success'){
            set({ReviewList:res.data['data']});
        }
    },
}))


export default ProductStore;