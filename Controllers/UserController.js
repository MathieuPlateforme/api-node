const user = require('../Models/UserModel');

const setUser = (req, res) => {
    user.setUser(req, (err, user) => {
        if (err)
        res.status(400).send(err);
        res.status(201).send(user)
    })
}
const getList = (req, res) => {
    user.getList((err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(200).send(user)
    })
}
const login = (req, res) => {
        let username = req.query.username
        let password = req.query.password

        res.status(200);
        res.send('Users Login');
}
const getDetails = (req, res) => {
    user.getDetails(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(200).send(user)
    }
    )
}
const setToGroup = (req, res) => {
    user.setToGroup(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(201).send(user)
    });
}
const edit = (req, res) => {
    user.edit(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(200).send(user)
    });
}

const adminEdit = (req, res) => {
    user.edit(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(200).send(user)
    });
}
const adminDelete = (req, res) => {
    user.del(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(204).send(user)
    });
}

const adminSetToGroup = (req, res) => {
    user.setToGroup(req, (err, user) => {
        if (err)
        res.status(404).send(err);
        res.status(201).send(user)
    });
}

module.exports = {
    setUser,
    edit,
    login,
    getList,
    getDetails,
    setToGroup,
    adminEdit,
    adminDelete,
    adminSetToGroup
};