const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
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

// Table for users;
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
  }

}, {
  timestamps: false,

});

// methods for hashing
User.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.prototype.validPassword = function (password) {
  // check if password is correct (instance method)
  return bcrypt.compareSync(password, this.password);
};




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
  },
  typ: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
});



const vaxt_db = sequelize.define("vaxt_db",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
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
  },
  typ: {
    type: Sequelize.STRING
  },
  polygonbild: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
});

const Insekt = sequelize.define("insekter",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  namn: {
    type: Sequelize.STRING
  },
  bildnamn: {
    type: Sequelize.STRING
  },
  kennetecken: {
    type: Sequelize.TEXT
  },
  utbredning: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.TEXT
  },
  levnadssatt: {
    type: Sequelize.TEXT
  },
  hotad: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

const Attraherar = sequelize.define("attraherar",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  insekts_id: {
    type: Sequelize.INTEGER
  },
  vaxt_id: {
    type: Sequelize.INTEGER
  },
  mulm_id: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false,
  freezeTableName: true,
});


const mulm = sequelize.define("mulm",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  rabatt_id: {
    type: Sequelize.INTEGER
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
  skotsel: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false,
  freezeTableName: true,
});



module.exports.forening = Forening;
module.exports.rabatt = Rabatt;
module.exports.vaxt = Vaxt;
module.exports.insekt = Insekt;
module.exports.attraherar = Attraherar;
module.exports.mulm = mulm;
module.exports.vaxt_db = vaxt_db;
module.exports.user = User;




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
