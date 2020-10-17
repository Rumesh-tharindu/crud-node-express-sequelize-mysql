const express=require('express');
const app=express();
const db=require('./models');
const PORT =process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json);

db.sequelize.sync().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}`)
  })
})

