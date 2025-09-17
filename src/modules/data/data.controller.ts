import { Request, Response } from "express";
import { dataService } from "./data.services";




const createData = async ( req:Request , res:Response ) =>{

    const info = req.body
    

    const result = await dataService.createHomeinfo(info)

    res.status(200).json({
        successs:true,
        message: 'Data is created succesfully',
        data:result
    })



}



const getAllDataInfo = async ( req:Request , res:Response ) =>{
    
    const result = await  dataService.getAllDatafromDB()


        res.status(200).json({
        successs:true,
        message: 'Data retrieved successfully',
        data: result
    })

}


export const dataControllers = {
    getAllDataInfo,
    createData
}

