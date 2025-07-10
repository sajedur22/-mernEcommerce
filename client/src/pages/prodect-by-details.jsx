import React, {useEffect} from 'react';
import Layout from "../comonenets/layout/layout.jsx";
import productStore from "../comonenets/store/ProductStore.js";
import {useParams} from "react-router-dom";
import ProductList from "../comonenets/product/product-list.jsx";
import ProductDetailsSkeleton from "../comonenets/skeleton/product-details-skeleton.jsx";
const ProdectByDetails = () => {


    return (
        <Layout>
            <ProductDetailsSkeleton/>
        </Layout>
    );
};

export default ProdectByDetails;