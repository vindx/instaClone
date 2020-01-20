const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/posts', require('./routes/posts.routes'));

const PORT = config.get('port') || 5000;

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => console.log(`App has been started at port ${PORT}...`));
  } catch (e) {
    console.log('Server ERROR!', e.message);
    process.exit(1);
  }
};

start();
