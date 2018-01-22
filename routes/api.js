var express = require('express');
var router = express.Router();
var rest = require('../common/rest');

router.get('/model_cfg/:modelName', rest.getConfig);
router.get('/model/:modelName/:id', rest.getWithId);
router.get('/model/:modelName/', rest.get);
router.post('/model/:modelName/:id', rest.postWithId);
router.post('/model/:modelName/', rest.post);
router.delete('/model/:modelName/:id', rest.deleteWithId);

module.exports = router;
