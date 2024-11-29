

const zod = require('zod');
const express = require('express');
const app = express();

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    })
    const response = schema.safeParse(obj);
    console.log(response);
};

app.post('/login', function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            message: 'Your Input is Invalid!'
        })
            return;
    }
});

//assignment to count no. of request
let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    next();
  });

app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestCount });
  });

app.listen(3000);