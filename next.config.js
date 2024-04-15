module.exports = {
  exportPathMap: async (defaultPathMap) => ({
    ...defaultPathMap,
    '/resume.html': { page: '/resume' },
  }),

  env: {
    site: {
      name: 'ilmente.com',
      description: 'eclectic fool, since 1986',
    },
    menus: {
      main: [
        { label: 'Home', href: '/' },
        { label: 'Resume', href: '/resume' },
      ],
    },
  },
};
