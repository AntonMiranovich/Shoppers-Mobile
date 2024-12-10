import ImgBoots from "@/assets/images/imgBoots"
import ImgWatch from "@/assets/images/imgWatch"
import Product from "@/assets/images/Product"
import { iProducts } from "@/interfaces"


const obj: iProducts[] = [
    {
        id: 1,
        title: 'Adidas Shoe',
        price: 20000,
        img: <Product width={'100%'} height={112} />
    },
    {
        id: 2,
        title: 'Smart Watch',
        price: 5000,
        img: <ImgWatch width={'100%'} height={112} />
    },
    {
        id: 3,
        title: 'Adidas Shoe',
        price: 20000,
        img: <ImgBoots width={'100%'} height={112} />
    },
    {
        id: 4,
        title: 'Adidas Shoe',
        price: 20000,
        img: <Product width={'100%'} height={112} />
    },
    {
        id: 5,
        title: 'Adidas Shoe',
        price: 20000,
        img: <Product width={'100%'} height={112} />
    },
    {
        id: 6,
        title: 'Adidas Shoe',
        price: 20000,
        img: <ImgBoots width={'100%'} height={112} />
    },
]

export default obj