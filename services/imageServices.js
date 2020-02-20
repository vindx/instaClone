const sharp = require('sharp');
const config = require('config');
const Image = require('../models/Image');

const baseUrl = config.get('baseUrl');

const createImage = async file => {
  try {
    const buffer = await sharp(file.buffer)
      .resize({ width: 750, height: 750 })
      .jpeg()
      .toBuffer();

    const image = new Image({ buffer });
    await image.save();
    const imageId = image._id;
    return `${baseUrl}/api/images/${imageId}`;
  } catch (e) {
    throw Error('Error while creating image');
  }
};

const deleteImageById = async imageId => {
  try {
    await Image.findByIdAndDelete(imageId);
  } catch (e) {
    throw Error('Error while deleting image by ID');
  }
};

const updateImageById = async (imageId, file) => {
  try {
    await deleteImageById(imageId);
    return await createImage(file);
  } catch (e) {
    throw Error('Error while updating image by ID');
  }
};

module.exports = { createImage, deleteImageById, updateImageById };
