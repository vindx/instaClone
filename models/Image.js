const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  buffer: { type: Buffer, required: true },
});

module.exports = model('Image', imageSchema);
