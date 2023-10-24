import { Box, Flex, Link, Section, Separator } from "@radix-ui/themes";
import { MyCard } from "../custom/MyCard";


export default function NavBar () {
    return (
        <Box>
            <Flex gap='9' style={{padding: '1% 2%'}}>
                <MyCard name="KEABOU NGUEMATIO THOMSON" title="Full Stack Developer" image="/imgs/professionalpic.png" />
                <div style={{width: '40%'}}></div>
                <Flex gap='4' align='center'>
                    <Link href="" style={{top: '50%'}}>HOME</Link>
                    <Link href="" >ABOUT</Link>
                    <Link href="" >PROJECTS</Link>
                    <Link href="" >CONTACT</Link>
                </Flex>
            </Flex>
            <Separator size='4' />
        </Box>
    )
}