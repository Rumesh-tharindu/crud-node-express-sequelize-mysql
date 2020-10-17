
module.exports=(sequelize,DataTypes)=>{
    const todo =sequelize.define("Todo",{
        text:{
          type:  DataTypes.STRING,
          allowNull:false
        }
    })
    return todo;
}