import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import profile from '../File/profile.jpg';
import { Avatar } from 'react-native-elements';

function Header() {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.headOne}></View>
                <Text style={styles.headText}>TUGAS 2</Text>
                <View style={styles.headTwo}></View>
            </View>
            <View style={styles.title}>
                <View>
                    <Avatar
                        rounded
                        source={profile}
                        size={100}
                        avatarStyle={{ borderColor: '#1E2636', borderWidth: 4 }}
                    />
                </View>
                <View>
                    <Text style={styles.sectionTitle}>HARTONO</Text>
                    <Text style={styles.sectionDescription}>Live Code 2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1E2636',
        flexDirection: 'row'
    },
    headText: {
        fontSize: 24,
        color: '#fff',
    },
    headOne: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        width: 40,
        marginRight: 10
    },
    headTwo: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        width: 260,
        marginLeft: 10
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1E2636',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: '#696969',
    }
})

export default Header
