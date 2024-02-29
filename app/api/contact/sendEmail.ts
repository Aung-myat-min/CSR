var nodemailer = require("nodemailer");

export async function sendMail(
  toEmail: string,
  otpText: string
): Promise<boolean> {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Contacting to GUSTO-CSR",
    text: otpText,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}
