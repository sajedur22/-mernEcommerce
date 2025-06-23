const EmailSend = require("../utility/EmailHelper");
const UserModel=require("../models/UserModel")
const {EncodeToken} = require("../utility/TokenHelper");




const UserOTPService = async (req) => {
    try {
        let email=req.params.email;
        let code=Math.floor(100000+Math.random()*900000);

        let EmailText=`Your Verification Code is= ${code}`
        let EmailSubject='Email Verification'

        await EmailSend(email,EmailText,EmailSubject);

        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

        return {status:"success", message:"your 6 digit OTP verification code"}
    }catch (e) {
        return {status:"fail", message:e}
    }
}


const VerifyOTPServise=async (req)=>{

    try{
        let email=req.params.email;
        let otp=req.params.otp;
        //User count
        let total = await UserModel.countDocuments({ email: email, otp: otp });
        if(total===1){
            //user id read
            let user_id=await UserModel.find({email:email,otp:otp}).select("_id");
            //user token create
            let token=EncodeToken(email,user_id[0]['_id'].toString())
            //otp update
            await UserModel.updateOne({email:email},{$set:{otp:"0"}})
            return {status:"success", message:"Valid OTP",token:token}
        }else {
            return {status:"fail", message:"Invalid OTP"};
        }
    }catch (e){
        return {status:"fail", message:"Invalid OTP"};
    }

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
    CreateProfileService,
    UpdateProfileService,
    ReadProfileService

}