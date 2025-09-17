import { HomeData } from "./data.interface";
import { HomeDataModel } from "./data.model";




const createHomeinfo = async(homeData: HomeData ) =>{
    const result = await  HomeDataModel.create(homeData)
    return result
}


const getAllDatafromDB = async () =>{
    const result = await HomeDataModel.find()
    return result



}


export const  dataService  = {
    getAllDatafromDB,
    createHomeinfo 
}