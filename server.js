import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json())
app.use(cors())


//db congig
const connection_url = 'mongodb+srv://admin:admin@tiktokyt.cjymhwi.mongodb.net/tiktokDB';
mongoose.connect(connection_url, {
     useNewUrlParser : true,
     useUnifiedTopology : true
})




//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post('/v2/posts',  (req, res) => {
    const videoData = req.body;
    Videos.create(videoData)
            .then((data) => res.status(201).send(data)) 
            .catch(err => res.status(500).send("Errorrrr , "+err))
})

// app.post('/v2/posts', async (req, res) => {
//     try {
//         const vdoData = req.body;
//         const new_video = await new Videos(vdoData)
//         new_video.save()
//             res.status(201).send(new_video)
//     } catch (error) {
//         res.status(500).send("EEEEE, "+error)
//     }
// })

app.get('/v2/posts', (req, res) => {
    Videos.find({})
        .then(videos => res.status(200).send(videos))
        .catch(err => res.status(500).send(err))
})

//app listener
app.listen(port, () => {
    console.log("server is up on port, " + port);
})