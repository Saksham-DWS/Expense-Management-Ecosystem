import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const send = async () => {
  try {
    console.log('Sending test mail with:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_FROM: process.env.EMAIL_FROM,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection/auth first to surface errors immediately
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'SMTP Test',
      text: 'SMTP working!',
    });

    console.log('Test mail sent!');
    process.exit(0);
  } catch (e) {
    console.error('ERROR:', e);
    process.exit(1);
  }
};

await send(); // wait for async send
