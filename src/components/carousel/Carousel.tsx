import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const img1 = require('../../assets/1.jpg')
const img2 = require('../../assets/2.jpg')

export const CarouselImg = () => {

    let items = [
        {
            name: "Random Name #1",
            img: img1
        },
        {
            name: "Random Name #2",
            img: img2
        }
    ]

    return (
        <Carousel
            swipe
            duration={5000}
            stopAutoPlayOnHover
            interval={6000}
            animation='slide'
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 8
                }
            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    return (
        <Paper sx={{ width: '100%', height: '100%' }}>
            <img src={props.item.img} />

        </Paper>
    )
}