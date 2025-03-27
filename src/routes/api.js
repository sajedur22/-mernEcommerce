const express=require('express');
const ProductController=require("../controller/ProductController")
const router=express.Router();

//PRODUCT
router.get("/ProductBrandList",ProductController.ProductBrandList)
router.get("/ProductCategoryList",ProductController.ProductCategoryList)
router.get("/ProductSliderList",ProductController.ProductSliderList)

router.get("/ProductListByBrand/:BrandID",ProductController.ProductListByBrand)
router.get("/ProductListByCategory/:CategoryID",ProductController.ProductListByCategory)
router.get("/ProductListByRemark/:Remark",ProductController.ProductListByRemark)

router.get("/ProductListBySmilier/:CategoryID",ProductController.ProductListBySmilier)
router.post("/ProductListByKeyword/:Keyword",ProductController.ProductListByKeyword)

router.post("/ProductDetails/:productID",ProductController.ProductDetails)
router.get("/CreateProductReview",ProductController.CreateProductReview)





module.exports=router;