import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './src/navigator/Navigator';

const customTheme: Theme = {

	dark: true,
	colors: {
		...DarkTheme.colors,
		//primary: 'string'
	}

}

const App = () => {
	return (
		<NavigationContainer
			theme={customTheme}
		>
			<Navigator />
		</NavigationContainer>
	)
}

export default App