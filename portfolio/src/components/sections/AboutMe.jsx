import { Section, Flex, Box, Text, Button, Heading, Strong, Grid, Separator } from "@radix-ui/themes";
import { SkillBox } from "../custom/SkillBox";


export default function AboutMe () {
    return (
        <Section>
            <Flex gap='5' direction='column'>
                <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>ABOUT ME</Heading>
                <Text size='7' style={{padding: '0% 15%', fontSize: '150%'}}>
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </Text>
                <Flex>
                    <Flex gap='2' direction='column' style={{padding: '5%', width: '60%'}}>
                        <Heading align='center' style={{padding: '2%', fontSize: '250%', fontWeight: '600'}}>Get To know Me</Heading>
                        <Text size='7' style={{padding: '1%', fontSize: '150%'}}>
                            I am a passionate <Strong>full stack developer</Strong> dedicated to crafting exceptional software solutions that effectively address people's needs. With over three years of experience in programming, I have honed my skills in problem analysis and strategic development to deliver impactful solutions for the community.
                        </Text>
                        <Text size='7' style={{padding: '1%', fontSize: '150%'}}>
                            Beyond my professional endeavors, I find joy in basketball and immerse myself in the captivating world of music. These passions fuel my creativity and inspire me to think outside the box.
                        </Text>
                        <Text size='7' style={{padding: '1%', fontSize: '150%'}}>
                            I am thrilled at the prospect of collaborating with you, leveraging my expertise and enthusiasm to create innovative solutions that exceed expectations. Let's embark on this exciting journey together!
                        </Text>
                    </Flex>
                    <Flex gap='2' direction='column' style={{padding: '5%', width: '40%'}}>
                        <Heading align='center' style={{padding: '3%', fontSize: '250%', fontWeight: '600'}}>My Skills</Heading>
                        <Grid gap='3' columns='2'>
                            <SkillBox skill="HTML" icon="icons/icons8-html-50.png" fallback='Html' />
                            <SkillBox skill="CSS" icon="icons/icons8-css-50.png" fallback="css" />
                            <SkillBox skill="JavaScript" icon="icons/icons8-javascript-50.png" fallback="JS" />
                            <SkillBox skill="Python" icon="icons/icons8-python-50.png" fallback="Py" />
                            <SkillBox skill="C++ Basic" icon="icons/icons8-c-50.png" fallback="C++" />
                            <SkillBox skill="Django REST" icon="icons/icons8-django-50.png" fallback="Dj" />
                            <SkillBox skill="Flask" icon="icons/icons8-flask-50.png" fallback="Fl" />
                            <SkillBox skill="React JS" icon="icons/icons8-react-native-50.png" fallback="R" />
                            <SkillBox skill="Express Basic" icon="icons/icons8-express-js-50.png" fallback="Ex" />
                            <SkillBox skill="SASS" icon="icons/icons8-sass-50.png" fallback="SASS" />
                            <SkillBox skill="GIT" icon="icons/icons8-git-50.png" fallback="Git" />
                            <SkillBox skill="GitHub" icon="icons/icons8-github-50.png" fallback="GH" />
                            <SkillBox skill="Responsive Design" icon="icons/icons8-design-50.png" />
                            <SkillBox skill="SQL Basic" icon="icons/icons8-sql-50.png" fallback="SQL" />
                            <SkillBox skill="MongoDB Basic" icon="icons/icons8-mongo-db-50.png" />
                        </Grid>
                    </Flex>
                </Flex>
                <Box align='center'><Button radius="medium" size='4' style={{width: '20%', fontWeight:'350%'}}>CONTACT</Button></Box>
                <Separator size='4' />
            </Flex>
            
        </Section>
    )
}