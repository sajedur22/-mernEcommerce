const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({

        name:{type:"string",required:true},
        description:{type:"string",required:true},
        img:{type:"string",required:true},

    },
    {timestamps:true,versionKey:false});

const FeaturesModel=mongoose.model(' features',DataSchema)
module.exports=FeaturesModel;