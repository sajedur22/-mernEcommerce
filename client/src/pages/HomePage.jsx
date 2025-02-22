import React, {useEffect, useState} from 'react';
import MasterLayout from "../comonenets/shared/MasterLayout.jsx";
//import {data} from "react-router-dom";
import axios from "axios";

const HomePage = () => {
    const [Data,setData]=useState(null)
    useEffect(() => {
        (async ()=>{
            let res=await axios.get("/api/CreateInvoice");
            setData(res.data);
        })()
    }, []);
    return (
        <MasterLayout>
            <h1>home page</h1>
            {
                Data!==null &&(
                    <ul>
                        <li>Total:{Data['total']}</li>
                        <li>Vat:{Data['vat']}</li>
                        <li>Pay:{Data['pay']}</li>
                    </ul>
                )
            }
        </MasterLayout>
    );
};

export default HomePage;