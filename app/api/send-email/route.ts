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

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
