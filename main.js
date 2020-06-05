/********************** 1ª Pregunta ************************************************/

const request = require('request');

const author = (name, lastName, nat, bio, gen, age) => {

    var authorPost = { name: name, last_name: lastName, nacionalidad: "MX", biography: bio, gender: gen, age: age };

    const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

    return new Promise((resolve, reject) => {

        request.post(endPoint, { form: authorPost }, function (error, response, body) {

            if (error) {

                reject("Error");

            } else {
                resolve(body)
                //bodyAuthorPost = body;
            }


        })

    })

};


author("Reyner", "Loza", "PE", "BLABLABLA", "M", 25)
    .then((value) => {
        console.log("PrimeraPregunta")
        console.log(value);
    })
    .catch(() => console.log("Failed Primera Pregunta"));

/********************** 2ª Pregunta ************************************************/



const idValue = (idValue) => {


    const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/" + idValue + "/";

    return new Promise((resolve, reject) => {

        request.get(endPoint, function (error, response, body) {

            if (error) {

                reject("Error");

            } else {
                resolve(body);

            }


        })

    })

};


idValue(6578).then((value) => { console.log("Segunda Pregunta"); console.log(value) }).catch(() => console.log("Failed 2da Pregunta"));


/***********************************3ª Pregunta *****************************/

const update = (id, name, lastName, nat, bio, gen, age) => {

    var updatedAuthor = { name: name, last_name: lastName, nacionalidad: "MX", biography: bio, gender: gen, age: age };

    const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/" + id + "/";

    return new Promise((resolve, reject) => {

        request.put(endPoint, { form: updatedAuthor }, function (error, response, body) {

            if (error) {

                reject("Error");

            } else {
                resolve(body);

            }


        })

    })

};

update(6598, "Reyner", "Loza", "PE", "BLABLABLA", "M", 25).then((value) => { console.log("Tercera Pregunta"); console.log(value) }).catch(() => console.log("Failed 3era Pregunta"));

/******4ta Pregunta ********************/

const deleteById = (idValue) => {


    const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/" + idValue + "/";

    return new Promise((resolve, reject) => {

        request.delete(endPoint, function (error, response, body) {

            if (error) {

                reject("Error");

            } else {
                resolve(body);

            }


        })

    })

};


deleteById(6598).then((value) => { console.log("Cuarta Pregunta"); console.log(value) }).catch(() => console.log("Failed 3da Pregunta"));


/******5ta Pregunta ********************/

author("Reyner", "Loza", "PE", "BLABLABLA", "M", 25)
.then(body => idValue(body.id))
.then(body => update(body.id, "Reyner", "Loza", "PE", "BLABLABLA", "M", 25))
.then(body => deleteById(body.id))
.then(()=> console.log("Eliminado"));