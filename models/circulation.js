const mongoose = require('mongoose');

const circulationSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Book',
        require : true
    },
    memberId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Member',
        require : true
    },
    bookId:{
        type: String,
        enum:['checkout','return'],
        require : true
    },
    bookId:{
        type: Date,
        default : Date.now,
        require : true
    }
});

const Circulation = mongoose.model('Circulation',circulationSchema);

module.exports = Circulation;