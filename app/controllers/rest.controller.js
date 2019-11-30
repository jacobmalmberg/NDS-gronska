const model = require("../model.js");
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('.././boilerplate/passport.js');
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


// Auth middleware to check if user is authed or not.
const authMiddleware = (req, res, next) => {
  // checks if we are authed or not
  // from https://blog.jscrambler.com/vue-js-authentication-system-with-node-js-backend
  if (!req.isAuthenticated()) {
    res.status(401).send('You are not authenticated');
  } else {
    return next();
  }
};

// Endpoint for logging in
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      // incorrect user
      return res.status(401).json({ error: 'Cant log in' });
      // return res.status(401).send([user, "Cannot log in", info]);
    }

    req.login(user, (err) => {
      const { username } = req.user;

      res.json({ url: '/admin' }); // go to profile

    });
  })(req, res, next);
});


router.get('/foreningar', function (req, res) {
  const rabatter = model.get_alla_foreningar()
  .then(result =>{
    rabatt = result;
    res.json(result);
    });
});


router.get('/forening', function (req, res) {
  let id=1;
  //console.log(id);
  let vaxter;
  let mulmar;
  let rabatt;

  const rabatter = model.get_rabatter(id)
  .then(result =>{
    rabatt = result;
    let pArray=[];
    pArray[0]= model.get_alla_vaxter_i_rabatter(rabatt);
    pArray[1]= model.get_alla_mulmar_i_rabatter(rabatt);
    Promise.all(pArray).then(function (values){
      vaxter=values[0];
      mulmar=values[1];

      res.json({ rabattlista: result, vaxter: vaxter, mulmar:mulmar });
    });
  });
});

router.post('/changeRabatt', authMiddleware, function (req, res) {
  let array = req.body;
  let id;
  let attrakt_array= []
  let obj={};
  obj.insekts_id=1;
  obj.mulm=null
  let j=0;
  for( let i =0; i<array.length; i++){
    if (array[i].namn == 'Stäppsalvia'){
      let obj={};
      obj.insekts_id=1;
      obj.mulm=null
      obj.vaxt_id=5+i+j; //5 om ta bort mittrabatt, 6 om vänst, 4 om höger

      attrakt_array.push(obj);
    }
  }

  model.skapaVaxter(array).then(result =>{
    if(attrakt_array.length > 0){
      model.skapaAttraktion(attrakt_array)
      .then(result =>{

      });
    }
  });
  //console.log(array);
  //https://codepen.io/Atinux/pen/qOvawK/
  //https://flaviocopes.com/express-forms-files/

});




router.get('/attraherar/vaxt/:vaxt_id', function (req, res) {
  model.get_attraktion_vaxt(req.params.vaxt_id).then(result1 =>{
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
router.get('/attraherar/mulm/:mulm_id', function (req, res) {
  model.get_attraktion_mulm(req.params.mulm_id).then(result1 =>{
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


router.get('/insekter/:id', function (req, res) {
  model.get_insekt(req.params.id).then(result =>{
    res.json(result);
  });

});

router.get('/admin', authMiddleware, function (req, res) {
  let id=1;
  //console.log(id);
  let vaxter;
  let mulmar;
  let rabatt;

  const rabatter = model.get_rabatter(id)
  .then(result =>{
    rabatt = result;
    let pArray=[];
    pArray[0]= model.get_alla_vaxter_i_rabatter(rabatt);
    pArray[1]= model.get_alla_mulmar_i_rabatter(rabatt);
    pArray[2]= model.get_alla_vaxter();
    Promise.all(pArray).then(function (values){
      vaxter=values[0];
      mulmar=values[1];
      alla_vaxter=values[2];

      res.json({ rabattlista: result, vaxter: vaxter, mulmar:mulmar, alla_vaxter: alla_vaxter });
    });
  });
});


router.get('/rabatter', function (req, res) {
  //hämta alla växter som finns i rabatten
  //console.log(req.params.rabatt);
  let pArray = [];
  let vaxter;
  let vaxt;
  let attraktion;
  let rabatt;
  let text;
  let insekt;
  let mulm;
  let highlight = req.query.highlight;
  let qMulm=req.query.mulm;
  let qRabatt = req.query.rabatt;
  // if(req.query.highlight !== undefined){
  //   highlight = req.query.highlight;
  // } else{
  //   qMulm = req.query.mulm;
  // }

  pArray[0]= model.get_rabatt(qRabatt);
  pArray[1]= model.get_vaxter_in_rabatt(qRabatt);
  pArray[2]= model.get_mulm_in_rabatt(qRabatt);
  if (highlight !== false && qMulm == undefined || highlight !== undefined && qMulm == undefined){
    pArray[3] = model.get_vaxt(highlight);
    pArray[4] = model.get_attraktion_vaxt(highlight);
  } else{
    pArray[3] = model.get_mulm(qMulm);
    pArray[4] = model.get_attraktion_mulm(qMulm);

  }
  //const vaxter = model.get_vaxter_in_rabatt(req.params.rabatt)
//
// const result = await Promise.all(pArray)
// Promise2

  Promise.all(pArray).then(function (values){
  //.then(result =>{
    rabatt = values[0];
    vaxter = values[1];
    mulm = values[2];
    vaxt = values[3];
    attraktion = values[4];

    // if (attraktion.length>0){
    //   model.get_insekt(result1[0].insekts_id).then(result =>{
    //     res.json(result);
    //   });
    // } else{
    //   res.json(result1);
    // }
    let pArray = [];
    pArray[0]= model.check_ekosystem(vaxter);

    if (attraktion.length>0){
      pArray[1] = model.get_insekt(attraktion[0].insekts_id);
    }

    Promise.all(pArray).then(function (values){
      text = values[0];
      insekt = values[1];
      //let text = model.check_ekosystem(vaxter);
      if (highlight !== false){
        res.json({rabatt:rabatt, mulm:mulm, vaxter: vaxter, text: text, vaxt: vaxt, attraherar: insekt});
      } else{
        res.json({rabatt:rabatt, mulm:mulm, vaxter: vaxter, text: text});
      }
    });
      //console.log(result);
  });
});




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
