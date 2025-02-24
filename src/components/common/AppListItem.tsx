import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material'

type Props = {
    primary: React.ReactNode
    secondary: React.ReactNode
    icon?: any
    handleClick?: () => void
}
const AppListItem = (props: Props) => {
    return (
        <ListItem onClick={props.handleClick} sx={{ cursor: 'pointer' }}>
            {/* In case want to add icon to each nativate in `Menu` component
             <ListItemAvatar> 
                <Avatar>
                    {props.icon}
                </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary={props.primary} secondary={props.secondary} />
        </ListItem>
    )
}

export default AppListItem