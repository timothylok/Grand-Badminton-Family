import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { GalleryGrid } from '@/components/GalleryGrid'
import { gallery } from '@/content/gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Grand Badminton Family sessions, events, and community moments in North Harbour.',
  openGraph: {
    title: 'Gallery | Grand Badminton Family',
    description:
      'Photos from Grand Badminton Family sessions, events, and community moments in North Harbour.',
    url: '/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow={gallery.hero.eyebrow}
        headline={gallery.hero.headline}
        subheadline={gallery.hero.subheadline}
        size="medium"
      />

      <section className="bg-white py-16">
        <Container>
          <GalleryGrid images={gallery.images} placeholder={gallery.placeholder} />
        </Container>
      </section>
    </>
  )
}
