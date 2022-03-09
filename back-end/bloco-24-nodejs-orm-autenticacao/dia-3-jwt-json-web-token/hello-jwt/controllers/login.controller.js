module.exports = (_req, _res, next) => {
  try {
    console.log('login');
  } catch (e) {
    next(e);
  }
};