const express=require('express');
const app=express();
const db=require('./models');
const PORT =process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoutes=require('./route/apiRoutes')
app.use('/api',apiRoutes)

db.sequelize.sync().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}`)
  })
})

