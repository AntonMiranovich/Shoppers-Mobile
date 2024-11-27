import { StyleSheet, Text, View } from "react-native";

function Header() {
    return (<>
        <View style={styles.wrapper}><Text style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: 700, textAlign: 'center' }}>SHOPPERS</Text></View>
    </>);
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
})

export default Header