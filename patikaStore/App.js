import React from 'react';
import { StyleSheet, FlatList, ScrollView, SafeAreaView, Text } from 'react-native';
import products_data from './src/store_data.json';
import ProductCard from './src/components/ProductCard';
import SearchBar from './src/components/SearchBar';
const App = () => {
  const renderProducts = ({ item }) => <ProductCard datas={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.storeTitle}>{'PATIKASTORE'}</Text>
      <SearchBar />
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  storeTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
})

export default App;