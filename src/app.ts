import express from 'express'

import type { Application, Request, Response } from 'express'

import cors from 'cors'
import { dataRoutes } from './modules/data/data.route'




const app:Application = express()


// middleware 
app.use(express.json())
app.use(cors({origin:'http://localhost:3000', credentials:true}))


// router
app.use('/api', dataRoutes)
 


app.get('/', (req: Request, res: Response)=>{
    res.send("Airbnb server is running!")
})


export default app; 