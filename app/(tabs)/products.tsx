import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import storage from '../../storage'
import { iProducts } from '@/interfaces';
import Header from '@/components/header';
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




    return <Animated.View style={{ opacity: animation, gap: 62, flex: 1 }}>
        <Header />
        <View style={{ flexDirection: 'row', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {storage.map((el: iProducts) => <TouchableOpacity style={styles.item} key={el.id} onPress={() => router.replace(`/detail/${el.id}`)}>
                {el?.img}
                <Text style={{ textAlign: 'center' }}>{el?.title}</Text>
                <Text style={{ textAlign: 'center' }}>{el?.price}</Text>

            </TouchableOpacity>
            )}
        </View>
    </Animated.View>;
}

const styles = StyleSheet.create({
    item: {
        width: 134,
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