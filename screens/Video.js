import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const ScreenVideo = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Video demostrativo</Text>
            <Video
                source={require('../assets/video.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={true}
                style={styles.video}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0', // Color de fondo más suave
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    video: {
        width: 1080, 
        height: 720,
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        paddingHorizontal: 10,
    },
});

export default ScreenVideo;
