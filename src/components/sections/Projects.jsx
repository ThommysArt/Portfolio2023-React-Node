import { Flex, Section, Heading, Text, Separator } from "@radix-ui/themes";
import { ProjectPane } from "../custom/ProjectPane";
import { MySeparator } from "../custom/MySeparator";
import { Link as ScrollLink, Element } from 'react-scroll';


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

    const TwitterClone_skills = [
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

    const ThommyStore_images = [
        "imgs/thommystore0.gif",
        "imgs/thommystore1.png",
        "imgs/thommystore2.png",
        "imgs/thommystore3.png",
        "imgs/thommystore5.png",
        "imgs/thommystore6.png",
    ]

    const TwitterClone_images = [
        "imgs/twitterclone0.gif",
        "imgs/twitterclone1.png",
        "imgs/twitterclone2.png",
        "imgs/twitterclone3.png",
        "imgs/twitterclone4.png",
        "imgs/twitterclone5.png",
    ]

    const AcademicConnect_images = [
        "imgs/academicconnect1.png",
        "imgs/academicconnect2.png",
        "imgs/academicconnect3.png",
        "imgs/academicconnect4.png",
        "imgs/academicconnect5.png",
    ]

    const ThommyStore_Description = "Welcome to our cutting-edge Tech Store, your ultimate destination for top-notch tech products, including computers, smartphones, gaming monitors, and more. Our webstore is meticulously crafted using a powerful combination of Django's Rest API and a sleek React app, guaranteeing a seamless user experience.\n\n At the heart of our platform is an efficient SQLite database, ensuring lightning-fast performance and easy data management. To bring our dynamic web application to life, we rely on Node.js, a robust server-side JavaScript runtime that powers our React frontend, delivering unmatched speed and responsiveness.\n\n To create a visually stunning and intuitive interface, we harness the power of the Radix UI library, renowned for its comprehensive collection of beautifully designed components. With Radix UI, we've crafted a user-friendly experience that effortlessly showcases the latest tech products and makes browsing, selecting, and purchasing a breeze.\n\n We understand the unique challenges faced by the tech community in Cameroon, where finding reliable vendors, fair prices, and quality products can be a daunting task. Our Tech Store aims to be the game-changer, bridging the gap and providing a trustworthy platform that ensures exceptional products, competitive prices, and certified vendors.\n\n With our webstore, we are revolutionizing the way tech products are accessed and purchased in Cameroon. Discover a world of innovation, browse through our extensive catalog, and experience the convenience of secure online shopping.\n\n Join us on this exciting journey as we strive to empower the tech-savvy community of Cameroon, making high-quality tech products easily accessible to all. Together, let's usher in a new era of convenience, reliability, and excellence in the tech marketplace."

    const TwitterClone_Description = "Welcome to our captivating Twitter Clone website! Step into a world of social networking with a clear and sleek interface, designed to emulate the beloved desktop version of Twitter. Experience the most essential features at your fingertips, including browsing and posting tweets, managing user accounts, and engaging in seamless messaging with fellow users.\n\n Our talented team has meticulously crafted this project using an impressive tech stack. Django, a powerful Python-based framework, forms the backbone of our web application, ensuring robustness and efficiency. We have leveraged the latest web technologies such as HTML5, CSS3, and JavaScript, combined with the sleekness of Bootstrap CSS, to create a visually stunning and responsive user interface.\n\n Our primary goal was to embark on a challenging project that would not only deepen our understanding of Django but also elevate our design skills to meet industry standards. As our flagship full stack project, we are thrilled to present the exceptional results that exceeded our expectations.\n\n Immerse yourself in the world of social media as you navigate through our Twitter Clone. Engage with tweets, express your thoughts, and connect with other users effortlessly. Whether you're a seasoned Twitter user or new to the platform, our clone provides a seamless and intuitive experience.\n\n We are dedicated to continuous improvement and welcome your feedback as we strive to enhance our website further. Join us on this exciting journey as we bring the magic of Twitter to life in our own unique way.\n\n Experience the thrill of social networking with our Twitter Clone, and discover a whole new level of interactivity, engagement, and user satisfaction. Get ready to embark on an unforgettable journey through the digital realm of tweets and connections."

    const AcademicConnect_Description = "Welcome to our sophisticated Student Management System website, designed exclusively for seamless management of students within a university institution. Experience an intuitive and visually appealing interface that empowers administrators, lecturers, and students alike.\n\n Our website harnesses the power of Flask, a dynamic Python web framework, to deliver exceptional performance and flexibility. Combined with the latest web technologies including HTML5, CSS3, and JavaScript, and enhanced by the sleekness of Bootstrap CSS, we have created a visually stunning and highly functional platform.\n\n Key features of our Student Management System include:\n\n - Secure Login Accounts: Students, lecturers, and administrators can access personalized accounts, ensuring a secure and personalized experience.\n\n - Lecturer and Admin Panels: Dedicated panels for lecturers and administrators allow efficient management of courses, announcements, assignments, and notes.\n\n - Course Management: Lecturers and administrators can effortlessly manage courses, including creating, editing, and organizing course materials.\n\n - Announcements and Notifications: Keep students informed with important announcements and notifications, ensuring effective communication throughout the institution.\n\n - Assignment Management: Lecturers can easily create and manage assignments, enabling seamless submission and grading.\n\n - Notes Repository: A centralized repository for course notes, allowing students to access and download educational materials.\n\n Our focus on user experience and functionality ensures that students, lecturers, and administrators can navigate and utilize the system with ease. We are committed to continuous improvement and welcome feedback to enhance the platform further.\n\n Join us on this transformative journey as we revolutionize student management within university institutions. Experience the power of our Student Management System and unlock a new level of efficiency, organization, and collaboration. Together, let's pave the way for an enhanced educational experience."

    return (
        <Element name='projects'>
            <Section>
                <Flex gap="8" direction='column'>
                    <Flex gap='5' direction='column' style={{padding:'5% 0%'}}>
                        <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>PROJECTS</Heading>
                        <MySeparator />
                        <Text align='center' size='7' style={{padding: '0% 15%', fontSize: '150%'}}>
                            Here you will find creative and professional projects made to hone my skills to an expert level and solve community problems.
                        </Text>
                    </Flex>
                    <ProjectPane 
                        cover_image="imgs/thommystore1.png"
                        title="Thommy Store"
                        short_description="This is an online web store specializing in the sale of cutting-edge tech products such as computers, smartphones, and gaming monitors."
                        skills={ThommyStore_skills}
                        images={ThommyStore_images}
                        description={ThommyStore_Description}
                        />
                    <Separator size='4' />
                    <ProjectPane 
                        cover_image="imgs/twitterclone1.png"
                        title="Twitter Clone"
                        short_description="This is a clear and simple clone of the Twitter desktop website with the most important features; viewing and posting tweets, viewing and editing accounts, messaging different users."
                        skills={TwitterClone_skills}
                        images={TwitterClone_images}
                        description={TwitterClone_Description}
                        />
                    <Separator size='4' />
                    <ProjectPane 
                        cover_image="imgs/academicconnect1.png"
                        title="Academic Connect"
                        short_description="AcademicConnect is a Flask-based student management system website that simplifies administrative tasks, enhances collaboration, and promotes effective student engagement. From enrollment to grade management, it streamlines processes, improves communication, and empowers educational institutions for a seamless academic experience."
                        skills={AcademicConnect_skills}
                        images={AcademicConnect_images}
                        description={AcademicConnect_Description}
                        />
                    <Separator size='4' />
                </Flex>
            </Section>
        </Element>
    )
}