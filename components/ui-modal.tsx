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
      {/* overflow-y-auto is the safety net: on short viewports (landscape phones)
          the header, carousel and pagination can exceed 90vh, and without it the
          overspill is silently clipped rather than scrollable. */}
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl sm:rounded-[2rem] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{title} UI</DialogTitle>
        </DialogHeader>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: ".swiper-pagination", }}
          className="w-full h-[55vh] min-h-[200px] sm:h-[60vh] sm:min-h-[280px] lg:h-[65vh]"
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

