const express=require('express');
const ProductController=require("../controller/ProductController")
const UserController=require("../controller/UserController")
const WishListController=require("../controller/WishListController")
const CartListController=require("../controller/CartListController")

const AuthVerification=require("../middleware/AuthVerification")

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
router.get("/VerifyLogin/:email/:otp",UserController.VerifyLogin)
router.get("/UserLogout",AuthVerification,UserController.UserLogout)

//create&updte profile
router.post("/CreateProfile",AuthVerification,UserController.CreateProfile)
router.post("/UpdateProfile",AuthVerification,UserController.UpdateProfile)
router.get("/ReadProfile",AuthVerification,UserController.ReadProfile)

//wishlist
router.post("/SaveWishList",AuthVerification,WishListController.SaveWishList)
router.post("/RemoveWishList",AuthVerification,WishListController.RemoveWishList)
router.get("/WishList",AuthVerification,WishListController.WishList)

//cart
router.post("/SaveCartList",AuthVerification,CartListController.SaveCartList)
router.post("/RemoveCartList",AuthVerification,CartListController.RemoveCartList)
router.get("/CartList",AuthVerification,CartListController.CartList)




module.exports=router;