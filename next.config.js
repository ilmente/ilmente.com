module.exports = {
    exportPathMap: async (defaultPathMap) => ({
        '/': { page: '/' },
        '/resume.html': { page: '/resume' }
    }),

    env: {
        site: {
            name: 'ilmente.com',
            description: 'eclectic fool, since 1986'
        },
        menus: {
            main: [
                { label: 'About', href: '/' },
                { label: 'Resume', href: '/resume' }
            ]
        }
    }
}
