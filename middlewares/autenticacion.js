var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

exports.verificaToken = function(req, res, next) {
    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'No se encuentra autorizado',
                errors: err
            });
        }

        req.usuario = decoded.usuario;

        next();

    });
};