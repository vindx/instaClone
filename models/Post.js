const { Schema, model, Types } = require('mongoose');

const postSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  ownerInfo: { type: Object, required: true },
  description: { type: String, required: true },
  postPhoto: { type: String, default: '' },
  tags: [{ type: Object, ref: 'Tag' }],
  likes: { type: Array, default: [] },
  expireAt: { type: Date, default: undefined },
});

postSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = model('Post', postSchema);
