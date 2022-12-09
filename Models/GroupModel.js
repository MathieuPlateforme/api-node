var connection = require('../config/db')

const setGroup = (req, res) => {
    const {name} = req.body;
    connection.query('INSERT INTO `groups` (name, createdAt) VALUES (?, NOW())',[name], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const edit = (req, res) => {
    const {name} = req.body;
    const {id} = req.params;
    connection.query('UPDATE `groups` SET name = ?, updatedAt = NOW() WHERE id = ?',[name, id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const del = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM `groups` WHERE id = ?',[id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const getName = (res) => {
    connection.query('SELECT name FROM `groups`', (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const getUsers = (req, res) => {
    const {id} = req.params
    connection.query('SELECT firstname, lastname FROM users u INNER JOIN `groups` g ON g.id = groups_id WHERE g.id = ?',[id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}


module.exports = {
    setGroup,
    getName,
    getUsers,
    edit,
    del
}