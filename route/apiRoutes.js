
const express=require('express');
const router=express.Router();
const db=require('../models')

router.get('/all',(req,res)=>{
    db.Todo.findAll().then(todos=>res.send(todos))
})
router.post('/new',(req,res)=>{
    db.Todo.create({
        text:req.body.text
    }).then(submitedTodo=> res.send(submitedTodo))
})

router.get('/find/:id',(req,res)=>{
    db.Todo.findAll({
        where:{
            id:req.params.id
        }
    }).then(todo=>res.send(todo))
})

router.delete('/delete/:id',(req,res)=>{
    db.Todo.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>res.send("success"))
})

router.put('/update',(req,res)=>{
    db.Todo.update({
        text:req.body.text
    },{
        where:{
            id:req.body.id
        }
    }).then((respnse)=>res.send(respnse))
})
module.exports=router;