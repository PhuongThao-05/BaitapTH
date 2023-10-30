import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StackNavigation from './component/StackNavigator.js';

export default function App() {
  return (   
    <SafeAreaView style={{flex:1}}>   
       <StackNavigation/>
       <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
