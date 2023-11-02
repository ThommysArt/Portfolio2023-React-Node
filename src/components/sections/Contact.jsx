import { Card, TextArea, Flex, TextField, Button, Text, Box, Heading, Separator, Section } from "@radix-ui/themes";
import { MySeparator } from "../custom/MySeparator";
import { Link as ScrollLink, Element } from 'react-scroll';
import { useState } from "react";
import axios from 'axios';


export default function Contact () {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNameInputChange = (event) => {
        setName(event.target.value)
    }

    const handleMessageInputChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSendEmail = () => {
        try {
          const baseUrl = 'https://ppeqgv.api.infobip.com/';
          const username = 'dummyemailfordevelopers@gmail.com';
          const password = 'dummyemail123';
    
          // Set up the API request
          const requestConfig = {
            auth: { username, password },
            headers: { 'Content-Type': 'application/json', 'Authorization': '943ea3619468865b57160b831a5f59a4-01fe2f3c-7605-4d71-a556-308906ef3d8a' },
          };
    
          const requestBody = {
            messages: [
              {
                from: 'dummyemailfordevelopers@gmail.com',
                to: 'thomsonnguems@gmail.com',
                subject: "Portfolio messages",
                text: `I'm ${name}. I contacted you from your portfolio website. Here is my email; ${email}. \n ${message}`,
              },
            ],
          };
    
          // Send the email
          const response = axios.post(`${baseUrl}/email/1/send`, requestBody, requestConfig);
          console.log('Email sent successfully!', response.data);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };


    return (
        <Element name='contact'>
            <Section style={{padding: '10% 15%', background: 'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/daac885…/c157c/assets/svg/common-bg.svg)'}}>
                <Flex gap='5' direction='column'>
                    <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>CONTACT</Heading>
                    <MySeparator />
                    <Text align='center' size='7' style={{padding: '3% 15%', fontSize: '150%'}}>
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
                                <Button radius="medium" size='4' style={{width: '20%', fontWeight:'350%'}} onClick={handleSendEmail}>Send</Button>
                            </Flex>
                    </Card>
                    <Separator size='4' />
                </Flex>
            </Section>
        </Element>
    )
}