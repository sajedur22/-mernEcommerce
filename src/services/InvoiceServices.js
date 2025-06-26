const ProductModel=require("../models/ProductModel");
const ProfileModel=require("../models/ProfileModel");

const InvoiceModel=require("../models/InvoiceModel");
const InvoiceProductModel=require("../models/InvoiceProductModel");
const PaymentSettingModel=require("../models/PaymentSettingModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId;
const FormData=require('form-data');
const axios=require("axios");
const CartModel= require("../models/CartModel");




const CreateInvoiceService=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id);
        let cus_email=req.headers.email;

        //st1:Calculate Total Payable & vat
        let matchStage={$match:{userID:user_id}}
        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let UnwindStage={$unwind:"$product"};

        let CartProducts=await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            UnwindStage

        ])

        let totalAmound=0;
        CartProducts.forEach((element)=>{
            let price;
        if(element['product']['discount']){
            price=parseFloat(element['product']['discountPrice'])
        }else {
            price=parseFloat(element['product']['price'])
        }
        totalAmound +=parseFloat(element['qty'])*price;
        })
        let vat=totalAmound*0.05 //5%vat
        let payable=totalAmound+vat;


        //st2: Prepare Customer Details & Shiping Details
        let Profile=await ProfileModel.aggregate([matchStage])
        let cus_details=`Name:${Profile[0]['cus_name']},Email:${cus_email},Address:${Profile[0]['cus_add']},Phone:${Profile[0]['cus_phone']}`
        let ship_details=`Name:${Profile[0]['ship_name']},city:${Profile[0]['ship_city']},Address:${Profile[0]['ship_add']},Phone:${Profile[0]['ship_phone']}`

        //st3:Transaction &Others
        let tran_id=Math.floor(10000000+Math.random()*90000000);
        let val_id=0;
        let delivery_status="pending";
        let payment_status="pending";


        //st4:Create Invoice

        let createInvoice=await InvoiceModel.create({
            userID:user_id,
            payable:payable,
            cus_details:cus_details,
            shop_details:ship_details,
            train_id:tran_id,
            delivary_status:delivery_status,
            payment_status:payment_status,
            total:totalAmound,
            vat:vat,
        })

        //st5:Create Invoice Product
        let invoice_id=createInvoice['_id'];
        CartProducts.forEach(async (element)=> {
            await InvoiceProductModel.create({
                userID: user_id,
                productID: element['productID'],
                invoiceID: invoice_id,
                qty: element['qty'],
                price: element['product']['dicount'] ? element['product']['dicountPrice'] : element['product']['price'],
                color: element['color'],
                size: element['size']
            });
        });


        //st6:Remove Cart
        await CartModel.deleteMany({userID:user_id});

        //Prepare ssl payment====

                return{status:"success",data:invoice_id};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const PaymentFailService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const PaymentCancelService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const PaymentIPNService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const PaymentSuccessService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const InvoiceListService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

const InvoiceProductListService=async (req)=>{
    try{

        return{status:"success",message:"success"};
    }catch (e){
        return{status:"fail",message:"something went wrong"};
    }
}

module.exports={
    CreateInvoiceService,
    PaymentFailService,
    PaymentCancelService,
    PaymentIPNService,
    PaymentSuccessService,
    InvoiceListService,
    InvoiceProductListService
}