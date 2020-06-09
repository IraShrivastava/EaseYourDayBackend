const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const user = require('./userDetails')


let sendEmail = (sendEmailOptions) => {

    let transporter = nodemailer.createTransport(
        {
        service: 'gmail',
        auth: {
                //user: "passrecoveryedwisor@gmail.com", 
                //pass: "passw0rd4edwisor**"
                user: user.User.userEmail,
                pass: user.User.userPass
            }
        }
    );

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'passrecoveryedwisor@gmail.com', // sender address
        to: sendEmailOptions.email, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Thank you for being a part of Ease Your Day Application, Hope you will enjoy the service .
        `, // plain text body
        html: sendEmailOptions.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.log('NOT ABLE TO SEND MAIL')
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendEmail: sendEmail
  }