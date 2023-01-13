import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    }


    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: `${colors.notification}` }}
            thumbColor={
                (Platform.OS === 'android') ? `${colors.notification}` : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
