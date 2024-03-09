const Circulation = require('../models/circulation');
const fineCalculator = require('../utils/fineCalculator')


async function checkoutBook(req,res){

    const {bookId,memberId}= req.body
    try{
        const existingcirculation = await Circulation.findOne({bookId,eventType:'checkout'});
        if(existingcirculation){
            return res.status(400).json({message:'book is alresy checked out'})
        }
    
    const newCirculation = new Circulation({
        bookId,
        memberId,
        eventType:'checkout'
    });
    await newCirculation.save();
    res.status(201).json({message:"checkedout success"})
}
catch(error){
    res.status(500).json({message:error.message})
}
}

async function returnbook(req,res){

  
    try{
        const circulation = await Circulation.findOne({bookId,eventType:'checkout'});
        if(!circulation){
            return res.status(404).json({message:'bookv not checked out'})
        }
    
  
circulation.eventType = 'return'
    await circulation.save();
    res.status(201).json({message:"checkedout success"})
}
catch(error){
    res.status(500).json({message:error.message})
}
}

async function calculatedue(req,res){

    try{
        const overduebooks = await circulation.findOne({
            eventType:'checkedout',
            timestamp:{}
        })
    }
    catch(error){

    }

}

module.exports = {
    checkoutBook,
    returnbook,
    calculatedue
}