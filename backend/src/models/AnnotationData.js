const { Schema, model } = require('mongoose');

const AnnotationDataSchema = new Schema({
  title: {
    type: String,
  },
  notes: {
    type: String,
  },
  priority: {
    type: Boolean,
    
  },
});

const modelo = model('Annotations', AnnotationDataSchema);

module.exports = modelo;