var express = require('express')
const app = express();
// const PORT = process.env.PORT || 8080
const path = require('path');

app.post('/users/create/', (req, res) => {
    try {
        res.status(201);
        res.send('Users Create');
    } 
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.post('/users/login/', (req, res) => {
    try {
        res.status(200);
        res.send('Users Login');
    } 
    catch (error) {
        res.status(500)
        res.send(error)
    }

})
app.get('/users/list/', (req, res) => {
    try{
        res.status(200);
        res.send('Users List'); 
        
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.get('/groups/name/', (req, res) => {
    try{
        res.status(203);
        res.send('Groups Name');
        
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.get('/groups/users/', (req, res) => {
    try{
        res.status(200);
        res.send('Groups Users');
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.get('/users/details/:id', (req, res) => {
    try{
        res.status(200); 
        res.send('Users Details');   
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.post('/users/add/groups/', (req, res) => {
    try
    {
        res.status(201);
        res.send('Users add Groups');  
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.put('/users/edit/', (req, res) => {
    try{
        res.status(200); 
        res.send('Users edit');   
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.put('/admin/users/edit/', (req, res) => {
    try{
        res.status(200); 
        res.send('Admin Users Edit');   
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.delete('/admin/users/delete/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id);
        res.status(204);  
        res.send('Admin Users Delete');  
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.post('/admin/groups/add/', (req, res) => {
    try{
        res.status(201);
        res.send('Admin Groups Add');    
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.put('/admin/groups/edit/', (req, res) => {
    try{
        res.status(200);   
        res.send('Admin Groups Edit'); 
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.delete('/admin/groups/delete/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id);
        res.status(204); 
        res.send('Admin Groups Delete');   
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.put('/admin/groups/users/edit/', (req, res) => {
    try{
        res.status(200);
        res.send('Admin Groups Users Edit');    
    }
    catch (error) {
        res.status(500)
        res.send(error)
    }
})
app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/index.html'))
})

// Database
// require('./db.js');

app.listen(3000);