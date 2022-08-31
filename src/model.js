
import {Sequelize,DataTypes} from "sequelize";


const sequelize = new Sequelize(
   'tugas3',
   'root',
   '1234567',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
);

// const User = sequelize.define("users", {
//    id: {
//       type: DataTypes.NUMBER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false
//    },
//    name: {
//       type: DataTypes.STRING,
//       allowNull: false
//    }
// });


const Patient = sequelize.define("patients", {
   id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true

   },
   name: {
      type: Sequelize.STRING,
      allowNull: false
   },
   address: {
      type: Sequelize.STRING,
      },
   phone: {
      type: Sequelize.STRING,
   }
});

const Book = sequelize.define("book",{
   title:{
       type:Sequelize.STRING,
       allowNull:false
   },
   author:{
       type:Sequelize.STRING,
       allowNull:false
   },
   release_date:{
       type:Sequelize.DATEONLY,
   },
   subject:{
       type:Sequelize.INTEGER,
   }
});


// {force:true}

// sequelize.sync().then(()=>{
//    console.log("database di buat")
   
//    User.create({
//       name:"alfian alamsyah",
//       address:"Sukabumi Selatan",
//       phone:"085284068167"
      
//    }).then(()=>{
//       console.log("User berhasil dibuat")
//    }).catch((error)=>{
//       console.log("terjadi kesalahan",error)
//    })


//    User.findAll().then((res)=>{
//       console.log(res)
//    })

// })




sequelize.sync().then(()=>{
   console.log("database berhasil dibuat");
})












sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
