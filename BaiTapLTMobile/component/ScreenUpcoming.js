import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ScreenUpcoming = () => {
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel2.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel3.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel4.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
    ]
    return (
        <View style={styles.containner}>
            <FlatList data={hotel}
                renderItem={({ item }) =>
                    <View style={styles.flatlistContainer}>
                        <View style={styles.infohotel}>
                            <Image source={item.imageurl} style={[styles.image, { height: 91, width: 91 }]} />
                            <View style={styles.detailhotel}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.local}>{item.local}</Text>
                                <Text style={styles.status}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.infostatus}>
                            <View style={styles.line}></View>
                            <View style={styles.btndecision}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={[styles.btnname,{color:'#1AB65C'}]}>Cancel Booking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button,{backgroundColor:'#1AB65C'}]}>
                                    <Text style={[styles.btnname,{color:'#fff'}]}>View Ticket</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    )
}

export default ScreenUpcoming

const styles = StyleSheet.create({
    containner: {
        marginTop: 10,
    },
    flatlistContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 21,
        paddingBottom: 14,
        paddingTop: 14,
        borderRadius: 10,
        flexDirection: 'column',
    },
    infohotel: {
        flexDirection: 'row',
        marginBottom:15,
    },
    
    image: {
        marginHorizontal: 10,
        borderRadius: 11,
    },
    detailhotel: {
        flexDirection: 'column',
        marginLeft:8,
    },
    title: {
        fontSize: 15,
        lineHeight: 23.8,
        fontWeight: '700',
        color: "#000",
        paddingTop: 10,
        paddingBottom:5,
    },
    local: {
        paddingBottom: 8,
        fontSize:13.5,
    },
    status:{
        fontSize:11,
        paddingVertical:3,
        width:67.5,
        backgroundColor:'#DBF8E6',
        borderRadius:6,
        textAlign:'center',
        color:'#1AB65C',
    },
    infostatus:{
        marginHorizontal:20,
    },
    line:{
        height:1,
        backgroundColor:'#00000040',
    },
    btndecision:{
        flexDirection:'row',
       justifyContent:'center',
       marginTop:18,
       marginBottom:8,
    },
    button:{
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1AB65C",
        width:125,
        marginHorizontal:8,
    },
    btnname:{
        textAlign:'center',
        paddingHorizontal: 11,
        paddingVertical: 6,
        fontSize: 14,
        fontWeight: '600',
    },
})