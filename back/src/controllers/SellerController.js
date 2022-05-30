const Seller = require("../entities/Seller")


const create = (request, response) => {
    const seller = (request.body)
    Seller.create({
        name: seller.name,
        age: seller.age
    }).then((result) => {
        response.status(200).send(result)
    }).catch((error) => {
        response.status(400).send(error)
    })
}

const findAll = (request, response) => {

    Seller.findAll().then((result) => {
        if(result === null){
            response.status(200).send({
                'Message': 'Any seller was found!'
            })
        }else{
            response.status(200).send(result)
        }
    }).catch((error) => {
        console.log(error)
        response.status(400).send(error)
    })
}

const findOne = (request, response) => {
    const id = request.params.id

    Seller.findByPk(id).then((result) => {
        if (result === null) {
            response.status(200).send({
                'Message': `Seller with id-${id} was not found!`
            })
        } else {
            response.status(200).send(result)
        }
    }).catch((error) => {
        console.log(error)
        response.status(400).send(error)
    })
}


const update = (request, response) => {
    const id = request.params.id
    const seller = request.body

    Seller.findByPk(id).then((result) => {
        if (result === null) {
            response.status(200).send({
                'Message': `Seller with id-${id} was not found!`
            })
        } else {
            result.set(seller)
            result.save()
            response.status(200).send(result)
        }
    }).catch((error) => {
        response.status(400).send(error)
    })
}

const remove = (request, response) => {
    const id = request.params.id

    Seller.findByPk(id).then((result) => {
        if (result === null) {
            response.status(200).send({
                'Message': `Seller with id-${id} was not found!`
            })
        } else {
            result.destroy()
            response.status(200).send(result)
        }
    }).catch((error) => {
        response.status(400).send(error)
    })
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove
}