const express = require('express');
const router = express.Router();
const tweetNew = require('../model/new');
const bodyParser = require('body-parser');


router.get('/',(req,res,next)=>
{
	res.status(200).json({
	message : 'This is to fetch the tweets from DB'
	})
});
router.put('/:id',(req,res,next)=>{

	console.log(req.params.id);
	tweetNew.findOneAndUpdate({_id:req.params.id},{
		$set : {
		username : req.body.username,
		tweet : req.body.tweet,
		likes : req.body.likes
		}
	})
	.then(result=>{
		res.status(200).json({
			message : '! Tweet Was Updated !'
		})
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({
			error : err
		})
	})
})

module.exports = router;