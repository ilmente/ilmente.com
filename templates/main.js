import layout from './hoc/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import ScreenStyle from '../styles/screen'

const Main = ({ title, children }) => (
    <>
        <Header>
            <h1>{title}</h1>
        </Header>
        <Menu menuId="main" />
        <main>{children}</main>
        <Footer>
            ilmente.com | <a href="https://github.com/ilmente/ilmente.com" target="_blank">Source code</a> | MIT licence
        </Footer>
        <ScreenStyle />
    </>
)

export default layout(Main)
