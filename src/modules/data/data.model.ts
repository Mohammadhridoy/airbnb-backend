import { model, Schema } from "mongoose";
import { HomeData } from "./data.interface";


const HomeDataSchema = new Schema<HomeData>({
    title:{
        type:String, required:true
    },
    description:{
        type: String, required:true 
    },
    city:{
         type: String, required:true 
    },
    country:{
         type: String, required:true 
    },
    pricePerNight:{
         type: Number, required:true , min:0
    },
    guests:{
          type: Number, required:true , min:1 
    },
    bedrooms:{
          type: Number, required:true,  min:0
    },
    bathrooms:{
          type: Number, required:true, min:0
    },
    amenities:[{
        type: String, 
    }],
    rating:{
        type: Number, min:0, max:5, default:0
    },
    images:[{
        type:String, 
    }]


},
{
    timestamps:true
}

)


export const HomeDataModel = model<HomeData>('Homedata', HomeDataSchema)