"use client";

import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {ArrowRight, Send, Download, CheckCircle} from "lucide-react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import Link from "next/link";
import {useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";

export function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/assets/Ayush-Timalsina-Resume.pdf";
        link.download = "Ayush-Timalsina-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative py-6 md:py-18 overflow-hidden">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary-50)_0%,transparent_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary-900)_0%,transparent_100%)] opacity-20"/>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="flex flex-col gap-4 text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Ayush Timalsina
                        </h1>
                        <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
                            I&apos;m a{" "}
                            <TypeAnimation
                                sequence={[
                                    "Mobile Application Developer",
                                    2000,
                                    "Freelancer",
                                    2000,
                                ]}
                                repeat={Number.POSITIVE_INFINITY}
                                className="text-primary font-semibold"
                            />
                        </div>
                        <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8 mx-auto lg:mx-0">
                            Crafting exceptional mobile experiences with clean, well-structured code and creative,
                            innovative solutions. Specializing in Flutter and native app development to bring your
                            vision to life with seamless functionality and performance.
                        </p>
                        <ul className="text-left space-y-2 mt-4">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20}/>
                                <span>2+ years of mobile development experience</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20}/>
                                <span>Expertise in cross-platform and native technologies</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20}/>
                                <span>Strong focus on user-centric design and performance</span>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    <Send className="mr-2 h-4 w-4"/>
                                    Hire Me
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" onClick={handleDownloadCV}>
                                <Download className="mr-2 h-4 w-4"/>
                                Get CV
                            </Button>

                        </div>
                        <Link
                            href="/portfolio"
                            className="flex items-center justify-center lg:justify-start hover:text-foreground mt-6 transition-colors"
                        >
                            <span>Explore my work</span>
                            <ArrowRight className="h-4 w-4 ml-1"/>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="relative aspect-square max-w-md mx-auto lg:max-w-2xl lg:mr-0 order-1 lg:order-2"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-foreground opacity-10 blur-3xl rounded-full"/>
                        <div
                            className="relative z-10 overflow-hidden rounded-full border-8 border-background/50 shadow-2xl">
                            {!imageLoaded && (
                                <Skeleton className="absolute inset-0 bg-muted"/>
                            )}
                            <Image
                                src="/assets/Aayush.jpg"
                                alt="Ayush Timalsina Picture"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full"
                                priority
                                onLoad={() => setImageLoaded(true)}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
