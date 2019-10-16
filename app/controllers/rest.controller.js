const model = require("../model.js");
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ndsgronska@gmail.com',
    pass: '1234gronska'
  }
});


// router.get('/roomList', function (req, res) {
//   const rooms = model.getRooms();
//   const roomNames = [];
//   for (let i = 0; i < rooms.length; i++) {
//     roomNames.push(rooms[i]);
//   }
//   res.json({ list: roomNames });
// });

// router.get('/booking', function (req, res) {
//   let pArray = []
//   pArray[0] = model.get_assistants();
//   pArray[1] = model.get_all_time_slots();
//   Promise.all(pArray).then(function (values){
//     let ass_list = values[0];
//     let time_list = values[1];
//     // console.log("*******");
//     // for (let time of time_list){
//     //   console.log(time.date);
//     // }
//     // console.log("*******");
//     res.json({ assistant_list: ass_list, time_slots: time_list });
//   });
// });

router.get('/forening', function (req, res) {
  let id=1;
  console.log(id);
  const rabatter = model.get_rabatter(id)
  .then(result =>{
    //console.log(result);
    res.json( result);
  });
});



router.get('/time_slots/:assistant', function (req, res) {
  const time_slots = model.get_time_slots(req.params.assistant)
  .then(result =>{
    res.json({list: result});
  });
});

router.get('/rabatter/:rabatt', function (req, res) {
  //hämta alla växter som finns i rabatten
  console.log(req.params.rabatt);
  let pArray = [];
  pArray[0]= model.get_rabatt(req.params.rabatt)
  pArray[1]= model.get_vaxter_in_rabatt(req.params.rabatt)
  //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
  Promise.all(pArray).then(function (values){
  //.then(result =>{
  let rabatt = values[0];
  let vaxter = values[1];
    //console.log(result);
    res.json({rabatt:rabatt, vaxter: vaxter});
  });
});


router.post('/email', function (req, res) {
  console.log(req.body);
  //let params = JSON.parse(req.body.id);
  //console.log(params);
  let mailOptions = {
    to: 'ndsgronska@gmail.com',
    from: 'ndsgronska@gmail.com',
    subject: req.body.subject,
    text: req.body.text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.json({url: '/profile' })
    }
  });
});


router.post('/remove_time_slot', function (req, res) {
  console.log(req.body);
  let params = JSON.parse(req.body.id);
  console.log(params);
  model.delete_time_slot(req.body.id)
  .then(() => {
      let pArray = [];
      pArray[0] = model.get_time_slots(req.body.name);
      Promise.all(pArray).then(function (values){
        let time_slots = values[0];
        res.json({list: time_slots });
      });
  });
});


router.post('/add_time_slot', function (req, res) {
  console.log(req.body);
  model.add_time_slot(req.body.name, req.body.date, req.body.time)
  .then(() => {
    let pArray = [];
    pArray[0] = model.get_time_slots(req.body.name);
    Promise.all(pArray).then(function (values){
      let time_slots = values[0];
      res.json({list: time_slots });
    });
  });
});


router.get('/admin_page/:assistant', function (req, res) {
  ///const asse = find.alreq.params.assistant
  console.log("serverasse " + req.params.assistant);
  let asse = req.params.assistant;
  model.get_assistants_name()
  .then(result => {
    if (result.includes(asse)){
      console.log("fanns i listan");
      res.json({url: "/admin_page/" + asse, name: asse});
    }
    else {
      console.log("fanns ej");
      res.json({url: "/admin_login", name: '', error: "No assistant named: " + asse +" exists!"});
    }
  });
});

// router.get('/room/:room', function (req, res) {
//   const messages = model.findRoom(req.params.room).messages;
//   res.json({
//     list: messages
//   });
// });

router.post('/setUser', function (req, res) {
  res.json({
    name: 'Anon'
  });
});

module.exports = router;
