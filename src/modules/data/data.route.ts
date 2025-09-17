import express from 'express'
import { dataControllers } from './data.controller';



const router = express.Router()

// router.post('/data', dataControllers.createData)
router.get('/data', dataControllers.getAllDataInfo) 






export const dataRoutes = router; 