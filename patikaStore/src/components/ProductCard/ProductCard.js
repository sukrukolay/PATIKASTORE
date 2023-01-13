import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({ datas }) => {
    if (10 === datas.id) { // json dosyasından son itemi bulmak lazım manuel doğru değil.
        styles.container = styles.lastItem;
    }
    return (
        <View style={styles.container}>

            <Image style={styles.productImage} source={{ uri: datas.imgURL }} />
            <Text style={styles.productTitle}>{datas.title}</Text>
            <Text style={styles.productPrice}>{datas.price}</Text>
            <Text style={styles.inStock}>{datas.inStock === 'true' ? '' : 'STOKTA YOK'}</Text>
        </View>

    )
}



export default ProductCard;