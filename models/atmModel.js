import mongoose from 'mongoose';

const atmSchema = mongoose.Schema({
    geometry: { type: String, coordinates: [] },
    address: String,
    provider: String,
})

var AtmMessage = mongoose.model('AtmMessage', atmSchema);

export default AtmMessage;