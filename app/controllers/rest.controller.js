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



router.get('/rabatter/:rabatt', function (req, res) {
  //hämta alla växter som finns i rabatten
  //console.log(req.params.rabatt);
  let pArray = [];
  pArray[0]= model.get_rabatt(req.params.rabatt)
  pArray[1]= model.get_vaxter_in_rabatt(req.params.rabatt)
  //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
  Promise.all(pArray).then(function (values){
  //.then(result =>{
  let rabatt = values[0];
  let vaxter = values[1];

  let text = model.check_ekosystem(vaxter);
    //console.log(result);
  res.json({rabatt:rabatt, vaxter: vaxter, text: text});
  });
});

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
