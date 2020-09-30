const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    picture: {
        type: String,
        required: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    ingrediants: {
        type: String,
        required: true,
        minlength: 10
    },
    method: {
        type: String,
        required: true,
        minlength: 10
    },
},{
    timestamps: true,
})

const Recipe = mongoose.model('Recipe',recipeSchema);
module.exports = Recipe;