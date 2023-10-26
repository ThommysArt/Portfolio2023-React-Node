import { AspectRatio, Box, Flex, Heading, Text, Button, Grid, Dialog, Separator } from "@radix-ui/themes"
import { SkillBox } from "./SkillBox"
import { MySeparator } from "./MySeparator"


export const ProjectPane = ({cover_image, short_description, title, skills, images, description}) => {
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
                
                <Flex justify='center' gap='4'>
                    <Dialog.Root>
                        <Button radius="medium" size='4' style={{width: '30%', fontWeight:'350%'}}>Open</Button>
                        <Dialog.Trigger>
                            <Button radius="medium" size='4' style={{width: '30%', fontWeight:'350%'}}>More</Button>
                        </Dialog.Trigger>
                        <Dialog.Content style={{maxWidth:'80%', padding:'1% 10%'}}>
                            <Flex direction='column' gap='7'>
                                <Flex gap='5' direction='column' style={{padding:'5% 0%'}}>
                                    <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>{title}</Heading>
                                    <MySeparator />
                                    <Text align='center' size='7' style={{padding: '0% 15%', fontSize: '150%'}}>
                                        Project Description.
                                    </Text>
                                </Flex>
                                <Separator size='4'/>
                                <Flex direction='column' gap='3'>
                                    <Heading align='center' style={{padding: '2%', fontSize: '230%', fontWeight: '600'}}>Skills</Heading>
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
                                <Separator size='4'/>
                                <Flex direction='column' gap='3'>
                                    <Heading align='center' style={{padding: '2%', fontSize: '230%', fontWeight: '600'}}>Images</Heading>
                                    <Grid columns="3" gap="6">
                                        {images.length === 0 ? (
                                            <div></div>
                                        ):(
                                            images.map((image, index) => (
                                                <Box key={index}>
                                                    <AspectRatio ratio={16/10}>
                                                        <img
                                                            src={image}
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
                                            ))
                                        )}
                                    </Grid>
                                </Flex>
                                <Separator size='4'/>
                                <Flex direction='column' gap='3'>
                                    <Heading align='center' style={{padding: '2%', fontSize: '250%', fontWeight: '600'}}>Description</Heading>
                                    <Text size='7' style={{padding: '1%', fontSize: '150%'}}>
                                        {description}
                                    </Text>
                                </Flex>
                                <Separator size='4'/>
                                <Flex justify='center' gap='4'>
                                    <Button radius="medium" size='4' style={{width: '30%', fontWeight:'350%'}}>Open</Button>
                                </Flex>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                </Flex>
            </Box>
        </Flex>
    )
}