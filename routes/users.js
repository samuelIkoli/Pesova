const express = require('express');
const router = express.Router();

const { storage } = require('../cloudinary')
const multer = require('multer');
const upload = multer({ storage })
const { createPesova, getAllPesovas, updatePesova, createCoverPhoto, getPesova } = require('../controllers/pesova')



router.post("/pesova", upload.array('image', 10), createPesova);
router.patch("/pesova/:id", updatePesova);
router.get("/pesova", getAllPesovas);
router.get("/pesova/:id", getPesova);
router.post("/pesova-cover-photo/:id", upload.array('image', 1), createCoverPhoto);


module.exports = router;