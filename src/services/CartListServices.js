const CartModel = require("../models/CartModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId;

const CartListService=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id);
        let matchStage={$match:{userID:user_id}};
        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindProductStage={$unwind:"$product"}

        let JoinStageBrand={$lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"}

        let JoinStageCategory={$lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"}}
        let unwindCategoryStage={$unwind:"$category"}

        let projection={$project:{
                createdAt:0,updatedAt:0,'product._id':0,'product.createdAt':0,'product.updatedAt':0,
                'brand._id':0,'category._id':0
            }
        }


        let data=await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindProductStage,
            JoinStageBrand,
            unwindBrandStage,
            JoinStageCategory,
            unwindCategoryStage,
            projection


        ])
        return{status:"success",data:data}

    }catch (e){
    }
}

const SaveCartListService=async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartModel.create(reqBody);
        return{status:"success",message:"cart List Create Succes"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};

    }
}

const RemoveCartListService=async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartModel.deleteOne(reqBody);
        return{status:"success",message:"cart List remove Succes"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};

    }
}


const UpdateCartListService=async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let cartID=req.params.cartID;
        let reqBody=req.body;

        await CartModel.updateOne({_id:cartID,userID:user_id},{$set:reqBody});

        return{status:"success",message:"cart List Create Succes"};


    }catch (e){
        return{status:"fail",message:"something went wrong"};

    }
}


module.exports={
    SaveCartListService,
    UpdateCartListService,
    CartListService,
    RemoveCartListService

}