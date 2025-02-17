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
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission to Formspree
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    try {
      const response = await fetch('https://formspree.io/f/xyyvryov', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Add this line

      });
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      form.reset();
      await Swal.fire({
        title: "Message Sent!",
        text: "Thank you for your message. I'll get back to you soon.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "dark:bg-gray-900 dark:text-white bg-white text-black",
        },
      });


    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: "There was an issue sending your message. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "dark:bg-gray-900 dark:text-white bg-white text-black",
        },
      });
    }


    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="border-none">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                      <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>Lalitpur, Nepal</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                      <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <a href="mailto:ayushtimalsina2002@gmail.com" className="hover:underline">
                        ayushtimalsina2002@gmail.com
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <a href="tel:+977-9869030572" className="hover:underline">
                        +977-9869030572
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111341878974!3d27.6771825952946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0x2b7185d6e721e4!2sLalitpur%2C%20Nepal!5e0!3m2!1sen!2s!4v1707921548736!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your Message" required className="min-h-[150px]" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

