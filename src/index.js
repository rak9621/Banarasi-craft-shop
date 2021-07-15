const express = require('express')
const app = express()
const path = require('path')
require('./db/conn')
const Register = require('./model/mod1')
const Order = require('./model/orderMod')
const orderemailsender = require('../public/orderEmail')
const welemailsender = require('../public/logWelEmail')
const port = process.env.PORT || 3000



app.set("view engine" ,"hbs")

app.use(express.static('images'))
app.use(express.json())
app.use(express.urlencoded ({extended:false}))





app.get('/',(req,res) => {

    res.render("logpage")
})

var emailadd 
var userName
app.post('/',async (req,res) => {
    
try {

    emailadd = req.body.email
    userName = req.body.name
    
   const registerEmployee = new Register({
    
    name : req.body.name,
    email: req.body.email,
    password:req.body.password
   })
   
   

 const registerdata = await registerEmployee.save()

setTimeout(welemailsender,10000,emailadd)




   res.status(201).render("home", {userName:userName})

    } catch (error) {

        res.status(400).send( "not saved",error)
        
    }

})





app.post('/order1',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'old lion',
         size:6,
         price:1

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item1details")
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})


app.get('/order1' ,async(req,res) => {

    res.render('./itempay/payment1')

})

app.post('/order2',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'chaddar elephant ',
         size:6,
         price:2

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item2details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})

app.get('/order2' ,async(req,res) => {

    res.render('./itempay/payment2')

})

app.post('/order3',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'elephantfine deep carving ',
         size:8,
         price:3

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item3details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})

app.get('/order3' ,async(req,res) => {

    res.render('./itempay/payment3')

})


app.post('/order4',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'lighting bowl',
         size:10,
         price:4

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item4details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})
app.get('/order4' ,async(req,res) => {

    res.render('./itempay/payment4')

})



app.post('/order5',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'micro hole elephant',
         size:10,
         price:5

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item5details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})

app.get('/order5' ,async(req,res) => {

    res.render('./itempay/payment5')

})



app.post('/order6',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'trunkup elephant',
         size:12,
         price:6

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item6details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})

app.get('/order6' ,async(req,res) => {

    res.render('./itempay/payment6')

})


app.post('/order7',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'camel',
         size:5,
         price:7

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item7details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})

app.get('/order7' ,async(req,res) => {

    res.render('./itempay/payment7')

})

app.post('/order8',async(req,res) => {

    try {
 
        const orderitem = new Order({
         
         name : 'ELPHANTfine',
         size:4,
         price:8

        })
     
      const orderdata = await orderitem.save()
      res.status(201).render("./itemdetail/item8details")


       setTimeout(orderemailsender, 12000,emailadd)
     
    
         } catch (error) {
     
             res.status(400).send( "not saved",error)
             
         }


})
app.get('/order8' ,async(req,res) => {

    res.render('./itempay/payment8')

})


app.listen(port,(req,res) => {

 console.log(`server now started  ${port}`)

})

