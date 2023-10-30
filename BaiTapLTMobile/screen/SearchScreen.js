import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FieldSearch from '../component/FieldSearch'
import Options from '../component/Options'
import FlatlistItem from '../component/FlatlistItem'

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <ScrollView Vertical showsVerticalScrollIndicator={false} >
            <FieldSearch />
            <Options />
          </ScrollView>
        </View>
        <View style={styles.foot}>
          <FlatlistItem />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    height:200,
    backgroundColor: "#fff",
    // position:'relative',
  },
  foot: {
    flex:1,
    backgroundColor: "#E8F8EF"
  }
})