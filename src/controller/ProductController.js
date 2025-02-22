
const {BrandListServise, CategoryListServise, SliderListServise}=require('../services/ProductServices')
//const BrandModel = require("../models/BrandModel");



exports.ProductBrandList=async (req,res)=>{
    let result=await BrandListServise();
    return res.json(result);

}

exports.ProductCategoryList=async (req,res)=>{
    let result=await CategoryListServise();
    return res.status(200).json(result);
   // return res.json(status:"success",data:result)
}

exports.ProductSliderList=async (req,res)=>{
    let result=await SliderListServise();
    return res.status(200).json(result);

}

exports.ProductListByBrand=async (req,res)=>{

}

exports.ProductListByCategory=async (req,res)=>{

}

exports.ProductListBySmilier=async (req,res)=>{

}

exports.ProductListByKeyword=async (req,res)=>{

}

exports.ProductListByRemark=async (req,res)=>{

}

exports.ProductDetails=async (req,res)=>{

}

exports.ProductReviewList=async (req,res)=>{

}

exports.CreateProductReview=async (req,res)=>{

}