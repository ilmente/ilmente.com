import layout from './hoc/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import Panel from '../components/panel'
import Menu from '../components/menu'
import Drawer from '../components/drawer'
import IconSprite from '../components/icon-sprite'
import ScreenStyle from '../styles/screen'
import PrintStyle from '../styles/print'

const Main = ({ title, printTitle, children }) => (
    <>
        <Drawer>
            <Header>
                <h1 className="only-screen">{title}</h1>
                <h1 className="only-print">{printTitle || title}</h1>
            </Header>
            <div className="view-wide">
                <Section>
                    <Panel>
                        <Menu menuId="main" />
                    </Panel>
                </Section>
            </div>
            <main>{children}</main>
            <Footer>
                ilmente.com | <a href="https://github.com/ilmente/ilmente.com" target="_blank">Source code</a> | MIT licence
            </Footer>
        </Drawer>
        <ScreenStyle />
        <PrintStyle />
        <IconSprite />
    </>
)

export default layout(Main)
