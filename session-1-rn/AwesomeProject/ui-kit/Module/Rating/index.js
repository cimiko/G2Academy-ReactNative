import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Star } from '../../Atom'

function Rating({text, rating}) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{text}</Text>
            <Star count={7} rating={rating} style={styles.rate} />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "black",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    rate:{
        marginTop: -35
    }
})

export default Rating
