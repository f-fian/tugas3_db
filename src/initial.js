import express from "express";
import {sequelize,User,Patient} from "./model.js"



const app = express();
const port = 3010

app.use(express.json());




app.post("/user",(req,res)=>{

    sequelize.sync().then(()=>{
        User.create({
            id:req.body.id,
            name:req.body.name,
            age:req.body.age,
            birthDate:req.body.birthDate
        }).then((user)=>{
            res.status(201).send({
                message:"user telah berhasil dibuat",
                data:book
            })
        })
    })

})

app.get("/user",(req,res)=>{


    User.findAll().then((users)=>{
        res.status(200).send({
            message:"data semua user berhasil di dapatkan",
            data:users
        })
    })

})

app.post("/patient",(req,res)=>{

    Patient.create({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone
    }).then((patient)=>{
        res.status(201).send({
            message:"Patient baru berhasil di tambahkan",
            data:patient
            
        })
    })


})


app.get("/patient",(req,res)=>{


    Patient.findAll().then((patients)=>{
        res.status(200).send({
            message:"data semua patients berhasil di dapatkan",
            data:patients
        })
    })

})


app.get("/user/:id",(req,res)=>{


    User.findOne({
        where : {
            id:req.params.id
        }}).then((users)=>{
        res.status(200).send({
            message:"data semua user berhasil di dapatkan",
            data:users
        })
    })

})























app.listen(port,function(){
    console.log(`server start at port ${port}`)

})


