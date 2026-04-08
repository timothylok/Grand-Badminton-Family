'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryImage } from '@/content/gallery'

interface GalleryGridProps {
  images: GalleryImage[]
  placeholder: { label: string; note: string }
}

export function GalleryGrid({ images, placeholder }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-24 px-8 text-center">
        <span className="mb-4 text-5xl">🏸</span>
        <p className="text-lg font-semibold text-slate-700">{placeholder.label}</p>
        <p className="mt-2 max-w-sm text-sm text-slate-500">{placeholder.note}</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(img)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View: ${img.alt}`}
          >
            <Image
              src={`/images/gallery/${img.src}`}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-navy-900/80 px-4 py-2 text-sm text-white transition-transform duration-300 group-hover:translate-y-0">
                {img.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={`/images/gallery/${lightbox.src}`}
                alt={lightbox.alt}
                fill
                className="rounded-xl object-contain"
                sizes="100vw"
              />
            </div>
            {lightbox.caption && (
              <p className="mt-3 text-center text-sm text-slate-300">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
