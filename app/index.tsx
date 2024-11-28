import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import ImgPrew from '../assets/images/prewiu'
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function index() {
    const router = useRouter()

    const animation = new Animated.Value(1);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                    Animated.timing(animation, {
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: true,
                    }).start(() => {
                    router.replace('/login');
                });
            }, 1000);
        });
    }, [animation, router]);



    return (
        <>
            <Animated.View style={{ opacity: animation, flex: 1}}>
                <TouchableOpacity onPress={() => router.replace('/login')} style={styles.container}>
                    <Text style={styles.titlePrew}>WELCOME TO SHOPPERS</Text>
                    <ImgPrew></ImgPrew>
                </TouchableOpacity>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '40%',
        alignItems: 'center',
        gap: 30,
        flex: 1,
        backgroundColor: 'yellow'
    },
    titlePrew: {
        alignItems: 'center',
        textAlign: 'center',
        width: '50%',
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: '600',
    },
})
