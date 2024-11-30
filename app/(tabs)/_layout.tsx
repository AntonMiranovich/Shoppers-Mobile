import { Tabs } from 'expo-router';
import 'react-native-reanimated';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="products" options={{ title: '', tabBarIcon: ({ focused }) => <FontAwesome name='home' color={focused ? 'yellow' : 'black'} /> }} />
            <Tabs.Screen name="user" options={{ title: '', tabBarIcon: ({ focused }) => <FontAwesome name='user' color={focused ? 'yellow' : 'black'} /> }} />
            <Tabs.Screen name="basket" options={{ title: '', tabBarIcon: ({ focused }) => <FontAwesome name='shopping-basket' color={focused ? 'yellow' : 'black'} /> }} />
        </Tabs>
    );
}
