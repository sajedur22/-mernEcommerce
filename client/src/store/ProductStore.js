import { create } from "zustand";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const ProductStore = create((set) => ({

    BrandList: null,
    BrandListRequest: async () => {
        let res = await axios.get(`${baseURL}/ProductBrandList`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ BrandList: res.data['data'] });
        }
    },

    CategoryList: null,
    CategpryListRequest: async () => {
        let res = await axios.get(`${baseURL}/ProductCategoryList`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ CategoryList: res.data['data'] });
        }
    },

    SliderList: null,
    SliderListRequest: async () => {
        let res = await axios.get(`${baseURL}/ProductSliderList`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ SliderList: res.data['data'] });

        }
    },

    ListByRemark: null,
    ListByRemarkRequest: async (Remark) => {
        set({ ListByRemark: null });
        let res = await axios.get(`${baseURL}/ProductListByRemark/${Remark}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ListByRemark: res.data['data'] });
        }
    },

    ListProduct: null,
    ListByBrandRequest: async (BrandID) => {
        set({ ListProduct: null });
        let res = await axios.get(`${baseURL}/ProductListByBrand/${BrandID}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ListProduct: res.data['data'] });
        }
    },

    ListByCategoryRequest: async (CategoryID) => {
        set({ ListProduct: null });
        let res = await axios.get(`${baseURL}/ProductListByCategory/${CategoryID}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ListProduct: res.data['data'] });
        }
    },

    ListByKeywordRequest: async (Keyword) => {
        set({ ListProduct: null });
        let res = await axios.get(`${baseURL}/ProductListByKeyword/${Keyword}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ListProduct: res.data['data'] });
        }
    },

    SearchKeyword: "",
    SetSearchKeyword: async (keyword) => {
        set({ SearchKeyword: keyword });
    },

    ListByFilterRequest: async (postBody) => {
        set({ ListProduct: null });
        let res = await axios.post(`${baseURL}/PorductListByFiltter`, postBody, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ListProduct: res.data['data'] });
        }
    },

    Details: null,
    DetailsRequest: async (id) => {
        set({ Details: null });
        let res = await axios.get(`${baseURL}/ProductDetails/${id}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ Details: res.data['data'] });
        }
    },

    ReviewList: null,
    ReviewRequest: async (id) => {
        let res = await axios.get(`${baseURL}/ProductReviewList/${id}`, { withCredentials: true });
        if (res.data['status'] === 'success') {
            set({ ReviewList: res.data['data'] });
        }
    },

}));

export default ProductStore;
