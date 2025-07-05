import React, {useEffect} from 'react';
import Layout from "../comonenets/layout/layout.jsx";
import Features from "../comonenets/features/features.jsx";
import Slider from "../comonenets/product/slider.jsx";
import Brands from "../comonenets/product/brands.jsx";
import Category from "../comonenets/product/categories.jsx";
import Product from "../comonenets/product/producs.jsx";





import ProductStore from "../comonenets/store/ProductStore.js";
import FeatureStore from "../comonenets/store/FeatureStore.js";
const HomePage = () => {
    const {BrandListRequest,CategpryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore();
    const {FeatureListRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await SliderListRequest();
            await FeatureListRequest();
            await BrandListRequest();
            await CategpryListRequest();
            await ListByRemarkRequest('new');

        })()
    }, []);
    return (
        <Layout>
            <Slider/>
            <Features/>
            <Category/>
            <Product/>
            <Brands/>

        </Layout>
    );
};

export default HomePage;