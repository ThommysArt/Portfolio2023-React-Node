import { Card, TextArea, Flex, TextField, Button, Text, Box, Heading, Separator, Section } from "@radix-ui/themes";


export default function Contact () {
    return (
        <Section style={{padding: '10% 15%'}}>
            <Flex gap='5' direction='column'>
                <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>CONTACT</Heading>
                <Text size='7' style={{padding: '3% 15%', fontSize: '150%'}}>
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </Text>
                
                <Card style={{padding:'2%'}}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Input
                                variant="soft"
                                radius="medium"
                                size='3'
                                placeholder="Enter your full name"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Input
                                variant="soft"
                                radius="medium"
                                size='3'
                                placeholder="Enter your email"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Message
                            </Text>
                            <TextArea
                                variant="soft"
                                size='3'
                                placeholder="Enter your message"
                            />
                        </label>
                        </Flex>
                        <Flex gap="3" mt="4" justify="end">
                            <Button radius="medium" size='4' style={{width: '20%', fontWeight:'350%'}}>Send</Button>
                        </Flex>
                </Card>
                <Separator size='4' />
            </Flex>
        </Section>
    )
}