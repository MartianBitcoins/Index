const express  = require('express')
const router   = express.Router()
var _  = require('lodash')
const path = require('path')
const multer = require('multer')
const mongoose = require('mongoose')
const {Coins, createCoinSchema}    = require('../../../schemas/coins/index')
const upload = multer({ dest: '../../../public/coins/images/' })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log('AQUI DEBERIA ENTRAS')
//     cb(null, '../../../public/coins/images/')
//   },
//   filename: (req, file, cb) => {
//     console.log(file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// // Init upload
// const upload = multer({
//   storage   : storage,
//   limits    : { fileSize: 1000000 },
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb)
//   }
// }).single('image')


// Checkfile type
function checkFileType(file, cb) {
  const filetypes = /jpeg|png|jpg|gif/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
  if(mimetype && extname) {
    console.log('PASA')
    return cb(null, true)
  } else {
    console.log('Error :Images only')
    cb('Error :Images only')
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {

  Coins.find({}).limit(50).sort({_id: -1})
    .exec(function(err, coins) {
      if(err) {res.json({message: 'error occured'})}
      else {

        let objsFinal = []
        coins.map((key)=>{
          objs = JSON.parse(JSON.stringify(key))
          objs.id = key._id
          objsFinal.push(objs)
        })
        // console.log(objsFinal)
        res.json(objsFinal)

        // res.json(coins)
      }
    })

})

router.get('/:id', function(req, res, next) {

  Coins.findOne({
    _id: req.params.id
  }).exec(function(err, books) {
    if(err)
      res.status(404).json('Coin not found!!')
    else
      // console.log(books)
      res.json(JSON.stringify(books))
  })
})

router.post('/', function(req, res, next) {

  console.log('==================================================')
  console.log(req.body)
  console.log('==================================================')
  // return 0

  var price_time = (undefined !== req.body.price_time) ? new Date(req.body.price_time) : new Date()
  var ico_time   = (undefined !== req.body.ico_time) ? new Date(req.body.ico_time) : new Date()

  req.body.price_time = price_time
  req.body.ico_time   = ico_time
  req.files = req.body.image

  var errorV = createCoinSchema.validate(req.body, {abortEarly: false})
    .then(validatedUser => {
      var newCoin = new Coins(req.body)
      // console.log(`user ${JSON.stringify(validatedUser)} created`)
      // console.log(errorV,'ERROR:::::::')
      req.files.map((file) =>{
        upload(req, res, (err) => {
          console.log('UPLOAD')
          if(err)
            console.log({ success: false, msg: err })
          else
          if(req.files == undefined)
            console.log({ suceess: true, msg: 'No file selected' })
          else
            console.log({ success: true, msg: 'Image uploaded' })
        })
      })
      return 0
      newCoin.save(function(err, book) {
        if(err) {
          console.log(err)
          res.send('error saving book')
        } else {

          upload(req, res, (err) => {
            console.log('UPLOAD')
            if(err)
              console.log({ success: false, msg: err })
            else
            if(req.files == undefined)
              console.log({ suceess: true, msg: 'No file selected' })
            else
              console.log({ success: true, msg: 'Image uploaded' })
          })

          res.status(200).json({message: 'Coin created successfully!!!'})
        }
      })
    })
    .catch(validationError => {
      const errorMessage = validationError.details.map(d => d.message)
      res.status(400).send(errorMessage)
    })
})

router.put('/', function(req, res, next) {

  Coins.updateOne({ _id: req.body._id },req.body)
    .then((success)=> res.json({success: `Documento ${req.body.name} actualizado satisfactoriamente`}))
    .catch((error) => res.status(404).json({message: error.message}))
})

router.delete('/:id', function(req, res, next) {

  try {
    Coins.deleteOne({ _id: (req.params.id) }).then(() => res.json({message: `Coin number ${req.params.id} was deleted`}))
  } catch (error) {
    res.json({message: error.message})
  }
})

module.exports = router
