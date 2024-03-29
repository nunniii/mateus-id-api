const Data = require("../database/database")
const basePath = `${__dirname}/../views/`;

const controllers = {

    index: {
        index(request, response) {
            response.status(200).send(`Hello uwu`);
        },
        index_get_access(request, response) {
            response.status(200).render(`${basePath}request-access`);
        },
        request_access(request, response) {

            const data = new Data({
                email: request.body.email,
                educational_institution: request.body.educational_institution,
                rawHeaders: request.rawHeaders.toString()
            });
            data.save()
                .then((result) => {
                    const data = {mail: process.env.MAIL};
                    return response.status(200).render(`${basePath}send-mail`, {data});
                })
                .catch((err) => {
                    response.status(403).send("Forbidden");
                });
            
        }
    },








    toolsFromOtherScopes: {
        photo(request, response) {
            const { username } = request.params
            const data = {srcPhoto: `https://github.com/${username}.png`, altPhoto: `${username}`}
            if(!username) response.send("Cannot be null")
            else response.status(200).render(`${basePath}photo`, { data })
        }
    },


    generalControllers: {
        forbidden(request, response) {
            response.status(403).send("Forbidden")
        },
    
        notFound(request, response) {
            response.status(404).send("Not found")
        }
    }


}




module.exports = controllers;
