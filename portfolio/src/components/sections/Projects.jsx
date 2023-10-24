import { Flex, Section, Heading, Text, Separator } from "@radix-ui/themes";
import { ProjectPane } from "../custom/ProjectPane";


export default function Projects () {

    const ThommyStore_skills = [
        {"name": "Django REST", "icon": "icons/icons8-django-50.png"},
        {"name": "React JS", "icon": "icons/icons8-react-native-50.png"},
        {"name": "HTML", "icon": "icons/icons8-html-50.png"},
        {"name": "CSS", "icon": "icons/icons8-css-50.png"},
        {"name": "Python", "icon": "icons/icons8-python-50.png"},
        {"name": "JavaScript", "icon": "icons/icons8-javascript-50.png"},
        {"name": "SQLite", "icon": "icons/icons8-sql-50.png"}
    ]

    const TwiiterClone_skills = [
        {"name": "Python", "icon": "icons/icons8-python-50.png"},
        {"name": "Django", "icon": "icons/icons8-django-50.png"},
        {"name": "HTML", "icon": "icons/icons8-html-50.png"},
        {"name": "CSS", "icon": "icons/icons8-css-50.png"},
        {"name": "JavaScript", "icon": "icons/icons8-javascript-50.png"},
        {"name": "SQLite", "icon": "icons/icons8-sql-50.png"}
    ]

    const AcademicConnect_skills = [
        {"name": "Python", "icon": "icons/icons8-python-50.png"},
        {"name": "Flask", "icon": "icons/icons8-flask-50.png"},
        {"name": "HTML", "icon": "icons/icons8-html-50.png"},
        {"name": "CSS", "icon": "icons/icons8-css-50.png"},
        {"name": "JavaScript", "icon": "icons/icons8-javascript-50.png"},
        {"name": "SQLite", "icon": "icons/icons8-sql-50.png"}
    ]

    return (
        <Section>
            <Flex gap="8" direction='column'>
                <Flex gap='5' direction='column' style={{padding:'5% 0%'}}>
                    <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>PROJECTS</Heading>
                    <Text size='7' style={{padding: '0% 15%', fontSize: '150%'}}>
                        Here you will find creative and professional projects made to hone my skills to an expert level and solve community problems.
                    </Text>
                </Flex>
                <ProjectPane 
                    cover_image="imgs/thommystore1.png"
                    title="Thommy Store"
                    short_description="This is an online web store specializing in the sale of cutting-edge tech products such as computers, smartphones, and gaming monitors."
                    skills={ThommyStore_skills}
                    />
                <Separator size='4' />
                <ProjectPane 
                    cover_image="imgs/twitterclone1.png"
                    title="Twitter Clone"
                    short_description="This is a clear and simple clone of the Twitter desktop website with the most important features; viewing and posting tweets, viewing and editing accounts, messaging different users."
                    skills={TwiiterClone_skills}
                    />
                <Separator size='4' />
                <ProjectPane 
                    cover_image="imgs/academicconnect1.png"
                    title="Academic Connect"
                    short_description="AcademicConnect is a Flask-based student management system website that simplifies administrative tasks, enhances collaboration, and promotes effective student engagement. From enrollment to grade management, it streamlines processes, improves communication, and empowers educational institutions for a seamless academic experience."
                    skills={AcademicConnect_skills}
                    />
                <Separator size='4' />
            </Flex>
        </Section>
    )
}