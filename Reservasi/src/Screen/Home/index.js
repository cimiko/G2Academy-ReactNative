import React, { useContext } from 'react'
import {
    Text,
    SafeAreaView,
    ScrollView,
    Pressable,
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet
} from 'react-native'
import { Card, Tile } from 'react-native-elements'
import { TABLE } from '~/Store/constant'
import { Context } from '~/App'
// import { pochaBenhil } from '~/Asset/img'

function Home({ navigation }) {
    const { table, setItemId } = useContext(Context)

    const chooseTable = (x) => {
        navigation.navigate(TABLE);
        setItemId(x)
    }

    const renderItem = ({ item }) => (
        <Pressable style={styles.card} onPress={() => chooseTable(item.id - 1)} disabled={item.status}>
            <Card containerStyle={styles.cardItems, item.status ? styles.cardDisable : styles.cardItems}>
                <Card.Image
                    source={item.image}
                    containerStyle={{ width: 150, height: 100 }}
                />
                <View style={{ marginVertical: 10 }}>
                    <Card.Title numberOfLines={2}>{item.name}</Card.Title>
                    <Card.Title numberOfLines={2}>Quantity: {item.person} Person</Card.Title>
                    <Card.Divider />
                    <Text style={item.status ? styles.statusReserve : styles.statusAvailable}>{`${item.status ? 'Reserved' : 'Available'}`}</Text>
                </View>
            </Card>
        </Pressable>
    );
    return (
        <SafeAreaView>
            <ScrollView> 
                <FlatList
                    data={table}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    ListEmptyComponent={<ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 780,
        backgroundColor: 'white'
    },
    search: {
        height: 50,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    searchWrap: {
        flex: 1 / 10,
    },
    body: {
        flex: 9,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around'
    },
    statusAvailable: {
        fontSize: 20,
        fontWeight: '700',
        color: 'green'
    },
    statusReserve: {
        fontSize: 20,
        fontWeight: '700',
        color: 'red'
    },
    star: {
        marginTop: -15,
    },
    card: {
        flex: 1 / 2,
        height: 300,
        flexDirection: 'row'
    },
    cardDisable: {
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        opacity: 0.5
    },
    cardItems: {
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 800
    },
    nav: {
        flexDirection: 'row',
        flex: 1 / 20,
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: 10,
        backgroundColor: '#fff'
    }
})

export default Home
