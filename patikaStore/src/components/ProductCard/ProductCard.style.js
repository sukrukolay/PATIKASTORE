import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
        height: Dimensions.get('window').height / (5 / 3),
        // width: Dimensions.get('window').width / 2,
        borderRadius: 10,
    },
    productImage: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        width: '80%',
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
        marginTop: '20%',
        marginLeft: '10%',

    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '20%',
    },
    productTitle: {
        fontSize: 'bold',
        fontSize: 25,
        color: 'black',
        textAlign: 'left',
        marginLeft: 10,
    },
    productPrice: {
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    inStock: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    lastItem: {
        backgroundColor: 'lightgray',
        marginBottom: 150,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
        height: Dimensions.get('window').height / (5 / 3),
        // width: Dimensions.get('window').width / 2,
        borderRadius: 10,
    },
})