import BottomNavigation from './screens/BottomNavigation';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import MainView from './screens/ManView';
export default function App() {
  return (
  <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
     <MainView/>
     <BottomNavigation/>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F8F8FA',
  },
  safe : {
    flex: 1,
  }
});
