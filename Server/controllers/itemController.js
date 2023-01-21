const uuid = require('uuid');
const path = require('path');
const {Item} = require('../models/models')
const ApiError = require('../error/ApiError')
class ItemController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info, size } = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..', 'static', filename))

            const  item = await Item.create({name, price, brandId, typeId, size, img: filename})

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){

    }

    async getOne(req, res){

    }

}

module.exports = new ItemController()