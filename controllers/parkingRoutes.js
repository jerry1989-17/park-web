// Inside homeRoutes.js (similarly for other route files)
const express = require('express');
const router = express.Router();
const Parking = require('../models/parkingmodel')

router.post('/regParking', async(req, res) => {
  try{
      const parking = new Parking(req.body);
      await parking.save();
      console.log(req.body);
      res.redirect('/api/home') // redirect to home page
     
  }catch(error){
      res.status(400).render('parking')
      console.log(error)
      //we redirect a path we render a file

  }

});
router.get('/parkingtable', async (req, res) => {
  try {
    let items = await Parking.find(); // .find is a moongose function that finds all the stuff from the model
    const Parkingcount = await Parking.countDocuments();
    // req.session.Parkingcount = Parkingcount;
    console.log(Parkingcount)
    let amount = await Parking.aggregate([
      {
        '$group': {
          _id: '$all',
          totalamount: { $sum: '$amount' }
        }
      }
      //let ages =group{totalAge{sum}}
    ])
    res.render('parkingtable', { parkings: items, custotal: amount[0].totalamount, Parkingcount })


  }
  catch (error) {
    console.log(error);
    return res.status(400).send({ message: 'sorry could not get employees' });
    
  }
})

module.exports = router;
