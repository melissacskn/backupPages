import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const NewAssetSearch = () => {
  const [filterData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPosts = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
      }).catch((error) => {
        console.log("Error you have is: ", error)
      })
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ?
          item.title.toUpperCase() :
          ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  }

  const selectItem = (title) => {
    setSearch(title);
    setFilteredData([]);
  }

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => selectItem(item.title)}>
        <Text style={styles.itemStyle}>
          {item.id}{'. '}{item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}></View>
    )
  }

  useEffect(() => {
    fetchPosts();
    return () => { }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Search and select asset type"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        {filterData.length > 0 && (
          <FlatList
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 15
  },
  textInputStyle: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "white"
  }
})

export default NewAssetSearch;
