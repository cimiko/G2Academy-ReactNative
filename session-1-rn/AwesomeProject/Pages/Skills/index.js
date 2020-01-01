import React from 'react'
import { Linking } from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Header } from '../../ui-kit/Organism'

function Skills() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <Header headOne={styles.navItemOne} headTwo={styles.navItemTwo} headThree={styles.navItemThree} />

                    <View>
                        <Text style={styles.sectionHeader}>PROFESSIONAL SKILLS</Text>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                                Microsoft Office</Text>
                            <Text style={styles.sectionDescription}>
                                Hartono
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Date Of Birth</Text>
                            <Text style={styles.sectionDescription}>
                                08 November 1996
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Address</Text>
                            <Text style={styles.sectionDescription}>
                                Jl. 20 Desember No.81, Pegadungan, Kalideres, Jakarta Barat.
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>GIT Hub</Text>
                            <Text style={styles.sectionDescription}
                                onPress={() => Linking.openURL('https://github.com/cimiko')}>
                                github.com/cimiko
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Awards</Text>
                            <Text style={styles.sectionDescription}>
                                JUARA 3 NETWORKING - BSI
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Phone Number</Text>
                            <Text style={styles.sectionDescription}>
                                0812-1327-3727
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Email</Text>
                            <Text style={styles.sectionDescription}>
                                private.hartono@gmail.com
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Facebook</Text>
                            <Text style={styles.sectionDescription}>
                                華黃 (Hartono Wijaya)
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Instagram</Text>
                            <Text style={styles.sectionDescription}>
                                jishucimiko
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    sectionHeader: {
        fontSize: 28,
        marginTop: 10,
        marginLeft: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    navItemOne: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        // margin: 5,
        borderColor: 'black',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    navItemTwo: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        // margin: 5,
        borderColor: 'black',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    navItemThree: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        // margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

export default Skills
