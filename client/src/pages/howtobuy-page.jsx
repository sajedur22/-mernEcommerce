import React, {useEffect} from 'react';
import FeatureStore from "../comonenets/store/FeatureStore.js";
import Layout from "../comonenets/layout/layout.jsx";
import Legals from "../comonenets/features/legals.jsx";

const HowtobuyPage = () => {
    const{LegalsListRequest}=FeatureStore()
    useEffect(()=>{
        (async ()=>{
            await  LegalsListRequest("howtobuy")
        })()
    },[])
    return (
        <Layout>
            <Legals/>
        </Layout>
    );
};

export default HowtobuyPage;