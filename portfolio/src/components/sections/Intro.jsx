import { Box, Flex, Heading, Text, IconButton, Section, Button, Separator } from "@radix-ui/themes";
import { DevLink } from "../custom/DevLinks";


export default function Intro () {
    return (
        <Section p='2'>
            <Flex>
                <Box p='4' style={{alignContent: 'center', height: '100%'}}>
                    <Flex 
                            direction='column'
                            height='50%' 
                            gap='3' 
                            align='center' 
                            style={{
                                borderRadius:'7px', 
                                backgroundColor: '#eee',
                                padding: '2%'
                                }}
                        >
                        <DevLink icon="icons/icons8-github-50.png" link="https://github.com/ThommysArt" />
                        <DevLink icon="icons/icons8-linkedin-50.png" link="www.linkedin.com/in/thommysart" />
                        <DevLink icon="icons/icons8-fiverr-50.png" link="https://www.fiverr.com/nekomaking?public_mode=true" />
                        <DevLink icon="icons/icons8-upwork-50.png" link="https://upwork.com/freelancers/~013b5077b228f99799" />
                        <DevLink icon="icons/icons8-stack-overflow-50.png" link="" />
                    </Flex>
                </Box>
                <Box p='9'>
                    <Flex gap='5' direction='column'>
                        <Heading align='center' style={{padding: '3%', fontSize: '300%', fontWeight: '800'}}>HI, I'M KEABOU NGUEMATIO THOMSON</Heading>
                        <Text 
                            size='7' 
                            style={{padding: '5%', fontSize: '150%'}}
                            >
                            A Full Stack Web Developer focused on building websites by analyzing problems and applying strategic developer solutions for the community
                        </Text>
                        <Box align='center'>
                            <Button 
                                radius="medium" 
                                size='4' 
                                style={{width: '20%', fontWeight:'350%'}}
                                >
                                PROJECTS
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Separator size='4' />
        </Section>
    )
}