"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import {testimonials} from "@/data/testimonials"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

export function Testimonials() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-16 bg-muted relative">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say About Me</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
          centerInsufficientSlides
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-[20px] swiper-pagination mt-3"></div>
    </section>
  )
}

