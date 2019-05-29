const express = require(`express`);
const bodyparser = require(`body-parser`);
const productRouter = require(`./product`);
const categoryRouter = require(`./category`);
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(productRouter);
app.use(categoryRouter);

app.listen(3000,'0.0.0.0',(request,response) => {
    console.log('server started on port 3000');
});