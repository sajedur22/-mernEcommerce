const {SaveWishListService, WishListServise, RemoveWishListService} = require("../services/WishListServices");


exports.WishList=async (req,res)=>{
    let result=await WishListServise(req);
    return res.status(200).json(result);
}

exports.SaveWishList=async (req,res)=>{
    let result=await SaveWishListService(req);
    return res.status(200).json(result);
}

exports.RemoveWishList=async (req,res)=>{
    let result=await RemoveWishListService(req);
    return res.status(200).json(result);
}