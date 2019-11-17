const model = require("../model.js");
const express = require('express');
const nodemailer = require('nodemailer');
const formidable = require('formidable')

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ndsgronska@gmail.com',
    pass: '1234gronska'
  }
});


router.get('/forening', function (req, res) {
  let id=1;
  //console.log(id);
  const rabatter = model.get_rabatter(id)
  .then(result =>{
    //console.log(result);
    res.json( result);
  });
});



// router.get('/rabatter/:rabatt', function (req, res) {
//   //hämta alla växter som finns i rabatten
//   //console.log(req.params.rabatt);
//   let pArray = [];
//   pArray[0]= model.get_rabatt(req.params.rabatt)
//   pArray[1]= model.get_vaxter_in_rabatt(req.params.rabatt)
//   //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
//   Promise.all(pArray).then(function (values){
//   //.then(result =>{
//   let rabatt = values[0];
//   let vaxter = values[1];
//   let vaxt_id =[];
//   for (let i = 0;i < vaxt_id.length; i++){
//     vaxt_id.push(vaxter[i].id);
//   }
//
//
//   let pArray2 = [];
//   pArray[0]= model.get_attraktion(vaxt_id)
//   pArray[1]= model.check_ekosystem(vaxter);
//
//   let text = model.check_ekosystem(vaxter);
//     //console.log(result);
//   res.json({rabatt:rabatt, vaxter: vaxter, text: text});
//   });
// });

// router.get('/attraherar/:vaxt_id', function (req, res) {
//   //hämta alla växter som finns i rabatten
//   //console.log(req.params.rabatt);
//   // let pArray = [];
//   // pArray[0]= model.get_attraktion(req.params.vaxt_id)
//   // /Promise.all(pArray).then(function (values){
//   // //.then(result =>{
//   // let attraherar = values[0];
//   //   //console.log(result);
//   // res.json(values[0]);
//   // });
//   model.get_attraktion(req.params.vaxt_id).then(result =>{
//    res.json(result);
//   });
// });


router.get('/attraherar/:vaxt_id', function (req, res) {
  //hämta alla växter som finns i rabatten
  //console.log(req.params.rabatt);
  // let pArray = [];
  // pArray[0]= model.get_attraktion(req.params.vaxt_id)
  // /Promise.all(pArray).then(function (values){
  // //.then(result =>{
  // let attraherar = values[0];
  //   //console.log(result);
  // res.json(values[0]);
  // });
  model.get_attraktion(req.params.vaxt_id).then(result1 =>{
   //res.json(result);
   if (result1.length>0){
     model.get_insekt(result1[0].insekts_id).then(result =>{
       res.json(result);
     });
   } else{
     res.json(result1);
   }
  });
});
// router.get('/rabatter/:rabatt', function (req, res) {
//   //hämta alla växter som finns i rabatten
//   //console.log(req.params.rabatt);
//   let pArray = [];
//   pArray[0]= model.get_rabatt(req.params.rabatt)
//   pArray[1]= model.get_vaxter_in_rabatt(req.params.rabatt)
//   //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
//   Promise.all(pArray).then(function (values){
//   //.then(result =>{
//   let rabatt = values[0];
//   let vaxter = values[1];
//
//   let text = model.check_ekosystem(vaxter);
//     //console.log(result);
//   res.json({rabatt:rabatt, vaxter: vaxter, text: text});
//   });
// });

router.get('/insekter/:id', function (req, res) {
  console.log(req.params.id);
  model.get_insekt(req.params.id).then(result =>{
    console.log(result);
    res.json(result);
  });

});

router.get('/rabatter', function (req, res) {
  //hämta alla växter som finns i rabatten
  //console.log(req.params.rabatt);
  let pArray = [];
  let highlight = req.query.highlight;
  pArray[0]= model.get_rabatt(req.query.rabatt)
  pArray[1]= model.get_vaxter_in_rabatt(req.query.rabatt)
  if (highlight !== false){
    pArray[2] = model.get_vaxt(highlight);
  }
  //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
  Promise.all(pArray).then(function (values){
  //.then(result =>{
  let rabatt = values[0];
  let vaxter = values[1];
  let vaxt;

  let text = model.check_ekosystem(vaxter);
  if (highlight == false){
    vaxt = values[2];
    res.json({rabatt:rabatt, vaxter: vaxter, text: text, vaxt: vaxt});
  } else{
    res.json({rabatt:rabatt, vaxter: vaxter, text: text});
  }
    //console.log(result);
  });
});

// router.get('/winScreen', authMiddleware, (req, res) => {
//   model.getNewHighscores(req.query.gameId).then((result) => {
//     res.json({ result });
//   });
// });

//router.get('/admin_page/:assistant', function (req, res) {


router.post('/emailImg', function (req, res) {
  //https://codepen.io/Atinux/pen/qOvawK/
  //https://flaviocopes.com/express-forms-files/

  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log('Fields', fields)
    console.log('Files', files)
    let mailOptions;

    if (files.img !== undefined){
      mailOptions = {
        to: 'ndsgronska@gmail.com',
        from: 'ndsgronska@gmail.com',
        subject: fields.subject,
        text: fields.text,
        attachments: [
          {
            filename: files.img.name,
            path: files.img.path
          }
        ]

      };
    } else{
      mailOptions = {
        to: 'ndsgronska@gmail.com',
        from: 'ndsgronska@gmail.com',
        subject: fields.subject,
        text: fields.text,
      };
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json({url: '/profile' })
      }
    });


  })
});


router.post('/email', function (req, res) {
  //console.log(req.body);
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

module.exports = router;
