const group = require('../Models/GroupModel')

const getName = (req, res) => {
    group.getName((err, group) => {
        if (err)
        res.status(500).send(err);
        res.status(203).send(group)
    })
}
const adminSetGroup = (req, res) => {
    group.setGroup(req, (err, group) => {
        if (err)
        res.status(500).send(err);
        res.status(201).send(group)
    })
}
const adminEditGroup = (req, res) => {
    group.edit(req, (err, group) => {
        if (err)
        res.status(500).send(err);
        res.status(201).send(group)
    })
}
const adminDeleteGroup = (req, res) => {
    group.del(req, (err, group) => {
        if (err)
        res.status(500).send(err);
        res.status(201).send(group)
    })
}
const getUsers = (req, res) => {
    group.getUsers(req, (err, group) => {
        if (err)
        res.status(500).send(err);
        res.status(200).send(group)
    })
}

module.exports = {
    getName,
    getUsers,
    adminSetGroup,
    adminEditGroup,
    adminDeleteGroup
}