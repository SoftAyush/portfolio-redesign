"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Swal from 'sweetalert2';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send email");

            form.reset();
            await Swal.fire({
                title: "Inquiry Sent",
                text: "Thank you for reaching out. I will review your request and get back to you within 24 hours.",
                icon: "success",
                customClass: { popup: "rounded-[2rem] glass" }
            });
        } catch (error) {
            await Swal.fire("Submission Error", "There was an issue sending your message. Please try again or contact me directly via email.", "error");
        }

        setIsSubmitting(false);
    };


    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-between py-4"
                    >
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                                Initiate Collaboration
                            </span>
                            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase mb-12">
                                Start your <br />
                                <span className="text-muted-foreground/30">Project.</span>
                            </h1>
                        </div>

                        <div className="space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Email Official</p>
                                    <a href="mailto:ayushtimalsina2002@gmail.com" className="text-xl font-bold hover:text-primary transition-colors block">
                                        ayushtimalsina2002@gmail.com
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Phone Direct</p>
                                    <a href="tel:+9779869030572" className="text-xl font-bold hover:text-primary transition-colors block">
                                        +977 9869030572
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Office Location</p>
                                    <p className="text-xl font-bold">Lalitpur, Nepal</p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-muted/30 border-2 border-dashed border-border/50">
                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    &ldquo;I specialize in taking complex requirements and turning them into seamless mobile experiences. Whether you have a full brief or just an idea, let&apos;s build it correctly from day one.&rdquo;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="h-full border-border/50 bg-background rounded-[3rem] p-10 md:p-16 shadow-2xl">
                            <form onSubmit={handleSubmit} className="flex flex-col h-full gap-10">
                                <div className="space-y-10">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                                        <Input name="name" placeholder="John Doe" required className="h-16 rounded-2xl bg-muted/50 border-none px-6 text-lg focus-visible:ring-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                                        <Input name="email" type="email" placeholder="john@example.com" required className="h-16 rounded-2xl bg-muted/50 border-none px-6 text-lg focus-visible:ring-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Service Required</label>
                                        <Input name="subject" placeholder="Mobile App Development" required className="h-16 rounded-2xl bg-muted/50 border-none px-6 text-lg focus-visible:ring-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                                        <Textarea name="message" placeholder="Briefly describe your project goals..." required className="min-h-[150px] rounded-2xl bg-muted/50 border-none p-6 text-lg focus-visible:ring-primary" />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="h-20 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all mt-auto shadow-xl"
                                >
                                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

