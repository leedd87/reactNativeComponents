import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation<any>()
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>

                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{ ...styles.itemText, color: colors.text }}>
                    {menuItem.name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color={colors.primary}
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
