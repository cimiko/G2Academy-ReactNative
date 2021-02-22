import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Context } from '../../App'
import { Image, AirbnbRating, Button } from 'react-native-elements'
import { ADD_PRODUCT, HOME, PLUS_PRODUCT } from '../../store/constants'

function Product({ navigation }) {

    const { product, itemId, dataProduct, dispatch } = useContext(Context)

    addCart = async () => {
        const fill = dataProduct.filter(x => x.id === product[itemId].id)

        if(fill.length > 0){
            dispatch({
                type:PLUS_PRODUCT,
                payload: fill[0].index
            })
        }else{
            dispatch({
                type: ADD_PRODUCT,
                payload: await {
                    id: product[itemId].id,
                    title: product[itemId].title,
                    description: product[itemId].description,
                    image: product[itemId].image,
                    price: product[itemId].price,
                    category: product[itemId].category,
                    index: dataProduct.length,
                    qty: 1,
                    totalPrice: product[itemId].price
                }
            })
        }
        navigation.navigate(HOME)
    }

    return (
        <SafeAreaView>
            <View style={Styles.container}>
                <ScrollView style={Styles.body}>
                    <View>
                        <View style={Styles.session}>
                            <Image
                                source={{ uri: product[itemId].image }}
                                style={Styles.image}
                            />
                            <Text style={Styles.price}>{`$ ${product[itemId].price}`}</Text>
                            <Text style={Styles.title}>{product[itemId].title}</Text>
                            <View style={Styles.rating}>
                                <AirbnbRating count={5} size={15} defaultRating={5} reviews={''} starStyle={Styles.star} />
                            </View>
                        </View>
                        <View style={Styles.session}>
                            <Text style={Styles.desc}>Description Product</Text>
                            <Text>{product[itemId].description}</Text>
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
        flex: 1 / 14,
        margin: 10,
        backgroundColor: '#fff'
    },
    btn:{
        backgroundColor: 'green',
        paddingBottom: 10
    }
})

export default Product
