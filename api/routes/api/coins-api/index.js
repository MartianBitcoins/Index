const express  = require('express')
const router   = express.Router()
var _  = require('lodash')
const path = require('path')
const multer = require('multer')
const mongoose = require('mongoose')
const {Coins, createCoinSchema}    = require('../../../schemas/coins/index')
const upload = multer({ dest: '../../../public/coins/images/' })

// const storage = multer.diskStorage({
//   destination: '../../../public/coins/images/',
//   filename   : function(req, file, cb) {
//     cb(null,'IMAGE-' + Date.now() + path.extname(file.originalname))
//   },
//   onError: function(err, next) {
//     console.log('error', err)
//     next(err)
//   }
// })

// const upload = multer({
//   storage: storage,
//   limits : {fileSize: 1000000}
// }).array('image')

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

router.post('/', upload.array('image', 120), function(req, res, next) {

  var price_time = (undefined !== req.body.price_time) ? new Date(req.body.price_time) : new Date()
  var ico_time   = (undefined !== req.body.ico_time) ? new Date(req.body.ico_time) : new Date()

  req.body.price_time = price_time
  req.body.ico_time   = ico_time

  console.log(req.body.price_time)

  var errorV = createCoinSchema.validate(req.body, {abortEarly: false})
    .then(validatedUser => {
      var newCoin = new Coins(req.body)
      // console.log(`user ${JSON.stringify(validatedUser)} created`)
      // console.log(errorV,'ERROR:::::::')

      newCoin.save(function(err, book) {
        if(err) {
          console.log(err)
          res.send('error saving book')
        } else {
          // console.log('===========================================')
          // console.log('===========================================')
          // console.log('===========================================')
          // console.log(book)
          // upload(req, res, (err) => {
          //   console.log('Request file ---', req.body.image) // Here you get file.
          //   /* Now do where ever you want to do*/
          //   if(err)
          //     console.log('ERROR: ', err) // return res.send(200).end()
          // })
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
