import express from 'express';
import rederer from "./helpers/renderer";

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send(rederer());
})

app.listen(3000, () => {
    console.log('Listenning on port 3000')
})