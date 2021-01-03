const express = require('express');
const sgMail = require("@sendgrid/mail");
const nodemailer = require('nodemailer');
const CORS = require('cors');
const keys = require('./config/keys')
const path = require('path');


const port = process.env.PORT || 5000;
//const API_KEY = keys.Key;

//sgMail.setApiKey(API_KEY);

const app = express();
app.use(express.json());
app.use(CORS());


app.post("/mail", (req, res) => {
    console.log(req.body);
    // .then(() => {
    //     console.log('Email sent....')
    //     res.redirect("/mail")
    // }).catch((error) => {
    //     console.log(error)
    // })
    let mailTransporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
          user: "Enter your mail",
          pass: "Enter your pass",
        },
    });
    // let mailTransporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'celestino.lowe@ethereal.email',
    //         pass: 'uBZGkGEGCpZ4devmx5'
    //     }
    // });
    
      
    let mailDetails = { 
        from: 'styagi689@gmail.com', 
        to: req.body.data, 
        subject: 'Regarding Bless Club Donation', 
        text: 'Thank you for your donation. Your generosity is appreciated, Stay Tuned!'
    }; 
      
    mailTransporter.sendMail(mailDetails, function(err, data) { 
        if(err) { 
            console.log(err); 
        } else { 
            console.log('Email sent successfully'); 
            res.redirect("/mail")
        } 
    }); 
});

// let mailTransporter = nodemailer.createTransport({ 
//     service: 'gmail', 
//     auth: { 
//         user: 'xyz@gmail.com', 
//         pass: '*************'
//     } 
// }); 
  
// let mailDetails = { 
//     from: 'xyz@gmail.com', 
//     to: 'abc@gmail.com', 
//     subject: 'Test mail', 
//     text: 'Node.js testing mail for GeeksforGeeks'
// }; 
  
// mailTransporter.sendMail(mailDetails, function(err, data) { 
//     if(err) { 
//         console.log('Error Occurs'); 
//     } else { 
//         console.log('Email sent successfully'); 
//     } 
// }); 

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*',(req, res)=>{
        res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
    })
}
app.get("/mail" , (req,res) => {
    res.status(200).send();
})

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});
