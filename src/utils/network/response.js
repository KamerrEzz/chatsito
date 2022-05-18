const success = (req, res, data) => {
  res.status(200).json(data);
};

const created = (req, res, data) => {
  res.status(201).json(data);
};

module.exports = {
  success,
  created
};
