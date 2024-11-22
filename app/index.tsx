import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImgPrew from '../assets/images/prewiu'
import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter()

    return (
        <>
            <TouchableOpacity onPress={() => router.replace('/login')} style={{ flex: 1, backgroundColor: 'yellow' }}>
                <View style={{ marginTop: '40%', alignItems: 'center', gap: 30 }}>
                    <Text style={styles.titlePrew}>WELCOME TO SHOPPERS</Text>
                    <ImgPrew></ImgPrew>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    titlePrew: {
        alignItems: 'center',
        textAlign: 'center',
        width: '50%',
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 600,
    }
})
