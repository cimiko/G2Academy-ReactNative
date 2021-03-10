import React, { useContext, useEffect, useState } from 'react'
import {
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native'
import { Pocha } from '~/Asset/img'
import { Divider, Button } from 'react-native-elements'
import { CART, PAY_TABLE, DELETE_CART } from '~/Store/constant'
import { useContextProvider } from '~/Store/context'

function Checkout({ navigation }) {

    const { cart, cartId, setTable, setCart } = useContextProvider()
    const [date, setDate] = useState()

    useEffect(() => {
        const time = new Date()
        const dateNow = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
        const timeNow = `${time.getHours()}:${time.getMinutes()}`

        setDate(`${dateNow}, ${timeNow}`)
    }, [])

    addCheckout = async(x) => {
        
        setCart(await{
            type: DELETE_CART,
            payload: cart[cartId].id
        })
        
        setTable(await{
            type: PAY_TABLE,
            payload: x
        })
        navigation.navigate(CART);
    }
    
    const check = cart.length ?  cart[cartId] : ''

    return (
        <SafeAreaView style={styles.wrap}>
            <ScrollView>
                <Image
                    source={Pocha}
                    style={styles.image}
                />
                <View style={styles.judul}>
                    <Text style={styles.titleJudul}>{check.name}</Text>
                </View>
                <View style={styles.date}>
                    <Text>{date}</Text>
                </View>
                <Text>
                    <Divider style={{ backgroundColor: 'black', width: 450 }} />
                </Text>

                <View style={styles.struk}>
                    <View style={styles.menu}>
                        <Text style={{ marginRight: 20 }}>{check.person}</Text>
                        <Text>Paket Reguler</Text>
                    </View>
                    <Text>Rp.{check.harga}</Text>
                </View>

                <Text>
                    <Divider style={{ backgroundColor: 'black', width: 450 }} />
                </Text>

                <View>
                    <View style={styles.total}>
                        <Text>SUBTOTAL</Text>
                        <Text>Rp.{check.harga}</Text>
                    </View>
                    <View style={styles.total}>
                        <Text>PB 10%</Text>
                        <Text>Rp.{check.harga * (10 / 100)}</Text>
                    </View>
                    <Text style={{ marginTop: 20 }}>
                        <Divider style={{ backgroundColor: 'black', width: 450 }} />
                    </Text>
                    <View style={styles.total}>
                        <Text style={styles.titleTotal}>TOTAL</Text>
                        <Text style={styles.hargaTotal}>Rp.{check.harga + (check.harga * (10 / 100))}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.session, styles.nav}>
                <Button
                    title="Pay Now"
                    type="solid"
                    onPress={() => addCheckout(cart[cartId].index)}
                    buttonStyle={styles.btn}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    judul: {
        alignItems: 'center'
    },
    titleJudul: {
        fontSize: 20,
        fontWeight: '700'
    },
    date: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginBottom: 20
    },
    struk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
        height: 200
    },
    menu: {
        flexDirection: 'row'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
    },
    titleTotal: {
        fontSize: 25,
        fontWeight: '700'
    },
    hargaTotal: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 20
    },
    nav: {
        margin: 10,
        backgroundColor: '#fff'
    },
    session: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 20
    },
    btn: {
        backgroundColor: 'green',
        paddingBottom: 10
    }

})

export default Checkout
