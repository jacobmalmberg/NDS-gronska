/* jslint node: true */
"use strict";
const orm = require('./orm.js');
const forening_db = orm.forening;
const rabatt_db = orm.rabatt;
const vaxt_db = orm.vaxt;
const insekt_db = orm.insekt;
const attraherar_db = orm.attraherar;
const mulm_db = orm.mulm;


const forening = require('./models/forening.model');
const rabatt = require('./models/rabatt.model');
const vaxt = require('./models/vaxt.model');

const assistant_list = [];
const time_slot_dict = {};
time_slot_dict[0] = [];
time_slot_dict[1] = []; //arrays for the time slots

const ekosystem_balanserad = "I den här rabatten finns det både perenner och ettårsväxter. Tillsammans bildar dessa ett litet ekosystem, där ettårsväxterna bryts ner i slutet av livscykeln och göder jorden för perennerna. Konstgödsel behöver därmed inte tillsättas. "
const ekosystem_obalanserad_perenn = "I den här rabatten finns det endast perenner. Ifall ettårsväxter hade planterats tillsammans här, hade dessa kunna fungera som gödsel åt perennerna. Konstgödsel hade då inte behövts tillsättas. "

/**
 * Creates objects with the given params.
 */

exports.check_ekosystem = (vaxter) => {
  let perenn = false;
  let annuell = false;

  for (let i = 0; i < vaxter.length; i++) {
    if (vaxter[i].typ == "Perenn"){
      perenn = true;
    } else if (vaxter[i].typ == "Annuell"){
      annuell = true;
    }
  }

  if (perenn && annuell){
    return ekosystem_balanserad;
  } else if (perenn && !annuell){
    return ekosystem_obalanserad_perenn;
  }
};


// exports.get_attraktion = (attraktion_list) => attraherar_db.findAll(
//   {where: {
//     vaxt_id: {
//       [Op.or]: attraktion_list
//     }
//   })
// .then(result =>{
//  let a_list=[];
//  for (let i of result){
//    a_list.push(i);
//  }
//  return rabattlista;
// });

exports.get_attraktion = (id_in) => attraherar_db.findAll(
  {where: {
    vaxt_id: id_in
  }
  })
.then(result =>{
 return result;
});

exports.get_insekt = (insekt_id_in) => insekt_db.findAll({where: {id: insekt_id_in}})
.then(result =>{
 //console.log(result);
 return result;
});

exports.get_vaxt = (vaxt_id_in) => vaxt_db.findAll({where: {id: vaxt_id_in}})
.then(result =>{
 //console.log(result);
 return result;
});

exports.get_mulm = (mulm_id_in) => mulm_db.findAll({where: {id: mulm_id_in}})
.then(result =>{
 //console.log(result);
 return result;
});

exports.get_rabatter = (forening_id_in) => rabatt_db.findAll({where: {forening_id: forening_id_in}})
.then(result =>{
 let rabattlista=[];
 for (let i of result){
   rabattlista.push(i);
 }
 return rabattlista;
});

exports.get_rabatt = (rabatt_id_in) => rabatt_db.findAll({where: {id: rabatt_id_in}})
.then(result =>{
 //console.log(result);
 return result;
});

exports.get_vaxter_in_rabatt = (rabatt_id_in) => vaxt_db.findAll({where: {rabatt_id: rabatt_id_in}})
.then(result =>{
 let vaxtlista=[];
 for (let i of result){
   vaxtlista.push(i);
 }
 return vaxtlista;
});

exports.get_mulm_in_rabatt = (rabatt_id_in) => mulm_db.findAll({where: {rabatt_id: rabatt_id_in}})
.then(result =>{
 let vaxtlista=[];
 for (let i of result){
   vaxtlista.push(i);
 }
 return vaxtlista;
});
