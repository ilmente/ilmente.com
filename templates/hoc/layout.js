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
                <link href="https://fonts.googleapis.com/css?family=Inconsolata|Pacifico" rel="stylesheet" />
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
