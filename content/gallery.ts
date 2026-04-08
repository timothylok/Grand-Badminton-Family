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
    { src: 'girl-and-boy.png', alt: 'Girl and boy playing badminton' },
  ] as GalleryImage[],

  placeholder: {
    label: 'Photos coming soon',
    note: 'Drop images into /public/images/gallery/ and register them in content/gallery.ts to display them here.',
  },
}
