import { AspectRatio, Box, Flex, Heading, Text, Button, Grid } from "@radix-ui/themes"
import { SkillBox } from "./SkillBox"


export const ProjectPane = ({cover_image, short_description, title, skills}) => {
    return (
        <Flex>
            <Box style={{width:'55%'}}>
                <AspectRatio ratio={16/10}>
                    <img
                        src={cover_image}
                        alt="Project"
                        style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--radius-2)',
                        }}
                    />
                </AspectRatio>
            </Box>
            <Box style={{width:'45%'}}>
                <Flex gap='5' direction='column' style={{padding: '5%'}}>
                    <Heading align='center' style={{padding: '2%', fontSize: '250%', fontWeight: '600'}}>{title}</Heading>
                    <Text size='7' style={{padding: '1%', fontSize: '150%'}}>
                        {short_description}
                    </Text>
                    <Grid columns="3" gap="4">
                        {skills.length === 0 ? (
                            <div></div>
                        ):(
                            skills.map((skill, index) => (
                                <SkillBox key={index} skill={skill.name} icon={skill.icon} />
                            ))
                        )}
                    </Grid>
                </Flex>
                <Box align='center'><Button radius="medium" size='4' style={{width: '30%', fontWeight:'350%'}}>More</Button></Box>
            </Box>
        </Flex>
    )
}