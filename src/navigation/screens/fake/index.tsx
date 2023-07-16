import { View, Text, StyleSheet } from 'react-native';

const FakeScreen = () => {
  return (
      <View style={styles.container}>
        <Text>
          Fake Screen
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FakeScreen;
