const { Schema, model, Types } = require('mongoose');

const postSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  ownerInfo: { type: Object, required: true },
  description: { type: String, required: true },
  postPhoto: { type: String, default: '' },
  tags: { type: Array, default: [] },
  likes: { type: Array, default: [] },
});

module.exports = model('Post', postSchema);
