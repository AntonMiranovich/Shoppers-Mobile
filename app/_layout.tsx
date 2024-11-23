import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="/" />
        <Stack.Screen name="/login" />
        <Stack.Screen name="/singup" />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
