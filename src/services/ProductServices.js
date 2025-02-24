const BrandModel=require("../models/BrandModel")
const CategoryModel=require("../models/CategoryModel")
const ProductSliderModel=require("../models/ProductSliderModel")
const mongoose = require("mongoose");

const ProductModel=require("../models/ProductModel")
//const ProductDetailModel=require("../models/ProductDetailModel")
//const ReviewModel=require("../models/ReviewModel")

const ObjectId=mongoose.Types.ObjectId;


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



const ListByBrandServise=async (req)=>{

    try {

        let BrandID=new ObjectId(req.params.BrandID);

        let MatchStage={$match:{brandID:BrandID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};


        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}


        // Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage

        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }


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



