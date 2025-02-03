module.exports = {
  siteTitle: 'Jérémy Caron-Labalette',
  siteDescription:
    'Jérémy est un développeur web passionné, qui adore explorer et apprendre de nouvelles technologies.',
  siteKeywords:
    'Jérémy Caron-Labalette, développeur web, développeur full stack, javascript, portfolio, créatif, innovant',
  siteUrl: 'https://jeremy-caron-labalette.netlify.app/',
  siteLanguage: 'fr_FR',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jérémy Caron-Labalette',
  location: 'France',
  email: 'contact@jeremy-caron-labalette.fr',
  github: 'https://github.com/Misokka',
  twitterHandle: '@JeremyDev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Misokka',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jeremy-caron-labalette',
    },
    {
      name: 'Codeur.com',
      url: 'https://www.codeur.com/-jeremyckmrr',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jeremy.webdev/?utm_source=ig_web_button_share_sheet',
    },
  ],

  navLinks: [
    {
      name: 'A propos',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projet',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
