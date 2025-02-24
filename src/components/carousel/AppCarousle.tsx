import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
const srcOfImg = require('../../assets/1.jpg')
const srcOfImg1 = require('../../assets/2.jpg')

export function AppCarousle() {

    let items = [
        {
            img: srcOfImg
        },
        {
            img: srcOfImg1
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    return (
        <Paper>
            <img src={props.item.img} />

        </Paper>
    )
}
