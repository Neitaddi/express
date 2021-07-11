function logger(req, res, next) {
   
    // let now = new Date().toString;
    let date = new Date().getDay();
    const hours = new Date().getHours();
    // console.log(`${now}: ${req.methode} ${req.url}`)
    console.table({ method: req.method, path: req.url });
    if (date > 0 && date < 6 && hours > 9 && hours < 17) {
      console.log("During Business Hours!");
  
      next();
    } else {
      console.log("out of office");
      res.sendFile(__dirname + "/logger.html");
    }
  }
  module.exports = logger;