const getPing = (_req, res) => {
  res.status(200).json({ "message": "pong!"})
}

module.exports = {
  getPing,
}