const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  buffer: { type: Buffer, required: true },
  expireAt: { type: Date, default: undefined },
});

imageSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = model('Image', imageSchema);
