import { Flex, Theme, Heading, Text, Separator, Strong, Link, HoverCard, Box, Avatar } from "@radix-ui/themes";
import { DevLink } from "../custom/DevLinks";

export default function Footer () {
    return (
        <Theme
            accentColor="indigo"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
            appearance="dark"
            >
            <Flex gap='3' direction='column'>
                <Flex>
                    <Flex gap='3' direction='column' style={{width: '65%'}}>
                        <Heading align='center' style={{padding: '3%', fontSize: '180%', fontWeight: '600'}}>KEABOU NGUEMATIO THOMSON</Heading>
                        <Text size='7' style={{padding: '5%', fontSize: '120%'}}>A Full Stack Web Developer focused on building websites by analyzing problems and applying strategic developer solutions for the community</Text>
                    </Flex>
                    <Flex direction='column' style={{width: '35%'}}>
                        <Heading align='center' style={{padding: '3%', fontSize: '140%', fontWeight: '500'}}>SOCIALS</Heading>
                        <Flex 
                                gap='3' 
                                align='center' 
                                style={{
                                    borderRadius:'7px', 
                                    padding: '2%',
                                    backgroundColor: '#2a2a2a'
                                    }}
                            >
                            <DevLink icon="icons/icons8-github-50.png" link="https://github.com/ThommysArt" />
                            <DevLink icon="icons/icons8-linkedin-50.png" link="https://www.linkedin.com/in/thommysart" />
                            <DevLink icon="icons/icons8-fiverr-50.png" link="https://www.fiverr.com/nekomaking?public_mode=true" />
                            <DevLink icon="icons/icons8-upwork-50.png" link="https://upwork.com/freelancers/~013b5077b228f99799" />
                            <DevLink icon="icons/icons8-stack-overflow-50.png" link="" />
                        </Flex>
                    </Flex>
                    
                </Flex>
                <Separator size='4' />
                <HoverCard.Root>
                    <Text align='center' size='5' style={{padding: '5%', fontSize: '100%'}}>
                        Copyright 2023. Made by <Strong><HoverCard.Trigger><Link>Keabou Thomson</Link></HoverCard.Trigger></Strong>
                    </Text>
                    <HoverCard.Content>
                        <Flex gap="3" align="center">
                            <Avatar
                            size="3"
                            src='/imgs/professionalpic.png'
                            radius="full"
                            fallback="T"
                            />
                            <Box>
                                <Text as="div" size="2" weight="bold">
                                    KEABOU NGUEMATIO THOMSON
                                </Text>
                                <Text as="div" size="2" color="gray">
                                    Full Stack Developer
                                </Text>
                            </Box>
                        </Flex>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Flex>
        </Theme>
    )
}