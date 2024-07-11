import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    tittle: {
        type:  String,
        required: true
    },
    description: {
        type:  String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        rer: 'User',
        required: true
    }

}, {
    timestamps: true // Automatically add createdAt and updatedAt to the schema
})

export default mongoose.model('Task', taskSchema)