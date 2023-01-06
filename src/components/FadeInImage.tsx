import React, { useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'


interface Props {
    uri: string
}

export const FadeInImage = ({ uri }: Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(false)

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn()
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading &&
                <ActivityIndicator
                    size={25}
                    color="green"
                    style={{ position: 'absolute' }}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    width: '100%',
                    height: 400,
                    opacity
                }}

            />
        </View>

    )
}
