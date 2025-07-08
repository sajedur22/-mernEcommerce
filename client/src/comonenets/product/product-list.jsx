import React from 'react';
import ProductsSkeleton from "../skeleton/products-skeleton.jsx";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import productStore from "../store/ProductStore.js";

const ProductList = () => {
    const {ListProduct,ListByBrandRequest,ListByCategoryRequest}=productStore()
    return (
        <div className={'container mt-2'}>
            <div className={'row'}>
                <div className={'col-md-3 p-2'}>
                    <div className={'card vh-100 p-3 shadow-sm'}>
                        <label className={'form-label mt-3'}>Brand</label>
                        <select className={'form-control form-select'}>
                            <option value={''}>Choose Brand</option>
                        </select>
                        <label className={'form-label mt-3'}>Cetegory</label>
                        <select className={'form-control form-select'}>
                            <option value={''}>Choose Categories</option>
                        </select>
                        <label className="form-label mt-3">Maximum Price</label>
                        <input   min={0} max={1000000} step={1000} type="range" className="form-range"/>

                        <label className="form-label mt-3">Minimum Price </label>
                        <input  min={0} max={1000000} step={1000} type="range" className="form-range"/>
                    </div>
                </div>

                <div className={'col-md-9 p-2'}>
                    {
                        ListProduct === null ? (<ProductsSkeleton/>) : (
                            <div className="container">
                                <div className="row">
                                    {
                                        ListProduct.map((item, i) => {
                                            let price = <p className="bodySmal text-secondary my-1">{item['price']}</p>
                                            {
                                                if (item['discount'] === true) {
                                                    price =
                                                        <p className="bodySmal  text-secondary my-1">price:<strike>${item['price']}</strike><br/>discountPrice:${item['discountPrice']}
                                                        </p>

                                                }
                                            }
                                            return (
                                                <div className=" col-md-3 p-2 col-lg-3 col-sm-6 ">
                                                    <Link to={`/details/${item[`_id`]}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                        <img alt={'img'} className="w-100 rounded-top-2"
                                                             src={item['image']}/>
                                                        <div className="card-body">
                                                            <p className="bodySmal my-1">{item['title']}</p>

                                                            {price}
                                                            <StarRatings rating={parseFloat(item[`star`])} starRatedColor="red"
                                                                         starDimension="15px"
                                                                         starSpacing="2px"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default ProductList;