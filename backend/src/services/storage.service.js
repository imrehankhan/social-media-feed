//Kyuki ham directly ek file ko database me store nahi karsakte to ham, ek 
//cloud service provider ki sahayta lete hai.
//Cloud service provider apni file lekar badle me ek url hame deta hai, 
//jisko ham database me store karenge

const {ImageKit} = require('@imagekit/nodejs')
require('dotenv').config();

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY

    //har cloud service account ki apni ek private key hoti hai, jiske milne
    //se koi bhi tumhare account me file upload karsakta hai
    //aur tumhe uski pricing pay karni pdegi agar vo free limit ko extend 
    //karti hai toh. Isiliye apni private key ko hamesha ek .env file me rakhna chahiye
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg'
    })
    return result;
}

module.exports = uploadFile;