const siteMetadata = {
  title: 'Ana Cukarska',
  author: 'Ana Cukarska',
  headerTitle: 'AnaCukarska',
  description: 'PhD Candidate in SciML',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://anacukarska.github.io',
  siteRepo: 'https://github.com/anacukarska.github.io',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  // socialBanner: '/static/images/twitter-card.png',
  email: 'ana.cukarska@tum.de',
  github: 'https://github.com/anacukarska',
  // twitter: 'https://twitter.com/dalelarroder',
  // facebook: 'https://facebook.com/dlarroder',
  linkedin: 'https://www.linkedin.com/in/ana-cukarska/',
  spotify: 'https://open.spotify.com/user/8nu65oy46894a5goz2ts188by',
  // steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
