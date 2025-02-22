const BrandModel=require("../models/BrandModel")
const CategoryModel=require("../models/CategoryModel")
const ProductSliderModel=require("../models/ProductSliderModel")
//const ProductModel=require("../models/ProductModel")
//const ProductDetailModel=require("../models/ProductDetailModel")
//const ReviewModel=require("../models/ReviewModel")
//const mongoose=require('mongoose')
//const ObjectId=mongoose.Types.ObjectId;


const BrandListServise=async ()=>{
    try{
        let data=await BrandModel.find();
        return{status:"success",data:data}
    }catch (e){
        return {status:"fail",data:e.toString()}
    }

}

const CategoryListServise=async ()=>{
    try{
        let data=await CategoryModel.find();
        return{status:"success",data:data}
    }catch (e){
        return {status:"fail",data:e}.toString()
    }

}


const SliderListServise=async ()=>{
    try{
        let data=await ProductSliderModel.find();
        return{status:"success",data:data}
    }catch (e){
        return {status:"fail",data:e}.toString()
    }

}



const ListByBrandServise=async ()=>{

}

const ListByCategoryServise=async ()=>{

}

const ListBySmilierServise=async ()=>{

}

const ListByKeywordServise=async ()=>{

}
const ListByRemarkServise=async ()=>{

}
const DetailsServise=async ()=>{

}
const ReviewListServise=async ()=>{

}

const ProductReviewServise=async ()=>{

}

module.exports={
    BrandListServise,
    CategoryListServise,
    SliderListServise,
    ListByBrandServise,
    ListByCategoryServise,
    ListBySmilierServise,
    ListByKeywordServise,
    ListByRemarkServise,
    DetailsServise,
    ReviewListServise,
    ProductReviewServise

}



