"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

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
      <DialogContent className="max-w-7xl max-h-[90vh] rounded-[2rem]">
        <DialogHeader>
          <DialogTitle>{title} UI</DialogTitle>
        </DialogHeader>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: ".swiper-pagination", }}
          className="w-full h-[65vh] min-h-[320px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full flex-col gap-5">
                {/* The image keeps the whole frame; the caption sits under it. */}
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-muted/30">
                  <ImageWithFallback
                    src={image.src || "/placeholder.svg"}
                    alt={`${title} UI ${index + 1}`}
                    fill
                    className="object-contain"
                    fallbackLabel={`Screen ${index + 1} unavailable`}
                  />
                </div>
                {/* Reserved height keeps the image from resizing between slides. */}
                <p className="min-h-[3rem] shrink-0 px-10 text-center text-sm leading-relaxed text-muted-foreground">
                  {image.caption}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination relative"></div>
      </DialogContent>
    </Dialog>
  )
}

