const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{user:"sajedur645@gmail.com",pass:"vwly ajly pnby nsak"},
       // tls:{rejectUnauthorized:true}
    })
    /*let  transport= nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })*/


    let mailOption={
        //from:'MERN Ecommerce Solution <info@teamrabbil.com>',
        from:'MERN Ecommerce Solution <sajedur645@gmail.com>',
        to: EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOption)
}


module.exports=EmailSend;