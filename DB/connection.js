const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'orm', // TutorialsPoint
    'root', // root
    '', {
       dialect: 'mysql',
       host: 'localhost'
    }
 );
 const connection = async()=>{
    try {
        return await sequelize.sync()
    }
    catch(e) {
        console.log(e.massege)
    }
 }
 module.exports = {connection,sequelize}
