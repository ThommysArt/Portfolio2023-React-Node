import { Theme } from '@radix-ui/themes'
import NavBar from './sections/NavBar'
import '@radix-ui/themes/styles.css';
import Intro from './sections/Intro';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App () {
    return (
        <Theme
            accentColor="indigo"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
            >
            <NavBar style={{position: 'relative', zIndex: '9', overflow:'hidden'}} />
            <Intro style={{left:'0'}} />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </Theme>
    )
}