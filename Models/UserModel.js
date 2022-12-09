var connection = require('../config/db')

const setUser = (req, res) => {
    const {email,password,firstname,lastname} = req.body;
    connection.query('INSERT INTO `users` (email, password, firstname, lastname, createdAt, updatedAt, role, groups_id) VALUES (?, ?, ?, ?, NOW(), ?, ?, ?)',
    [email, password, firstname, lastname, null, 'ROLE_USER', null], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const getList = (res) => {
    connection.query('SELECT firstname, lastname FROM users', (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
} 
const getDetails = (req, res) => {
    const {id} = req.params
    connection.query('SELECT firstname, lastname, email FROM users u INNER JOIN `groups` g ON u.id = groups_id WHERE u.id = ?',[id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const edit = (req, res) => {
    const {email,password,firstname,lastname, groupsid} = req.body;
    const {id} = req.params;
    connection.query('UPDATE `users` SET email = ?, password = ?, firstname = ?, lastname = ?, updatedAt = NOW(), role = ?, groups_id = ? WHERE id = ?',
    [email, password, firstname, lastname, 'ROLE_USER', groupsid, id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const del = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM users WHERE id = ?;',[id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}
const setToGroup = (req, res) => {
    const {groupsid} = req.body;
    const {id} = req.params;
    connection.query('UPDATE users SET groups_id = ? WHERE id = ?;',[groupsid, id], (err, result) => {
        if (err)
        res(null, err);
        res(null, result);
    });
    connection.end
}

module.exports = {
    getList,
    setUser,
    getDetails,
    edit,
    del,
    setToGroup
}