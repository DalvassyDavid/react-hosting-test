import express from "express"
import cors from "cors"

const app=express()
app.use(express())
app.use(cors())
app.use(express.json())



app.get("/name",(req,res)=>{
    res.send({
        name:"david"
    })
})
app.listen("8000",()=>{
console.log("hehe")
})