const express = require("express");
app = express();
const routes = require("./routes")

app.set('view engine', 'ejs')

app.use(  express.urlencoded({ extended: true })  );
app.use(express.static("public"))

app.use((err, req, res, next) => {
    if (!err) {
        next(new AppError(httpStatus.NOT_FOUND, 'Not found'))
    }
})
app.use(routes)




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(` ... Running`)

    console.table({ Local: `http://localhost:${PORT}`, Network: `http://${process.env.Network}:${PORT}` })
})
