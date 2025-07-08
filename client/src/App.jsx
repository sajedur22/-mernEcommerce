import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/by-brand/:id'} element={<ProductByBrand/>}/>
                <Route path={'/by-category/:id'} element={<ProductByCategory/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;