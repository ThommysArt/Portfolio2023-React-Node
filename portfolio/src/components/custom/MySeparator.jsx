import { Flex } from "@radix-ui/themes"

export const MySeparator = () => {
    return (
        <Flex style={{width: '100%', height:'10px', justifyContent: 'center'}}>
            <div style={{width: '6%', height: '100%', backgroundColor: "#3E63DD", borderRadius: "10px", justifySelf:'center'}} ></div>
        </Flex>
    )
}