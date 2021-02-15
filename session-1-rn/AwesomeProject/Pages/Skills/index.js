import React from 'react'
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
import { NavBar, Rating } from '../../ui-kit/Module'

function Skills() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <NavBar headOne={styles.navItemOne} headTwo={styles.navItemTwo} headThree={styles.navItemThree} />


                    <View style={styles.body}>
                        <View>
                            <Text style={styles.sectionHeader}>PROFESSIONAL SKILLS</Text>
                        </View>
                        <Rating text="Microsoft Office" rating={5} />
                        <Rating text="Autocad 2D & 3D" rating={7} />
                        <Rating text="Google SketchUp" rating={6} />
                        <Rating text="MasterCam" rating={5} />
                        <Rating text="FluidSim" rating={7} />
                        <Rating text="HTML & CSS" rating={5} />
                        <Rating text="JavaScript" rating={4} />
                        <Rating text="JQUERY" rating={4} />
                        <Rating text="PHP" rating={3} />
                        <Rating text="Laravel" rating={5} />
                        <Rating text="Python" rating={2} />
                        <Rating text="Express JS" rating={5} />
                        <Rating text="Java" rating={3} />
                        <Rating text="UI/UX" rating={4} />
                        <Rating text="SEO" rating={2} />
                        <Rating text="SAP ERP" rating={4} />
                        <Rating text="Adobe Photoshop" rating={5} />
                        <Rating text="Adobe Illustrator" rating={5} />
                        <Rating text="Final Cut Pro" rating={4} />
                    </View>


                    <View style={styles.body}>
                        <View>
                            <Text style={styles.sectionHeader}>PERSONAL SKILLS</Text>
                        </View>
                        <Rating text="Organisation" rating={6} />
                        <Rating text="Communication" rating={5} />
                        <Rating text="Interpersonal Skills" rating={5} />
                        <Rating text="Multitasking" rating={5} />
                        <Rating text="Transferable Skills" rating={5} />
                        <Rating text="Computer Skills" rating={5} />
                        <Rating text="Problem-solving" rating={4} />
                        <Rating text="Management Skills" rating={4} />
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
        backgroundColor: '#FFFAFA',
        paddingBottom: 20
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    rate: {
        marginTop: -35
    },
    sectionHeader: {
        fontSize: 28,
        marginTop: 50,
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
        borderTopLeftRadius: 10,
        backgroundColor: '#FFFAFA'
    }
});

export default Skills
