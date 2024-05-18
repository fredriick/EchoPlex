import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import VoiceRecorder from 'react-native-voice-recorder';
import VideoRecorder from 'react-native-video';

const MemoryUpload = () => {
  const [memory, setMemory] = useState('');
  const [recording, setRecording] = useState(null);
  const [video, setVideo] = useState(null);

  const handleRecordAudio = async () => {
    const recording = await VoiceRecorder.record();
    setRecording(recording);
  };

  const handleRecordVideo = async () => {
    const video = await VideoRecorder.record();
    setVideo(video);
  };

  const handleUpload = () => {
    // Upload recording or video to server or storage
  };

  return (
    <View>
      <Text>Record a memory:</Text>
      <Button title="Record Audio" onPress={handleRecordAudio} />
      <Button title="Record Video" onPress={handleRecordVideo} />
      <TextInput
        value={memory}
        onChangeText={(text) => setMemory(text)}
        placeholder="Describe your memory"
      />
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
};

export default MemoryUpload;
