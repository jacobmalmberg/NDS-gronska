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


const Time_Slot = sequelize.define("time_slot",{
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
});

const Forening = sequelize.define("foreningar", {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  namn: {
    type: Sequelize.STRING
  },
  bildnamn: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
});

const Rabatt = sequelize.define("rabatter",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  forening_id: {
    type: Sequelize.INTEGER
  },
  x: {
    type: Sequelize.INTEGER
  },
  y: {
    type: Sequelize.INTEGER
  },
  width: {
    type: Sequelize.INTEGER
  },
  height: {
    type: Sequelize.INTEGER
  },
  polygon: {
    type: Sequelize.TEXT
  },
  jorddjup: {
    type: Sequelize.INTEGER
  },
  ytskikt: {
    type: Sequelize.STRING
  }

}, {
  timestamps: false,
  freezeTableName: true,
});

const Vaxt = sequelize.define("vaxter",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  rabatt_id: {
    type: Sequelize.INTEGER
  },
  namn: {
    type: Sequelize.STRING
  },
  bildnamn: {
    type: Sequelize.STRING
  },
  polygon: {
    type: Sequelize.TEXT
  },
  intro: {
    type: Sequelize.TEXT
  },
  vatten: {
    type: Sequelize.STRING
  },
  lage: {
    type: Sequelize.STRING
  },
  hojd: {
    type: Sequelize.STRING
  },
  blommar: {
    type: Sequelize.STRING
  },
  naring: {
    type: Sequelize.STRING
  },
  jordman: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
});




module.exports.assistant = Assistant;
module.exports.forening = Forening;
module.exports.rabatt = Rabatt;
module.exports.vaxt = Vaxt;
module.exports.time_slot =  Time_Slot;
module.exports.sequelize = sequelize;





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
