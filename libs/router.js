class Router {

    constructor() {
        this.pathname = ''
        this.search = ''

        if (process.browser) {
            this.pathname = window.location.pathname
            this.search = window.location.search
        }

        console.log(this.query)
    }

    get query() {
        return this.search
            .replace('?', '')
            .split('&')
            .filter(param => !!param)
            .map(param => param.split('='))
            .reduce((obj, keyValue) => {
                const [key, value] = keyValue
                obj[key] = value
                return obj
            }, {})
    }

}



export default new Router()
