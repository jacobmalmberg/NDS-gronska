/* jslint node: true */
"use strict";
const orm = require('./orm.js');
const assistant_db = orm.assistant;
const timeslot_db = orm.time_slot;
const forening_db = orm.forening;
const rabatt_db = orm.rabatt;
const vaxt_db = orm.vaxt;


const assistant = require('./models/assistant.model');
const time_slot = require('./models/time_slot.model');

const forening = require('./models/forening.model');
const rabatt = require('./models/rabatt.model');
const vaxt = require('./models/vaxt.model');

const assistant_list = [];
const time_slot_dict = {};
time_slot_dict[0] = [];
time_slot_dict[1] = []; //arrays for the time slots


/**
 * Creates objects with the given params.
 */



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


exports.get_assistants = () => assistant_db.findAll();
exports.get_assistants_name = () => assistant_db.findAll().then(result =>{
  let name_list=[];
  for (let i of result){
    name_list.push(i.name);
  }
  return name_list;
});

exports.get_time_slots = (assistant_name) =>
//return list
  assistant_db.findAll({where: {name: assistant_name}})
  .then(result => {
    return timeslot_db.findAll({where: {assistant_id: result[0].id},
      order: [['date', 'ASC'],
                ['time', 'ASC']
              ]})
  }).then(asd =>{
    return asd;
  });


exports.get_all_time_slots = () => timeslot_db.findAll({
  order: [['date', 'ASC'],
            ['time', 'ASC']
            ]
          });
//return dict
exports.delete_time_slot = (time_slot_id) => timeslot_db.destroy({where: {id: time_slot_id}});
exports.reserve_time_slot = (time_slot_id) =>
  timeslot_db.update(
    {reserved: true},
    { where: {id: time_slot_id}}
  ).then(result => {
       console.log("Updated timeslot_db - Reserved -  successfully!");
     }
   ).catch(err => {
     console.log("Error in updating - Reserved - timeslot_db!");

   }
    );

exports.unreserve_time_slot = (time_slot_id) =>
  timeslot_db.update(
    {reserved: false},
    {where: {id: time_slot_id}}
  ).then(result => {
       console.log("Updated timeslot_db - Unreserved -  successfully!");

     }
   ).catch(err => {
     console.log("Error in updating - Unreserved - timeslot_db!");

   }
    );

exports.book_time_slot = (time_slot_id, booked_by) =>

  timeslot_db.update(
    {booked_by: booked_by},
    { where: {id: time_slot_id}}
  ).then(result => {
       console.log("Timeslot booked successfully!");
     }
    ).catch(err => {
     console.log("Error in updating booking timeslot!");
   }
    );








// exports.add_assistant = (id, name) => assistant_list.push(new assistant(id, name));
// exports.add_time_slot = (assistant_name, date, time) => {
//   let time_slot_id = time_slot_counter;
//   time_slot_counter++;
//   let booked_by = "";
//   let assistant_id = mapNameId(assistant_name);
//   time_slot_dict[assistant_id].push(new time_slot(assistant_id, time_slot_id, date, time, booked_by));
// };


/**
 * Returns all the objects.
 */
// exports.get_assistants = () => assistant_list;

// exports.get_assistants_name = () => {
//   let name_list=[];
//   for (let i of assistant_list){
//     name_list.push(i.name);
//   }
//   return name_list;
// }
// exports.get_time_slots = (assistant_name) => {
//   let assistant_id = mapNameId(assistant_name);
//   return time_slot_dict[assistant_id];
// }
//
// exports.get_all_time_slots = () =>{
//   return time_slot_dict;
// }
//
// /**
//  * Removes objects.
//  */
//
// exports.delete_time_slot = (assistant_name, time_slot_id) => {
//
//   //let index = time_slot_dict[assistant_id].indexOf(time_slot_id);
//   let assistant_id = mapNameId(assistant_name);
//   let array = time_slot_dict[assistant_id];
//   let index;
//   for (let i = 0; i<array.length; i++){
//     if (array[i].id==time_slot_id){
//       index = i;
//     }
//   }
//   array.splice(index, 1);
// };
//
// exports.reserve_time_slot = (assistant_name, time_slot_id) => {
//   let assistant_id = mapNameId(assistant_name);
//   let array = time_slot_dict[assistant_id];
//   let index;
//   let time_slot;
//   for (let i = 0; i<array.length; i++){
//     if (array[i].id==time_slot_id){
//       time_slot = array[i];
//     }
//   }
//   time_slot.reserved=true;
// }
//
// exports.unreserve_time_slot = (assistant_name, time_slot_id) => {
//   let assistant_id = mapNameId(assistant_name);
//   let array = time_slot_dict[assistant_id];
//   let index;
//   let time_slot;
//   for (let i = 0; i<array.length; i++){
//     if (array[i].id==time_slot_id){
//       time_slot = array[i];
//     }
//   }
//   time_slot.reserved=false;
// }
//
//
//
// exports.book_time_slot = (assistant_name, time_slot_id, booked_by) => {
//   //let index = time_slot_dict[assistant_id].indexOf(time_slot_id);
//   let assistant_id = mapNameId(assistant_name);
//   let array = time_slot_dict[assistant_id];
//   let index;
//   let time_slot;
//   for (let i = 0; i<array.length; i++){
//     if (array[i].id==time_slot_id){
//       time_slot = array[i];
//     }
//   }
//   time_slot.booked_by=booked_by;
//   time_slot.reseved=false; //no longer reserved - its booked!
// };
