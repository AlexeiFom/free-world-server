const Event = require('../models/event/Event')

module.exports.addEvent = async function (req, resp) {
    console.log('Getting evebts...')

    const newEvent = new Event({
        userId: req.body.userId,
        date: req.body.date,
        text: req.body.text,
        isActive: req.body.isActive
    })

    newEvent.save((err, event) => {
        if (err) {
            console.log(`Error : ${err}`)
            resp.json(`Creating Error : ${err}`)
        }
        else {

            console.log('Created Success !')

            resp.json({
                message: 'Created Success !',
                id: event._id
            })
        }
    })
}

module.exports.getEvents = async function (req, resp) {
    console.log('Getting Event')

    const events = await Event.find({ userId: req.params.id })

    resp.send(events)
}

module.exports.delete = async function (req, res) {
    console.log('Deleting Event')

    await Event.findById(req.body.id, (err, data) => {

        if (err) {
            console.log(`Deleting Error : ${err}`)
            res.json(err)
        }

        if (!data) {
            console.log(`Element with this 'Id' is not found.`)
            res.status(400).json((`Element with this 'Id' is not found.`))
        }

        if (data) {
            Event.findByIdAndRemove(req.body.id, (err, data) => {
                console.log('Removing result')

                if (err) {
                    console.log(err)
                    res.status(400).json((err))
                }

                console.log('Deleted Success !')

                res.status(200).json('Deleted Success !')
            });
        }
    })
}