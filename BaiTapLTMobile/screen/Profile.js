import { StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.title}>
            <View style={styles.logo}>
              <Image source={require("../assets/logo.jpg")} style={[styles.logoimg, { height: 40, width: 70 }]} />
              <Text style={styles.header} > Profile</Text>
            </View>
            <View style={styles.more}>
              <Ionicons style={styles.more} name="ios-ellipsis-horizontal-circle" size={24} color="black" />
            </View>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <View style={styles.avatar}>
              <Image style={styles.profileimg} source={require("../assets/avatar1.jpg")} resizeMode='center' />
            </View>
            <View style={styles.edit}>
              <Image style={styles.profileedit} source={require("../assets/edit.png")} />
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 6 }}>Kezia Ajibastin</Text>
            <Text style={{ fontSize: 14, fontWeight: '600', }}>kezia_ajibastin@domain.com</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.section}>
            <Ionicons style={styles.icon} name="person-outline" size={22} color="black" />
            <Text style={styles.label}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Ionicons style={styles.icon} name="wallet-outline" size={22} color="black" />
            <Text style={styles.label}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Ionicons style={styles.icon} name="notifications-outline" size={22} color="black" />
            <Text style={styles.label}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Ionicons style={styles.icon} name="shield-checkmark-outline" size={22} color="black" />
            <Text style={styles.label}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Ionicons style={styles.icon} name="md-help-circle-outline" size={26} color="black" />
            <Text style={styles.label}>Help</Text>
          </TouchableOpacity>
          <View style={[styles.section,{justifyContent:'space-between',paddingVertical:0}]}>
              <View style={styles.theme}>
                <Feather style={[styles.icon, { marginLeft: 3 }]} name="eye" size={22} color="black" />
                <Text style={styles.label}>Dark Theme</Text>
              </View>
              <Switch style={styles.switch}
                trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
          </View>
          <TouchableOpacity style={[styles.section,{paddingTop:0}]}>
            <Ionicons style={[styles.icon, { marginLeft: 3 }]} name="log-out-outline" size={26} color="#F75555" />
            <Text style={[styles.label, { color: '#F75555' }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  head: {
  },
  title: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 21,
  },
  logo: {
    flexDirection: "row",
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 8,
    height: 54,
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
    color: 'black',
  },
  logoimg: {
    marginTop: 12,
    marginBottom: 10,
  },
  more: {
    marginTop: 10,
    marginBottom: 8,
  },
  avatar: {
    width: 113,
    height: 113,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  profileimg: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  edit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  menu: {
    marginTop: 25,
  },
  section: {
    flexDirection: 'row',
    marginHorizontal: 21,
    paddingVertical: 5,
  },
  icon: {
    paddingVertical: 8,
    paddingRight: 18,
  },
  label: {
    paddingTop: 9,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
  },
  theme: {
    flexDirection: 'row',
  },
})