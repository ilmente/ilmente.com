import Router from 'next/router'

const handleRouteChange = url => {
    console.log('App is changing to: ', url)
}

Router.events.on('routeChangeStart', handleRouteChange)
