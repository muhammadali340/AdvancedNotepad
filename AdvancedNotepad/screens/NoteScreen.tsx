import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useNotes } from '../contexts/NoteContext';
import RichEditor from '../components/RichEditor';

const NoteScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { getNoteById, addNote, updateNote } = useNotes();
  const [note, setNote] = useState({ id: '', title: '', content: '', category: '' });

  useEffect(() => {
    const noteId = route.params?.noteId;
    if (noteId) {
      const existingNote = getNoteById(noteId);
      if (existingNote) {
        setNote(existingNote);
      }
    }
  }, [route.params?.noteId]);

  const handleSave = () => {
    if (note.id) {
      updateNote(note);
    } else {
      addNote(note);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <RichEditor
        initialContent={note.content}
        onChangeContent={(content) => setNote({ ...note, content })}
        onChangeTitle={(title) => setNote({ ...note, title })}
        onSave={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default NoteScreen;

