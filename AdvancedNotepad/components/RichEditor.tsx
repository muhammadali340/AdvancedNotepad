import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const RichEditor = ({ initialContent, onChangeContent, onChangeTitle, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(initialContent || '');

  const handleTitleChange = (text) => {
    setTitle(text);
    onChangeTitle(text);
  };

  const handleContentChange = (text) => {
    setContent(text);
    onChangeContent(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Note Title"
        value={title}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Start typing your note..."
        multiline
        value={content}
        onChangeText={handleContentChange}
      />
      <Button title="Save" onPress={onSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
  },
});

export default RichEditor;

