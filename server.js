const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const server = express();

server.use(express.json({ extended: true }));

server.use('/api/auth', require('./routes/auth.routes'));
server.use('/api/users', require('./routes/users.routes'));
server.use('/api/posts', require('./routes/posts.routes'));
server.use('/api/tags', require('./routes/tags.routes'));

const PORT = config.get('port') || 5000;

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    server.listen(PORT, () => console.log(`App has been started at port ${PORT}...`));
  } catch (e) {
    console.log('Server ERROR!', e.message);
    process.exit(1);
  }
};

start();
