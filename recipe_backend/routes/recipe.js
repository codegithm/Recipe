const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe.model');


router.route('/').get((req,res)=>{
    Recipe.find()
            .then(recipe => res.json(recipe))
            .catch(err => res.status(400).json({message : err}))
});



router.route('/add').post((req,res)=>{

    
    const picture = req.body.picture;
    const name = req.body.name;
    const ingrediants = req.body.ingrediants;
    const method = req.body.method;

    const newRecipe = new Recipe({
        picture,
        name,
        ingrediants,
        method
    });
    newRecipe.save()
                .then(()=>res.json('New Recipe Created'))
                .catch(err => res.status(400).json(err))
});

router.route('/:id').delete((req,res)=>{
    Recipe.findByIdAndDelete(req.params.id)
            .then(()=>res.json('Recipe deleted'))
            .catch(err=>res.status(400).json('Error '+ err))
})
module.exports = router;