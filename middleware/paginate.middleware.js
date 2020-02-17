module.exports = model => async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalCount = await model.countDocuments().exec();

  const results = {};

  if (endIndex < totalCount) {
    results.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit,
    };
  }

  try {
    results.results = await model
      .find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);
    res.paginatedResults = results;
    next();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
