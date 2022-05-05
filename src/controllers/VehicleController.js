const Vehicle = require("../entities/Vehicle")


const create = (request, response) => {
    const vehicle = (request.body)
    Vehicle.create({
        name: vehicle.name,
        model: vehicle.model,
        price: 12000.00
    }).then((result) => {
        response.status(200).send(result)
    }).catch((error) => {
        console.log(error)
        response.status(400).send(error)
    })
}

const findAll = (request, response) => {

    Vehicle.findAll().then((result) => {
        if (result === null) {
            response.status(200).send({
                'Message': `Any vehicle was found!`
            })
        } else {
            response.status(200).send(result)
        }
    }).catch((error) => {
        console.log(error)
        response.status(400).send(error)
    })
}

const findOne = (request, response) => {
    const id = request.params.id

    Vehicle.findByPk(id).then((result) => {
        if(result === null) {
            response.status(200).send({
                'Message': `Vehicle with id ${id} not found`
            })
        }else{
            response.status(200).send(result)
        }
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}


const update = (request, response) => {
    const id = request.params.id
    const vehicle = request.body

    Vehicle.findByPk(id).then((result) => {
        if (result === null) {
            response.json({
                'Message': `Vehicle with id ${id} not found`
            })
        } else {
            result.set(vehicle)
            result.save().success(()=>{
                response.status(200).send(result)
            }).error((error)=>{
                response.json(error)
            })
        }
    }).catch((error) => {
        response.json(error)
    })
}

const remove = (request, response) => {
    const id = request.params.id

    Vehicle.findByPk(id).then((result) => {
        if (result === null) {
            response.status(200).send({
                'Message': `Vehicle with id ${id} not found, error on update!`
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