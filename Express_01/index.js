const express = require("express");
const app = express();

const users = [{
    name :"John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());
app.get("/", (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length;i++) {
        if(johnKidneys[i].healthy) {  
            numOfHealthyKidneys = numOfHealthyKidneys + 1;
        }
    }
    const numOfUnhealthyKidneys = numberOfKidneys - numOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.post("/",(req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",(req,res) => {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({}); 
})

app.delete("/", (req,res) => {
    if(isThereAtLeastOneUnHealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
           if( users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
           }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "done"})
    } else {
        res.status(411).json({
            msg : "You have no bad kidneys"
        })
    }

    
})

function isThereAtLeastOneUnHealthyKidney(){
    let atLeastOneUnHealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy) {
            atLeastOneUnHealthyKidney = true;
        }
    } 
    return atLeastOneUnHealthyKidney;
}
app.listen(3500);
