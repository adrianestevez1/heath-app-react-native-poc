import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <RingProgress progress={0.25}/>
      <View style={{ flexDirection: 'row' }}>
        <Value label="Steps" value="11,291" />
        <Value label="Distance" value="0,75 km" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Value label="Flight Climbed" value="1,123" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
