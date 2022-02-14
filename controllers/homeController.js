const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacantes');

exports.mostrarTrabajos = async (req, res, next) => {

    const vacantes = await Vacante.find().lean().lean();

    if(!vacantes) return next();

    res.render('home',{
        nombrePagina: 'DevJobs',
        tagline: 'Encuentra y Publica trabajos para Desarrolladores Web',
        barra: true,
        boton: true,
        vacantes
    })
}