const express=require('express');
const ProductController=require("../controller/ProductController")
const router=express.Router();

//PRODUCT
router.get("/ProductBrandList",ProductController.ProductBrandList)
router.get("/ProductCategoryList",ProductController.ProductCategoryList)
router.get("/ProductSliderList",ProductController.ProductSliderList)
router.post("/ProductListByBrand/:BrandID",ProductController.ProductListByBrand)
router.get("/ProductListByCategory/:categoryID",ProductController.ProductListByCategory)
router.get("/ProductListBySmilier/:Keyword",ProductController.ProductListBySmilier)
router.post("/ProductListByKeyword/:Keyword",ProductController.ProductListByKeyword)
router.post("/ProductListByRemark/:Remark",ProductController.ProductListByRemark)
router.post("/ProductDetails/:productID",ProductController.ProductDetails)
router.get("/CreateProductReview",ProductController.CreateProductReview)





module.exports=router;