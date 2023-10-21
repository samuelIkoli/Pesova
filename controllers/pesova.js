const Pesova = require('../models/pesova');

module.exports.getAllPesovas = async (req, res) => {
    try {
        const pesova = await Pesova.find();
        return res.status(200).json(pesova)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}
module.exports.getPesova = async (req, res) => {
    try {
        const pesova = await Pesova.findById(req.params.id);
        return res.status(200).json(pesova)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Can not find user'
        })
    }
}

module.exports.createPesova = async (req, res) => {
    try {
        console.log('body is', req.body)
        if (!req.body.email) {
            return res.status(400).json({
                message: "Email is required"
            })
        }
        if (!req.body.fullName) {
            return res.status(400).json({
                message: "Full name is required"
            })
        }
        const pesova = new Pesova({
            fullName: req.body.fullName,
            email: req.body.email,
            city: req.body.city,
            country: req.body.country,
            bio: req.body.bio
        });
        console.log('files are', req.files)
        pesova.profilePictures = req?.files?.map(f => ({ url: f.path, filename: f.filename }));
        await pesova.save();
        console.log(pesova);
        return res.status(200).json({
            message: "Pesova created successfully",
            user: pesova
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Can not create user',
            error
        })
    }
}
module.exports.updatePesova = async (req, res) => {
    try {
        console.log('body is', req.body)
        if (req.body.email) {
            return res.status(400).json({
                message: "Can not update email"
            })
        }
        const pesova = await Pesova.findByIdAndUpdate(req.params.id, {
            ...req.body
        });
        if (req.files) {
            const profile_pictures = req.files.map(f => ({ url: f.path, filename: f.filename }));
            pesova.profilePictures.push(...profile_pictures);
        }
        await pesova.save();
        console.log(pesova);
        return res.status(200).json({
            message: "User updated successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

module.exports.createCoverPhoto = async (req, res) => {
    try {
        if (!req.files) {
            return res.status(400).json({
                message: "No file uploaded"
            })
        }
        const pesova = await Pesova.findById(req.params.id);
        if (!pesova) {
            return res.status(400).json({
                message: "No user found"
            })
        }
        const coverPhoto = req.files.map(f => ({ url: f.path, filename: f.filename }));
        pesova.coverPhoto = coverPhoto;
        console.log('cover is', coverPhoto)
        await pesova.save();
        console.log(pesova);
        return res.status(200).json({
            message: "User updated successfully",
            user: pesova
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}
