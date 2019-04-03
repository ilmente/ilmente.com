module.exports = {
    exportPathMap: async (defaultPathMap) => ({
        '/': { page: '/' },
        '/resume.html': { page: '/resume', query: { email: 'test' } }
    }),

    env: {
        site: {
            name: 'ilmente.com',
            description: 'eclectic fool, since 1986'
        },
        menus: {
            main: [
                { label: 'Home', href: '/' },
                { label: 'Resume', href: '/resume' }
            ]
        }
    }
}
