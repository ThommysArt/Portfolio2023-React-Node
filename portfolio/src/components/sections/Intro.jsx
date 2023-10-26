import { Box, Flex, Heading, Text, IconButton, Section, Button, Separator } from "@radix-ui/themes";
import { DevLink } from "../custom/DevLinks";
import { Link as ScrollLink, Element } from 'react-scroll';


export default function Intro () {
    return (
        <Element name="intro">
            <Section p='2' style={{background: 'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/daac885…/c157c/assets/svg/common-bg.svg)'}}>
                <Flex>
                    <Box p='4' style={{alignContent: 'center', height: '100%', width:'10%'}}>
                        <Flex 
                                direction='column'
                                height='50%' 
                                gap='3' 
                                align='center' 
                                style={{
                                    borderRadius:'7px', 
                                    backgroundColor: '#fff',
                                    padding: '2%'
                                    }}
                            >
                            <DevLink icon="icons/icons8-github-50.png" link="https://github.com/ThommysArt" />
                            <DevLink icon="icons/icons8-linkedin-50.png" link="https://www.linkedin.com/in/thommysart" />
                            <DevLink icon="icons/icons8-fiverr-50.png" link="https://www.fiverr.com/nekomaking?public_mode=true" />
                            <DevLink icon="icons/icons8-upwork-50.png" link="https://upwork.com/freelancers/~013b5077b228f99799" />
                            <DevLink icon="icons/icons8-stack-overflow-50.png" link="" />
                        </Flex>
                    </Box>
                    <Box p='9'>
                        <Flex gap='5' direction='column'>
                            <Heading align='center' style={{padding: '3%', fontSize: '300%', fontWeight: '800'}}>HI, I'M KEABOU NGUEMATIO THOMSON</Heading>
                            <Text 
                                align='center'
                                size='7' 
                                style={{padding: '5%', fontSize: '150%'}}
                                >
                                A Full Stack Developer focused on building websites by analyzing problems and applying strategic developer solutions for the community.
                            </Text>
                            <Box align='center'>
                                <ScrollLink to="projects" smooth={true} duration={500}>
                                    <Button 
                                        radius="medium" 
                                        size='4' 
                                        style={{width: '20%', fontWeight:'350%'}}
                                        >
                                        PROJECTS
                                    </Button>
                                </ScrollLink>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Separator size='4' />
            </Section>
        </Element>
    )
}