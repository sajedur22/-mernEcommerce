const {UserOTPService, VerifyOTPServise} =require("../services/UserServices")

exports.UserOTP=async (req,res)=>{
    let result=await UserOTPService(req);
    return res.status(200).json(result);
}

exports.VerifyLogin=async (req,res)=>{
    let result=await VerifyOTPServise(req);
    return res.status(200).json(result);
}