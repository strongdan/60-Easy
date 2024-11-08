// app/index.tsx
import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to 60 Easy Habit Tracker!</Text>
      <Button
        title="Go to Home"
        onPress={() => router.push('/(tabs)/home')}
      />
    </View>
  );
}
