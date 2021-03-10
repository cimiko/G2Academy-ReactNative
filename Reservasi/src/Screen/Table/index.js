import React, { useContext, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    Picker
} from 'react-native'
import { Tile, Button } from 'react-native-elements'
import { pochaBenhil } from '~/Asset/img'
import { HOME, BOOKING_TABLE, ADD_CART } from '~/Store/constant'
import { useContextProvider } from '~/Store/context'

function Table({navigation}) {
    const { table, itemId, setTable, setCart } = useContextProvider()
    const [selectedValue, setSelectedValue] = useState(1);

    addCart = async() => {
        setTable({
            type: BOOKING_TABLE,
            payload: itemId
        })

        setCart({
            type: ADD_CART,
            payload: await{
                id: table[itemId].id,
                name: table[itemId].name,
                person: parseInt(selectedValue),
                harga: 99000 * parseInt(selectedValue),
                image: table[itemId].image,
                index: itemId
            }
        })
        navigation.navigate(HOME);
    }

    return (

        <SafeAreaView>
            <View style={Styles.container}>
                <ScrollView style={Styles.body}>
                    <View>
                        <View style={Styles.session}>
                            <Image
                                source={pochaBenhil}
                                style={Styles.image}
                            />
                            <Text style={Styles.price}>{table[itemId].name}</Text>
                            <View style={Styles.select}>
                                <Text style={Styles.title}>Jumlah:</Text>

                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 50, width: 150, marginTop: -95 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="1 Person" value="1" />
                                    <Picker.Item label="2 Person" value="2" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={Styles.session, Styles.nav}>
                    <Button
                        title="Add To Cart"
                        type="solid"
                        onPress={() => addCart()}
                        buttonStyle={Styles.btn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 780,
        backgroundColor: 'white'
    },
    select: {
        flexDirection: 'row',
    },
    body: {
        flex: 9
    },
    back: {
        fontSize: 40,
        marginLeft: 20
    },
    image: {
        width: '100%',
        height: 350
    },
    session: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 20
    },
    price: {
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 20
    },
    title: {
        fontSize: 20
    },
    star: {
        marginTop: -17,
    },
    rating: {
        flexDirection: 'row'
    },
    desc: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10
    },
    nav: {
        flex: 1 / 5,
        margin: 10,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: 'green',
        paddingBottom: 10
    }
})

export default Table
