import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function CreateInputForm({ inpForm, nameBtn, changesUser, auth }: any) {

    return <>
        <View style={styles.wrapperInp}>
            {inpForm.map((el: any) => (<View key={el.id} style={{ gap: 12 }}>
                <Text style={styles.titleBtn}>{el.title.charAt(0).toUpperCase() + el.title.slice(1)}</Text>
                <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, el.title)} secureTextEntry={el.secure} />
            </View>))}
            <TouchableOpacity onPress={auth} style={styles.btn}> <Text style={styles.titleSing}>{nameBtn}</Text> </TouchableOpacity>
        </View>
    </>;
}


const styles = StyleSheet.create({
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
})


export default CreateInputForm;