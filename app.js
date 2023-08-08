const express = require('express');
const app = express();
const controller = require("./controllers/postController")

app.use(express.json());

app.post('/get-candidate-status', controller.postHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 