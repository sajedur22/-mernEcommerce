const nodemailer=require('nodemailer');
const {sendMail} = require("nodemailer/lib/mailer");
const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{
    let transporter=nodemailer.createTransport({
        host:"mail.teamrabbuil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })
    let mailOption={
        from:'MERN Ecommerce Solution <info@teamrabbil.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText,

    }
    return await sendMail(mailOption);
}

module.exports=EmailSend;