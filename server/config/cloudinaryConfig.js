const cloudinary = require('cloudinary').v2;


// Configuration
cloudinary.config({
    cloud_name: 'dgbxczfye',
    api_key: '225415119958612',
    api_secret: 'UOnFaYeYV3xWrPCqbEZ3iZj2OdM'
});

module.exports = cloudinary;