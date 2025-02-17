"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface UIImage {
  src: string
  caption: string
}

interface UIModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  images: UIImage[]
}

export function UIModal({ isOpen, onClose, title, images }: UIModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>{title} UI</DialogTitle>
        </DialogHeader>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: ".swiper-pagination", }}
          className="w-full h-[800px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`${title} UI ${index + 1}`}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {image.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute swiper-pagination mt-3"></div>
      </DialogContent>
    </Dialog>
  )
}

