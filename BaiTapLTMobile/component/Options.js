import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Options = () => {
    //button
    const [selectedButton, setSelectedButton] = useState(null);

    const handlePress = (button) => {
        setSelectedButton(button);
    };

    const buttonStyle = (button) => {
        return {
            backgroundColor: button == selectedButton ? '#1AB65C' : '#fff',
        };
    };

    const textStyle = (button) => {
        return {
            color: button == selectedButton ? '#fff' : '#1AB65C',
        };
    };
    //icon
    const [selectedIcon, setSelectedIcon] = useState(null);

    const PressIcon = (icon) => {
        setSelectedIcon(icon);
    };

    const iconstyle = (icon) => {
        return {
            color: icon == selectedIcon ? '#1AB65C' : 'black',
        };
    };
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.button, { marginLeft: 21 }, buttonStyle('nut1')]} onPress={() => handlePress('nut1')}>
                    <Text style={[styles.text, textStyle('nut1')]}>All Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, buttonStyle('nut2')]} onPress={() => handlePress('nut2')}>
                    <Text style={[styles.text, textStyle('nut2')]}>Recommended</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, buttonStyle('nut3')]} onPress={() => handlePress('nut3')}>
                    <Text style={[styles.text, textStyle('nut3')]}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { marginRight: 21 }, buttonStyle('nut4')]} onPress={() => handlePress('nut4')}>
                    <Text style={[styles.text, textStyle('nut4')]}>Trending</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.Label}>
                <Text style={styles.content}>Recommended (484,579)</Text>
                <View style={styles.view}>
                    <View style={styles.menu}  >
                        <MaterialCommunityIcons style={iconstyle('menu')} onPress={() => PressIcon('menu')} name="format-list-bulleted-square" size={25} color="black" />
                    </View>
                    <View style={styles.grid}>
                        <MaterialCommunityIcons style={iconstyle('grid')} onPress={() => PressIcon('grid')} name="view-grid-outline" size={25} color="black" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Options

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    button: {
        backgroundColor: '#fff',
        marginHorizontal: 3.5,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1AB65C"
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: "#1AB65C",
        paddingHorizontal: 11,
        paddingVertical: 5,
    },
    ScrollView: {
        flexDirection: 'row',
    },
    Label: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 21,
        justifyContent: "space-between",
    },
    view: {
        flexDirection: 'row',
    },
    menu: {
        marginRight: 12,
    },
    content: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        textAlign: 'left',
    }
})

