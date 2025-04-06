const express=require('express');
const ProductController=require("../controller/ProductController")
const UserController=require("../controller/UserController")

const router=express.Router();

//PRODUCT
router.get("/ProductBrandList",ProductController.ProductBrandList)
router.get("/ProductCategoryList",ProductController.ProductCategoryList)
router.get("/ProductSliderList",ProductController.ProductSliderList)

router.get("/ProductListByBrand/:BrandID",ProductController.ProductListByBrand)
router.get("/ProductListByCategory/:CategoryID",ProductController.ProductListByCategory)
router.get("/ProductListByRemark/:Remark",ProductController.ProductListByRemark)

router.get("/ProductListBySmilier/:CategoryID",ProductController.ProductListBySmilier)
router.get("/ProductDetails/:ProductID",ProductController.ProductDetails)
router.get("/ProductListByKeyword/:Keyword",ProductController.ProductListByKeyword)

router.get("/ProductReviewList/:ProductID",ProductController.ProductReviewList)

router.get("/CreateProductReview",ProductController.CreateProductReview)


//user
router.get("/UserOTP/:email",UserController.UserOTP)






module.exports=router;