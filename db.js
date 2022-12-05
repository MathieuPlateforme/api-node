// Connection on data base MongoDB with mongoose.connect

const mongoose = require("mongoose"); // import de mongoose

mongoose
  .connect('mongodb+srv://node-api:rtTrV73mmpzMHhWu@cluster0.mjujidh.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion Database réussie !");

  })
  .catch(() => console.log("Connexion Database échouée !"));
//   