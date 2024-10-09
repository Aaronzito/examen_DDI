import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeaturedArticle = () => {

    const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://bulletformyvalentine.com/files/2021/07/bfmv_social.jpg' }} 
                style={styles.image}
            />
            <Text style={styles.title}>
                Bullet for My Valentine
            </Text>
            <Text style={styles.description}>
               una banda de Metalcore chongonsisima
               </Text>
            <TouchableOpacity 
                onPress={() => navigate.navigate("Details")}
                style={styles.ctaButton}
            >
                <Text style={styles.buttonText}>Detalles</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#e0f7fa',
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 20,
        resizeMode: 'cover',
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#0288d1',
    },
    title: {
        fontSize: 26,
        color: '#004d40',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#00796b',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    ctaButton: {
        backgroundColor: '#00796b',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default FeaturedArticle;
