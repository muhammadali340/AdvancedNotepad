import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNotes } from '../contexts/NoteContext';
import SearchBar from '../components/SearchBar';
import NoteItem from '../components/NoteItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { notes, deleteNote } = useNotes();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filteredNotes}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onPress={() => navigation.navigate('Note', { noteId: item.id })}
            onDelete={() => deleteNote(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Note', { noteId: null })}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#007AFF',
    borderRadius: 28,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    color: 'white',
  },
});

export default HomeScreen;

