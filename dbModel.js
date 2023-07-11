import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    url : String,
    channel : String,
    description : String,
    likes : String,
    comments : String,
    shares : String
});

export default mongoose.model('tiktokVideos', tiktokSchema)