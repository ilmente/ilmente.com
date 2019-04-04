const location = {
    getPathname: () => {
        if (!process.browser) {
            return ''
        }

        return window.location.pathname
    },

    getQuery: () => {
        if (!process.browser) {
            return ''
        }

        return window.location.search
            .replace('?', '')
            .split('&')
            .filter(param => !!param)
            .map(param => param.split('='))
            .reduce((obj, keyValue) => {
                const [key, value] = keyValue
                obj[key] = !!value ? decodeURIComponent(value) : true
                return obj
            }, {})
    }
}

export default (Component) => (props) => {
    const locationProps = {
        ...props,
        location
    }

    return (
        <>
            <Component {...locationProps} />
        </>
    )
}
