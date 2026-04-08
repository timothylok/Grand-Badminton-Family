export const home = {
  hero: {
    headline: 'Badminton for Everyone in North Harbour',
    subheadline:
      'Grand Badminton Family brings players, families, and the community together through affordable, quality badminton. From beginners to seasoned players — everyone is welcome.',
    cta: [
      { label: 'About Us',     href: '/about',   variant: 'primary'   as const },
      { label: 'View Gallery', href: '/gallery', variant: 'secondary' as const },
    ],
  },

  features: [
    {
      icon: '🏸',
      title: 'Affordable Play',
      description:
        'We believe cost should never be a barrier. Our sessions are priced to be accessible for players and families at every level.',
    },
    {
      icon: '🏟️',
      title: 'Quality Facilities',
      description:
        'Play in well-maintained courts with proper equipment. We invest in the environment so you can focus on your game.',
    },
    {
      icon: '🤝',
      title: 'Community First',
      description:
        'We foster friendly relationships between clubs, schools, and community groups — on and off the court.',
    },
    {
      icon: '📈',
      title: 'Develop Your Game',
      description:
        'Whether you are picking up a racket for the first time or sharpening your skills, we support every step of your badminton journey.',
    },
  ],

  clubHighlight: {
    eyebrow: 'Join Us on Court',
    title: 'Grand Badminton Family Club',
    description:
      'Our club session is the perfect way to get involved. Show up, play, and meet fellow badminton enthusiasts in a relaxed and friendly environment.',
    schedule: 'Friday evenings from 8pm to 10pm at Grand Badminton Family',
    cta: { label: 'Get in Touch', href: '/contact' },
  },

  sections: [
    {
      title: 'Part of Badminton New Zealand',
      description:
        'As an organisation associated with Badminton New Zealand Incorporated, we operate within a national framework that supports the development and integrity of badminton across the country.',
    },
  ],
}
