import { Avatar, Box, Text, Flex, Badge, Separator } from "@radix-ui/themes"

export const TrainingBox = ({training, origin, type, date}) => {
    return (
        <Box style={{backgroundColor: '#D6E1FF', borderRadius: '7px', padding: '5%'}}>
            <Flex gap='3' direction='column'>
                <Text size='6' style={{fontWeight:'600'}}>{training}</Text>
                <Text size='3'>{origin}</Text>
                <Flex justify='end'>
                    <Badge color="indigo" radius="medium">{type}</Badge>
                    <Badge variant="surface" radius="medium">{date}</Badge>
                </Flex>
                <Separator size='4' color="indigo"/>
            </Flex>
        </Box>
    )
}