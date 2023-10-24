import { IconButton, Link } from "@radix-ui/themes"


export const DevLink = ({icon, link}) => {
    return (
        <Link href={link} target="_blank">
            <IconButton variant="ghost" radius="medium" style={{padding: '10px'}} >
                <img src={icon}></img>
            </IconButton>
        </Link>
    )
}