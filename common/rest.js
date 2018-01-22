let rest = {};

rest.getConfig = async (req, res) => {
    let modelName = req.params.modelName;
    let Dao = require('../dao/' + modelName + 'Dao');
    res.json({
        name: Dao.name,
        tableName: Dao.tableName,
        attributes: Dao.attributes
    });
};

rest.getWithId = async (req, res) => {
    let modelName = req.params.modelName;
    let id = req.params.id;
    let Dao = require('../dao/' + modelName + 'Dao');
    let result = await Dao.findById(id);
    res.json(result);
};

rest.get = async (req, res) => {
    let modelName = req.params.modelName;
    let offset = req.query._offset ? parseInt(req.query._offset) : 0;
    let limit = req.query._limit ? parseInt(req.query._limit) : 10;
    let where = {};
    let Dao = require('../dao/' + modelName + 'Dao');
    for (let key in req.query) {
        if (typeof Dao.attributes[key] !== 'undefined') {
            where[key] = req.query[key];
        }
    }
    let results = await Dao.findAndCountAll({where, offset, limit});
    res.json(results);
};

rest.postWithId = async (req, res) => {
    let modelName = req.params.modelName;
    let id = req.params.id;
    let Dao = require('../dao/' + modelName + 'Dao');
    let model = {};
    for (let key in req.body) {
        if (typeof Dao.attributes[key] !== 'undefined') {
            model[key] = req.body[key];
        }
    }
    let where = {id}
    let result = await Dao.update(model, {where});
    res.json(result);
};

rest.post = async (req, res) => {
    let modelName = req.params.modelName;
    let Dao = require('../dao/' + modelName + 'Dao');
    let model = {};
    for (let key in req.body) {
        if (typeof Dao.attributes[key] !== 'undefined') {
            model[key] = req.body[key];
        }
    }
    model.id = parseInt(Math.random() * 10);
    let result = await Dao.create(model);
    res.json(result);
};

rest.deleteWithId = async (req, res) => {


};

module.exports = rest;
