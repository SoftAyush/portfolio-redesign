// import {NextResponse} from "next/server";
// import nodemailer from "nodemailer";
//
// export async function POST(req: Request) {
//     try {
//         const {name, email, subject, message} = await req.json();
//
//         if (!name || !email || !subject || !message) {
//             return NextResponse.json({error: "All fields are required"}, {status: 400});
//         }
//
//         // Configure Nodemailer transporter (Use your credentials)
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "ayushtimalsina19@gmail.com", // Replace with your email
//                 pass: "iudd fcdr cnrd uuyl", // Replace with your app password
//             },
//         });
//
//         // Email options
//         const mailOptions = {
//             from: email, // User's email as sender
//             to: "ayushtimalsina2002@gmail.com\n", // Your email
//             subject: `Contact Form: ${subject}`,
//             text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
//         };
//
//         // Send email
//         await transporter.sendMail(mailOptions);
//
//         return NextResponse.json({message: "Email sent successfully!"}, {status: 200});
//     } catch (error) {
//         console.error("Email sending error:", error);
//         return NextResponse.json({error: "Failed to send email"}, {status: 500},);
//     }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse the incoming JSON request
        const body = await req.json();

        // Log the incoming data to check for issues
        console.log("Received data:", body);

        const { name, email, subject, message } = body;

        // Ensure that all fields are present
        if (!name || !email || !subject || !message) {
            console.error("Missing fields:", { name, email, subject, message });
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Create transporter for sending email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ayushtimalsina19@gmail.com", // Replace with your email
                pass: "iudd fcdr cnrd uuyl", // Replace with your app password
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // User's email as sender
            to: "ayushtimalsina2002@gmail.com\n", // Your email
            subject: `Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "ayushtimalsina2002@gmail.com",
            subject: `📩 Contact Form: ${subject}`,
            html: `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                margin: 0;
            }
            .container {
                max-width: 600px;
                background: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                margin: 0 auto;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .header {
                background: linear-gradient(135deg, #6e8efb, #a777e3);
                color: white;
                text-align: center;
                padding: 20px;
            }
            .header h1 {
                margin: 0;
                font-size: 20px;
            }
            .content {
                padding: 25px;
                color: #333;
            }
            .row {
                margin-bottom: 15px;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }
            .label {
                font-weight: bold;
                color: #6e8efb;
                display: block;
                margin-bottom: 5px;
            }
            .message {
                background: #f5f7ff;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #6e8efb;
                margin-top: 15px;
            }
            .footer {
                background: #f5f5f5;
                font-size: 12px;
                text-align: center;
                padding: 12px;
                color: #777;
            }
            a {
                color: #6e8efb;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>You have received a new message from your website</p>
            </div>
            <div class="content">
                <div class="row">
                    <span class="label">Subject</span>
                    <span>${subject}</span>
                </div>
                <div class="row">
                    <span class="label">From</span>
                    <span>${name}</span>
                </div>
                <div class="row">
                    <span class="label">Email</span>
                    <a href="mailto:${email}">${email}</a>
                </div>
                <div class="message">
                    <span class="label">Message</span>
                    <p>${message}</p>
                </div>
            </div>
            <div class="footer">
                This email was sent from your website's contact form.  
                Please do not reply directly to this email.
            </div>
        </div>
    </body>
    </html>
    `,
            text: `
    New Contact Form Submission
    ==========================
    Subject: ${subject}
    From: ${name}
    Email: ${email}

    Message:
    ${message}

    ---
    This email was sent from your website's contact form.
    `
        });


        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
