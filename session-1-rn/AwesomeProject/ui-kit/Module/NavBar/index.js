import React from 'react'

import { StyleSheet, Text, View } from "react-native";

import { Link } from "react-router-native";

function NavBar({headOne, headTwo, headThree}) {
    return (
        <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={headOne}>
                <Text>PROFILE</Text>
            </Link>
            <Link to="/experience" underlayColor="#f0f4f7" style={headTwo}>
                <Text>EXPERIENCE</Text>
            </Link>
            <Link to="/skills" underlayColor="#f0f4f7" style={headThree}>
                <Text>SKILLS</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 25,
        marginHorizontal: 5
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
});

export default NavBar
