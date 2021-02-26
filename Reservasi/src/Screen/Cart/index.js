import React, { useContext } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { Context } from '~/App'
import { CHECKOUT } from '~/Store/constant'

function Cart({navigation}) {

    const { cart, setCartId } = useContext(Context)


    cartTable = (x) => {
        setCartId(x)
        navigation.navigate(CHECKOUT);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {
                        cart.map((l, i) => (
                            <Pressable onPress={() => cartTable(i)}>
                                <ListItem key={i} bottomDivider>
                                    <Avatar source={l.image} size='large' />
                                    <ListItem.Content>
                                        <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                                        <ListItem.Subtitle>{l.person} Person</ListItem.Subtitle>
                                        <Text style={styles.subtitle}>Rp.{l.harga}</Text>
                                    </ListItem.Content>
                                </ListItem>
                            </Pressable>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '800'
    }
})

export default Cart
