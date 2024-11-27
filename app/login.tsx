import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login() {
    const [user, setUser] = useState({ email: '', password: '' })

    const router = useRouter()

    const changesUser = (value: any, tag: any) => {
        setUser({ ...user, [tag]: value });
    };

    const auth = () => {
        try {
            if (!user.email || !user.password) throw new Error('одно из полей не заполнено')
            if (user.password.length < 8) throw new Error('пороль менее 8 символов')

            router.push('/products')
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                    <Text style={styles.titleBig}>Welcome Back !</Text>
                    <Text style={styles.titleSmall}>Login with Username & password</Text>
                </View>

                <View style={styles.wrapperInp}>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Username</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, 'email')} ></TextInput>
                    </View>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Password</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, 'password')} secureTextEntry={true} ></TextInput>
                    </View>
                    <TouchableOpacity onPress={auth} style={styles.btn}><Text style={styles.titleSing}>SIGN IN</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account? </Text>
                    <Link href={'/singup'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline', }]}>Sign Up</Text></Link>
                </View>
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 400,
        color: '#000000'
    },
    titleSmall: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
        color: '#606060'
    },
    wrapperInp: {
        width: '90%',
        alignContent: 'center',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 3,
        gap: 24,
        paddingVertical: 36,
        paddingHorizontal: 36
    },
    titleBtn: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    inp: {
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    btn: {
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 16,
        alignItems: 'center',
    },
    titleSing: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#D04444'
    },
    textFooter: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
    }
})
