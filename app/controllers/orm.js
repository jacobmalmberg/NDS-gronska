const Sequelize = require('sequelize');
const sequelize = new Sequelize('intnetdb', 'intnet', '1234Skola', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
//
  // // SQLite only
  // storage: 'path/to/database.sqlite'
});


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

const Assistant = sequelize.define("assistant", {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {timestamps: false,
});


const Time_Slot = sequelize.define("timeslot",{
  assistant_id: {
    type: Sequelize.INTEGER
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  time: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.INTEGER
  },
  booked_by: {
    type: Sequelize.STRING
  },
  reserved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {timestamps: false,
})

module.exports.assistant = Assistant;
// module.exports = Time_Slot;
// module.exports = sequelize;



// force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

//Assistant.destroy({where: {id: 1, name: "Marcus"}});

// Assistant.create({id: 1, name: "Marcus"}).then(() => {
//     Assistant.destroy({where: {id: 1}});
//   }
// ).then(() =>{
//   Assistant.findAll().then(assistant => {
//     console.log(assistant[0].name);
//   });
// });

//   Assistant.findAll().then(users => {
//   console.log(users)
//   return 'Marcus'
// })
// .then(name =>
//   {console.log(name);
//   console.log("Jacob") }) ;)
//Assistant.create({id: 2, name: "Jacob"});

// Assistant.findAll().then(users => {
//   console.log(users)
//   return 'Marcus'
// })
// .then(name =>
//   {console.log(name);
//   console.log("Jacob") }) ;
