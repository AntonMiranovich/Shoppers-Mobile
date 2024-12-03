import ImgBack from "@/assets/images/ImgBack";
import Share from "@/assets/images/share";
import Product from "@/assets/images/Product";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import storage from '../../storage/index'
import basket from '../../storage/basket'

export default function Detail() {
    const params: any = useLocalSearchParams()
    const router = useRouter()
    const [product, setProduct] = useState<any>([])


    useEffect(() => {
        const filterStorage = storage.filter((el) => el.id == params.id)
        setProduct(filterStorage)
    }, [])

    const addBascet = () => {
        basket.push(product[0])
        router.replace('/basket')
    }

    return (
        <>
            <View style={{ gap: 30 }}>
                <View >
                    <Product width={'100%'} height={390} />
                    <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: "85%", marginTop: 52, marginLeft: 30 }}>
                        <TouchableOpacity onPress={() => router.replace('/products')}><ImgBack /></TouchableOpacity>
                        <Share />
                    </View>
                </View>

                <View style={{ gap: 14, marginBottom: 38, width: '80%', alignSelf: 'center' }}>
                    <Text style={styles.text}>{product[0]?.title}</Text>
                    <Text style={styles.text}>Rs.{product[0]?.price}</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={addBascet}> <Text style={styles.titleSing}>Add to Cart</Text> </TouchableOpacity>

                <View>
                    <Text style={{ ...styles.titleSing, color: '#000000' }}>More Details</Text>
                    <Text style={styles.textInfo}>Gear up with the latest collections from
                        adidas Originals, Running, Football, Training.
                        With over 20,000+ products, you will never
                        run out of choice. Grab your favorites now.
                        Secure Payments. 100% Original Products.
                        Gear up with adidas.</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 600
    },
    btn: {
        marginTop: 40,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 16,
        alignItems: 'center',
        width: '70%'
    },
    titleSing: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#4D1717'
    },
    textInfo: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
        color: '#AAA8A8'
    }
})
