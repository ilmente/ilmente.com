import Head from 'next/head'
import { withRouter } from 'next/router'
import Global from './global'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Link from '../components/link'
import theme, { AccentContext } from '../theme'

export default withRouter(({ title, color, invert, router, children }) => {
    const currentPath = router.pathname
    const prevColor = router.query.color || color

    const pageTitle = !!title
        ? `${title} | ${process.env.site.name}`
        : process.env.site.name

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
                <Header title={title} />
                <Menu menuId="main" currentPath={currentPath} />
                <main>{children}</main>
                <Footer>
                    This site a <em>hand made</em> website
                    based on <Link href="https://nextjs.org/" target="_blank">next.js</Link> and <Link href="https://reactjs.org/" target="_blank">react</Link>
                    <br />
                    <Link href="https://github.com/ilmente/ilmente.com" target="_blank">Source code</Link> | MIT licence
                </Footer>
            </AccentContext.Provider>
            <Global />
            <style jsx global>{`
                ::selection {
                    background-color: ${color};
                    color: ${invert ? theme.layout.color : theme.layout.bgColor}
                }
            `}</style>
        </>
    )
})
