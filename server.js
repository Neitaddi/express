const express = require ('express')

const app =express()

const logger= require("./middleware/logger");


app.use(logger);

const port =3000;

app.listen(port, logger,()=> console.log(`Server is running on port : ${port}`));