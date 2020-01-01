import React from 'react'
import { Linking } from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Header } from '../../ui-kit/Organism'

function Experience() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <Header headOne={styles.navItemOne} headTwo={styles.navItemTwo} headThree={styles.navItemThree} />

                    <View style={styles.body}>
                        <View>
                            <Text style={styles.sectionHeader}>WORK EXPERIENCE</Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                                CV KOBE PLASTIC{"\n"}
                                <Text style={styles.sectionSmall}>(Mei 2014 - Jan 2015)</Text>
                            </Text>
                            <FlatList
                                data={[
                                    { key: `Membuat design mainan.` },
                                    { key: 'Mengimplementasikan design ke molding.' },
                                    { key: 'Mengubah design molding ke dalam G-Code.' },
                                    { key: 'Membuat molding menggunakan mesin CNC.' },
                                ]}
                                renderItem={({ item }) => <Text style={styles.item}>&#9728;{`${item.key}`}</Text>}
                            />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                            PT JAYASAKTI SUKSES MANDIRI{"\n"}
                                <Text style={styles.sectionSmall}>(Jun 2018 - Ags 2018)</Text>
                            </Text>
                            <FlatList
                                data={[
                                    { key: `Membuat gambar kerja GreenHouse.` },
                                    { key: 'Membuat gambar part-part GreenHouse.' },
                                    { key: 'Menggambar Masterplan GreenHouse.' },
                                    { key: 'Membuat design detail 2D & 3D.' },
                                ]}
                                renderItem={({ item }) => <Text style={styles.item}>&#9728;{`${item.key}`}</Text>}
                            />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                            PT BALADHIKA KARYA RAHARJA{"\n"}
                                <Text style={styles.sectionSmall}>(Ags 2018 - Nov 2018)</Text>
                            </Text>
                            <FlatList
                                data={[
                                    { key: `Memasarkan dan menawarkan Property.` },
                                    { key: 'Mencari Customer dan database baru.' },
                                    { key: 'Membantu Customer dalam pengajuan akad kredit.' }
                                ]}
                                renderItem={({ item }) => <Text style={styles.item}>&#9728;{`${item.key}`}</Text>}
                            />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                            PT MAHKOTA SENTOSA UTAMA{"\n"}
                                <Text style={styles.sectionSmall}>(Des 2018 - Sep 2019)</Text>
                            </Text>
                            <FlatList
                                data={[
                                    { key: `Melakukan follow-up kepada customer Bank Nobu untuk melakukan akad kredit.` },
                                    { key: 'Membantu dan melengkapi data customer untuk akad kredit Bank Nobu.' },
                                    { key: 'Membantu Bank Nobu untuk melakukan akad kredit.' }
                                ]}
                                renderItem={({ item }) => <Text style={styles.item}>&#9728;{`${item.key}`}</Text>}
                            />
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
        // flexDirection: 'row',
        // alignContent: 'center'
    },
    sectionHeader: {
        fontSize: 28,
        marginTop: 10,
        marginLeft: 10
    },
    sectionSmall: {
        fontSize: 15
    },
    item: {
        fontSize:16,
        marginTop: 5
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
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
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    navItemThree: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        // margin: 5,
        borderColor: 'black',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

export default Experience
