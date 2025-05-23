const EmailSend = require("../utility/EmailHelper");
const UserModel=require("../models/UserModel")




const UserOTPService = async (req) => {
    try {
        let email=req.params.email;
        let code=Math.floor(100000+Math.random()*900000);

        let EmailText=`Your Verification Code is= ${code}`
        let EmailSubject='Email Verification'

        await EmailSend(email,EmailText,EmailSubject);

        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

        return {status:"success", message:"6 Digit OTP has been send"}
    }catch (e) {
        return {status:"fail", message:e}
    }
}


const VerifyOTPServise=async (req)=>{

}
const LogoutService=async (req)=>{

}
const CreateProfileService=async (req)=>{

}
const UpdateProfileService=async (req)=>{

}
const ReadProfileService=async (req)=>{

}

module.exports={
    UserOTPService,
    VerifyOTPServise,
    LogoutService,
    CreateProfileService,
    UpdateProfileService,
    ReadProfileService

}