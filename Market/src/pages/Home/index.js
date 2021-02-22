import React, { useContext, useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    Pressable,
    ActivityIndicator,
    TextInput
} from 'react-native'
import { Card, AirbnbRating, Avatar, Badge } from 'react-native-elements'
import { PRODUCT, HOME, CHECKOUT } from '../../store/constants'
import { Context } from '../../App'
import { cartImage, homeImage } from '../../ui-kit/File'

function Home({ navigation }) {
    const { product, setItemId, dataProduct } = useContext(Context)
    const [search, setSearch] = useState('')

    chooseProduct = (i) => {
        setItemId(i)
        navigation.navigate(PRODUCT)
    }

    onSearch = (e) => {
        const data = product.filter(x => { return x.title.toLowerCase().includes(e.toLowerCase()) })
        setSearch(data)
    }

    const renderItem = ({ item }) => (
        <Pressable style={styles.card} onPress={() => chooseProduct(item.id - 1)}>
            <Card containerStyle={styles.cardItems}>
                <Card.Image
                    source={{ uri: `${item.image}` }}
                    containerStyle={{ width: 150, height: 100 }}
                />
                <View style={{ marginTop: 10 }}>
                    <Card.Title numberOfLines={2}>{item.title}</Card.Title>
                    <Card.Divider />
                    <Text style={styles.price}>{`$ ${item.price}`}</Text>
                    <AirbnbRating count={5} size={15} defaultRating={5} reviews={''} starStyle={styles.star} />
                </View>
            </Card>
        </Pressable>
    );

    const items = search.length ? search : product
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchWrap}>
                    <TextInput
                        placeholder="Search?"
                        value={search}
                        onChangeText={onSearch}
                        style={styles.search}
                    />
                </View>
                <ScrollView style={styles.body}>
                    <View>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            // data={this.state.entries}
                            renderItem={renderItem}
                            sliderWidth={500}
                            itemWidth={500}
                            layout='default'
                        />
                    </View>
                    <View>
                        <FlatList
                            data={items}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            columnWrapperStyle={styles.row}
                            ListEmptyComponent={<ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
                        />
                    </View>
                </ScrollView>
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
    search: {
        // backgroundColor: 'blue',
        height: 50,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    searchWrap: {
        flex: 1/10,
    },
    body: {
        flex: 9,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around'
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
    }
})

export default Home
