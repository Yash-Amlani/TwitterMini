const express = require('express');
const router = express.Router();
const tweetNeww = require('../model/new');
const mongoose = require('mongoose'); 


router.delete('/:id',(req,res,next)=>{
	 tweetNeww.remove({ _id : req.params.id})
	 .then (result =>{
	 	res.status(200).json({
	 		message : 'Tweet deleted',
	 		result : result

	 	})
	 })
	 .catch(err =>{
	 	 res.status(500).json({
	 	 	error : err
	 	 })
	 })


})

module.exports = router;