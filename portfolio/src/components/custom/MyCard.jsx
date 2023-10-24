import { Card, Flex, Box, Avatar, Text } from "@radix-ui/themes"

export const MyCard = ({name, title, image}) => {
    return (
        <Card style={{ maxWidth: '30%' }}>
            <Flex gap="3" align="center">
                <Avatar
                size="3"
                src={image}
                radius="full"
                fallback="T"
                />
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        {title}
                    </Text>
                </Box>
            </Flex>
        </Card>
    )
}