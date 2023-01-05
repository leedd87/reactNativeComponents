import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 1500)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="green"
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: 'green' }}
                    tintColor='white'
                />
            }
        >

            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull To Refresh' />
                {
                    data && <HeaderTitle title={data} />
                }


            </View>
        </ScrollView>
    )
}
