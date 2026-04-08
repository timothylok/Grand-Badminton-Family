// Add image filenames to the images array as you place them in /public/images/gallery/
// Each image should have a src (filename only), alt text, and optional caption.

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export const gallery = {
  hero: {
    eyebrow: 'Gallery',
    headline: 'Life at Grand Badminton Family',
    subheadline:
      'A look at our sessions, events, and community. More moments added regularly.',
  },

  images: [
    // Add real images here. Example:
    // { src: 'match-night-01.jpg', alt: 'Players competing at a Friday evening session', caption: 'Friday Night Session' },
    // { src: 'tournament-2024.jpg', alt: 'Players at the 2024 tournament', caption: '2024 Tournament' },
  ] as GalleryImage[],

  placeholder: {
    label: 'Photos coming soon',
    note: 'Drop images into /public/images/gallery/ and register them in content/gallery.ts to display them here.',
  },
}
