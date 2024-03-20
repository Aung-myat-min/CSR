import { EmailTemplate } from "@/components/EmailTemplate";
import { render } from "@react-email/render";
const nodemailer = require("nodemailer");

export async function sendMail(
  toEmail: string,
  otpText: string,
  senderEmail: string = process.env.EMAIL! // Default to using the same email for sender and recipient
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Render the EmailTemplate component to an HTML string for the visitor's email
  const emailHtml = render(EmailTemplate({ email: toEmail }));

  // Visitor's email options
  const visitorMailOptions = {
    from: senderEmail,
    to: toEmail,
    subject: "Contacting to GUSTO-CSR",
    html: emailHtml,
  };

  // Self-sent email options
  const selfMailOptions = {
    from: senderEmail,
    to: senderEmail, // Send to yourself
    subject: `${toEmail} has contacted us`,
    text: `${toEmail} has contacted us with the message:\n${otpText}`,
  };

  // Promise.all to send both emails concurrently
  return Promise.all([
    sendEmail(transporter, visitorMailOptions),
    sendEmail(transporter, selfMailOptions),
  ])
    .then(([visitorEmailSent, selfEmailSent]) => {
      // Return true if both emails were sent successfully
      return visitorEmailSent && selfEmailSent;
    })
    .catch((error) => {
      // If any email sending fails, reject with the error
      throw error;
    });
}

// Helper function to send an email
async function sendEmail(transporter: any, mailOptions: any): Promise<boolean> {
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
