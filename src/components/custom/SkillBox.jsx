import { Avatar, Box, Text, Flex, Strong } from "@radix-ui/themes"

export const SkillBox = ({skill, icon, fallback}) => {
    return (
        <Box style={{backgroundColor: '#D6E1FF', borderRadius: '7px', padding: '5%'}}>
            <Flex gap='3'>
                <Avatar src={icon} fallback={fallback} />
                <Text><Strong>{skill}</Strong></Text>
            </Flex>
        </Box>
    )
}