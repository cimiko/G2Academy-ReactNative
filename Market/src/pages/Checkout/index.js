import React, { useContext, useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Pressable
} from 'react-native'
import { Avatar, Badge, Button, ListItem } from 'react-native-elements'
import { Context } from '../../App'
import { cartImage, homeImage } from '../../ui-kit/File'
import { HOME, CHECKOUT, PLUS_PRODUCT, MIN_PRODUCT, DELETE_PRODUCT, ADD_HISTORY } from '../../store/constants'

function Checkout({ navigation }) {
    const { dataProduct, dispatch, setHistory, history } = useContext(Context)
    const [totalPrice, setTotalPrice] = useState(0)

    const data = dataProduct.length ? false : true

    useEffect(() => {
        const total = dataProduct.map(x => x.totalPrice * x.qty)

        const totalHarga = total.reduce((acc, curr) => acc + curr, 0)

        setTotalPrice(totalHarga)
    }, [dataProduct])

    addQty = (i) => {
        dispatch({
            type: PLUS_PRODUCT,
            payload: i
        })
    }

    minQty = (i) => {
        dispatch({
            type: MIN_PRODUCT,
            payload: i
        })
    }

    deleteData = (i) => {
        dispatch({
            type: DELETE_PRODUCT,
            payload: i
        })
    }

    addHistory = async() => {
        setHistory({
            type: ADD_HISTORY,
            payload: await dataProduct
        })

        dispatch({
            type: ADD_HISTORY
        })

        navigation.navigate(HOME)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <View>
                        {
                            dataProduct.map((x, i) => (
                                <ListItem key={i} bottomDivider>
                                    <Avatar source={{ uri: `${x.image}` }} size='large' />
                                    <ListItem.Content>
                                        <ListItem.Title>{x.title.length > 30 ? `${x.title.substring(0, 30)}...` : x.title}</ListItem.Title>
                                        <Text>{`$ ${x.price}`}</Text>
                                        <View>
                                            <View style={styles.row}>
                                                <Pressable onPress={() => deleteData(x.id)}>
                                                    <Text style={styles.trash}>&#x1F5D1; Delete</Text>
                                                </Pressable>
                                                <Pressable style={styles.counterWrap} onPress={() => minQty(i)}>
                                                    <Text style={styles.counterBtn}>&#x2212;</Text>
                                                </Pressable>
                                                <Text style={styles.counter}>{x.qty}</Text>
                                                <Pressable style={styles.counterWrap} onPress={() => addQty(i)}>
                                                    <Text style={styles.counterBtn}>&#x2b;</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={styles.navPrice}>
                    <View>
                        <Text>Total Harga</Text>
                        <Text style={styles.totalPrice}>{totalPrice ? `$ ${totalPrice.toFixed(2)}` : '-'}</Text>
                    </View>
                    <Button
                        title={`Buy (${dataProduct.length})`}
                        type="solid"
                        buttonStyle={styles.btn}
                        disabled={data}
                        onPress={() => addHistory()}
                    />
                </View>
                <View style={styles.nav}>
                    <Pressable onPress={() => navigation.navigate(HOME)}>
                        <Avatar
                            rounded
                            source={homeImage}
                            size="small"
                        />
                        <Text>Home</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(CHECKOUT)}>
                        <Avatar
                            rounded
                            source={cartImage}
                            size="small"
                        />

                        <Badge
                            status="success"
                            value={dataProduct.length}
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        />

                        <Text>Cart</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 780,
        backgroundColor: 'white'
    },
    body: {
        flex: 9,
    },
    row: {
        flexDirection: 'row'
    },
    counterBtn: {
        fontSize: 20,
        textAlign: 'center',
        color: 'green',
        marginTop: -3
    },
    counterWrap: {
        borderRadius: 12.5,
        width: 25,
        height: 25,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'green'
    },
    counter: {
        fontSize: 20,
        width: 50,
        textAlign: 'center'
    },
    trash: {
        fontSize: 20,
        color: 'red',
        marginRight: 60
    },
    price: {
        fontSize: 20,
        fontWeight: '700'
    },
    star: {
        marginTop: -15,
    },
    card: {
        flex: 1 / 2,
        height: 300,
        flexDirection: 'row'
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
    },
    navPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btn: {
        width: 180,
        backgroundColor: 'green',
        borderRadius: 10
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: '600'
    }
})

export default Checkout
