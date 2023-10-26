import { Box, Flex, Link, Section, Separator } from "@radix-ui/themes";
import { MyCard } from "../custom/MyCard";
import { Link as ScrollLink, Element } from 'react-scroll';


export default function NavBar () {
    return (
        <Box>
            <Flex gap='9' style={{padding: '1% 2%'}}>
                <MyCard name="KEABOU NGUEMATIO THOMSON" title="Full Stack Developer" image="/imgs/professionalpic.png" />
                <div style={{width: '40%'}}></div>
                <Flex gap='4' align='center'>
                    <ScrollLink to="intro" smooth={true} duration={500}><Link href="" style={{top: '50%'}}>HOME</Link></ScrollLink>
                    <ScrollLink to="about-me" smooth={true} duration={500}><Link href="" >ABOUT</Link></ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500}><Link href="" >PROJECTS</Link></ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}><Link href="" >CONTACT</Link></ScrollLink>
                </Flex>
            </Flex>
            <Separator size='4' />
        </Box>
    )
}