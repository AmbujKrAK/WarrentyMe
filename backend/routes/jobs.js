const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Users = require("../models/User");


router.get('/fetchallusers', async (req, res)=>{
    try {
        const jobs = await Users.find().lean().exec();
        res.json(jobs)
    } catch (error) {
        res.status(500).send("some error occured");
    }   
   
})

router.patch('/upate/:id', async (req, res)=>{
    try {
        const users = await Users.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
          .lean()
          .exec();
        return res.status(200).send(comment);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})



module.exports = router;