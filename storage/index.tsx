import ImgBoots from "@/assets/images/imgBoots"
import ImgWatch from "@/assets/images/imgWatch"
import Product from "@/assets/images/Product"
import { iProducts } from "@/interfaces"


const obj: iProducts[] = [
    {
        id: 1,
        title: 'Adidas Shoe',
        price: 20000,
        Qty:1,
        img: <Product />
    },
    {
        id: 2,
        title: 'Smart Watch',
        price: 5000,
        Qty:1,
        img: <ImgWatch />
    },
    {
        id: 3,
        title: 'Adidas Shoe',
        price: 20000,
        Qty:1,
        img: <ImgBoots />
    },
    {
        id: 4,
        title: 'Adidas Shoe',
        price: 20000,
        Qty:1,
        img: <Product />
    },
    {
        id: 5,
        title: 'Adidas Shoe',
        price: 20000,
        Qty:1,
        img: <Product />
    },
    {
        id: 6,
        title: 'Adidas Shoe',
        price: 20000,
        Qty:1,
        img: <ImgBoots />
    },
]

export default obj