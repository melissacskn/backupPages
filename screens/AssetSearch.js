import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Fire Blanket' },
  { id: '2', name: 'Hot Water Urn' },
  { id: '3', name: 'Fire Extinguisher' },
  { id: '4', name: 'Safety Goggles' },
  { id: '5', name: 'First Aid Kit' },
];

const AssetSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredData([]);
    } else {
      setFilteredData(
        data.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleSelectItem = (item) => {
    setSearchQuery(item.name);
    setFilteredData([]); // Hide the list after selection
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectItem(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  autocompleteContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    maxHeight: 200, // limit the height of the autocomplete dropdown
  },
  itemText: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AssetSearch;
