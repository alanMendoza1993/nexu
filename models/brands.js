const mongoose = require('mongoose');
const BrandSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    }
    

})

module.exports = mongoose.model('Brands',BrandSchema, 'brands');