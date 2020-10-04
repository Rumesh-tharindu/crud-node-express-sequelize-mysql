const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen('5000',()=>{
    console.log("port 5000 is listenign")
})