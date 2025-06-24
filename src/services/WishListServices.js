const WishModel = require("../models/WishModel");
const SaveWishListService=async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
 await WishModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
        return{status:"success",message:"wish list save success"}
    } catch(e){
        return{status:"fail",message:"something went wrong"}
    }

}

const RemoveWishListService=async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await WishModel.deleteOne(reqBody)
        return{status:"success",message:"wish list delete success"}
    } catch(e){
        return{status:"fail",message:"something went wrong"}
    }

}

const WishListServise=async (req)=>{

}

module.exports={
    SaveWishListService,
    WishListServise,
    RemoveWishListService
}