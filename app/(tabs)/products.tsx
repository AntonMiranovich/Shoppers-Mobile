import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import storage from '../../storage'
import { iProducts } from '@/interfaces';
import Product from '@/assets/images/Product';
import Header from '@/components/header';
import ImgBack from '@/assets/images/ImgBack';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from "react";



function Products() {
    const router = useRouter()

    const animation = useState(new Animated.Value(0))[0]

    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
            return () => {
                animation.setValue(0);
            };
        }, [animation]));

    const pressGoBack = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            router.back()
        });
    };


    return <Animated.View style={{ opacity: animation, gap: 62, flex: 1 }}>
        <Header />
        <View style={{ flexDirection: 'row', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {storage.map((el: iProducts) => <View key={el.id} style={styles.item}>
                <Product />
                <Text>{el?.title}</Text>
                <Text>{el?.price}</Text>
            </View>
            )}
        </View>
        <TouchableOpacity style={{ marginLeft: '10%' }} onPress={pressGoBack}><ImgBack /></TouchableOpacity>
    </Animated.View>;
}

const styles = StyleSheet.create({
    item: {
        width: '35%',
        padding: 15,
        height: 169,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
})

export default Products;