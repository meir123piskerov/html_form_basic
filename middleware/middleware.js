function middleware(req, res, next) {
  console.log(req.body);

  if (req.body) {
    {
      next();
    }
  } else {
    res.status(404).send("missing body");
  }
}
export default middleware;
