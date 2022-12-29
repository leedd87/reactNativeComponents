import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View style={styles.container}>

                <Icon
                    name={menuItem.icon}
                    size={23}
                    color='green'
                />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color='green'
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 5,
    }
})
