import Head from 'next/head'
import { withRouter } from 'next/router'
import AccentContext from '../../context/accent'
import RoutingContext from '../../context/routing'

export default (Template) => withRouter((props) => {
    const { title, color, router } = props;
    const prevColor = router.query.color || color

    const pageTitle = !!title
        ? `${title} | ${process.env.site.name}`
        : process.env.site.name

    const layoutProps = {
        ...props,
        title: title || process.env.site.name
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="robots" content="index, follow" />
                <meta name="title" content={pageTitle} />
                <meta name="description" content={process.env.site.description} />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata|Pacifico" />
                <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
                <link rel="manifest" href="static/favicons/site.webmanifest" />
                <title>{pageTitle}</title>
            </Head>
            <AccentContext.Provider value={{ color, prevColor }}>
                <RoutingContext.Provider value={{ path: router.pathname, query: router.query }}>
                    <Template {...layoutProps} />
                </RoutingContext.Provider>
            </AccentContext.Provider>
        </>
    )
})
