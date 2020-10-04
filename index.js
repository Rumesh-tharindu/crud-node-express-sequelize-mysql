const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

const app=express()
var corsOptions = {
    origin: "http://localhost:8081"
  };
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send('Hello')
})
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is runnign on port ${PORT}`)
})