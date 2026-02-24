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

        // Consolidated Premium Email Template
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "ayushtimalsina2002@gmail.com",
            subject: `📩 New Brief: ${subject}`,
            html: `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #050505;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                color: #ffffff;
            }
            .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #050505;
                padding: 40px 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #0a0a0a;
                border: 1px solid #1a1a1a;
                border-radius: 24px;
                overflow: hidden;
                box-shadow: 0 40px 80px -12px rgba(0,0,0,0.5);
            }
            .header {
                padding: 40px 40px 20px 40px;
            }
            .badge {
                display: inline-block;
                padding: 6px 12px;
                background-color: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 100px;
                font-size: 10px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                color: #ffffff;
                margin-bottom: 24px;
            }
            h1 {
                margin: 0;
                font-size: 32px;
                font-weight: 800;
                letter-spacing: -0.04em;
                line-height: 1.1;
            }
            .content {
                padding: 0 40px 40px 40px;
            }
            .data-group {
                margin-top: 32px;
                border-top: 1px solid #1a1a1a;
                padding-top: 32px;
            }
            .label {
                font-size: 11px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: #666666;
                margin-bottom: 8px;
                display: block;
            }
            .value {
                font-size: 16px;
                color: #ffffff;
                line-height: 1.6;
            }
            .message-box {
                margin-top: 32px;
                padding: 24px;
                background-color: #111111;
                border: 1px solid #1d1d1d;
                border-radius: 16px;
                font-size: 15px;
                line-height: 1.7;
                color: #cccccc;
            }
            .footer {
                padding: 32px 40px;
                background-color: #080808;
                border-top: 1px solid #141414;
                text-align: center;
            }
            .footer p {
                margin: 0;
                font-size: 12px;
                color: #444444;
                line-height: 1.5;
            }
            a {
                color: #ffffff;
                text-decoration: underline;
                text-decoration-color: #333333;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="header">
                    <div class="badge">Direct Brief</div>
                    <h1>New Message Received via Portfolio.</h1>
                </div>
                <div class="content">
                    <div class="data-group">
                        <span class="label">Sender Details</span>
                        <div class="value">
                            <strong>${name}</strong><br>
                            <a href="mailto:${email}">${email}</a>
                        </div>
                    </div>
                    <div class="data-group">
                        <span class="label">Inquiry Subject</span>
                        <div class="value">${subject}</div>
                    </div>
                    <div class="message-box">
                        <span class="label" style="margin-bottom: 12px;">Message Content</span>
                        ${message}
                    </div>
                </div>
                <div class="footer">
                    <p>This inquiry was captured via your portfolio system.<br>© 2024 Your Portfolio | Built for Excellence</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `,
            text: `
PORTFOLIO INQUIRY
================

Sender: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent via Portfolio System.
    `
        });

        return NextResponse.json({ success: true, message: "Premium Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
