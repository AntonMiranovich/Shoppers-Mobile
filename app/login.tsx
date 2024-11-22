import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login({ navigation }: any) {
    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <View style={{ alignContent: 'center' }}>
                    <Text>Welcome Back !</Text>
                    <Text>Login with Username & password</Text>
                </View>
                <View>
                    <View>
                        <Text>Username</Text>
                        <TextInput></TextInput>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput></TextInput>
                    </View>
                    <TouchableOpacity>SIGN IN</TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

})
