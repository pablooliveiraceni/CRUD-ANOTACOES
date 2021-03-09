const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(req, res){
        const annotationList = await Annotations.find()

        return res.json(annotationList);
    },

   async create(req, res) {
        const { title, notes, priority } = req.body;

        if (!notes || !title) {
            return res.status(400).json({ error: "Necessário um título/anotação!"})
        }
  

    let resultado = await Annotations.create({ title, notes, priority });
    res.json(resultado);

    },

   async delete(req, res){
        const { id } = req.params;

        const annotationDeleted = await Annotations.findOneAndDelete({_id : id });

        if (annotationDeleted) {
            return res.json(annotationDeleted);
        }

        return res.status(401).json({ error: "Não foi encontrado o registro para deletar" });
    }

    
}