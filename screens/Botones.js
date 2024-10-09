import React, { useState, useContext, createContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const ColorSchemeContext = createContext();

const CustomScreen = () => {
  const [isNightMode, setNightMode] = useState(false);
  const currentTheme = isNightMode ? nightTheme : dayTheme;

  return (
    <ColorSchemeContext.Provider value={currentTheme}>
      <View style={[styles.wrapper, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.header, { color: currentTheme.text }]}>
          Modo {isNightMode ? 'Dark' : 'Light'}
        </Text>
        
        <ButtonCluster />

        <View style={styles.toggleContainer}>
          <Text style={[styles.label, { color: currentTheme.text }]}>Cuen Rosales Victor Aaron</Text>
          <Switch
            value={isNightMode}
            onValueChange={setNightMode}
            thumbColor={isNightMode ? '#ffcc00' : '#ccc'}
            trackColor={{ false: '#a3a3a3', true: '#4caf50' }}
          />
        </View>
      </View>
    </ColorSchemeContext.Provider>
  );
};

const ButtonCluster = () => {
  const [buttonMessage, setButtonMessage] = useState('Botones magicos');
  const theme = useContext(ColorSchemeContext);

  const handleButtonPress = (buttonNumber) => {
    setButtonMessage(`Boton ${buttonNumber}`);
  };

  return (
    <View style={styles.buttonCluster}>
      <Text style={[styles.message, { color: theme.text }]}>{buttonMessage}</Text>

      <TouchableOpacity 
        style={[styles.customButton, { backgroundColor: theme.button }]} 
        onPress={() => handleButtonPress(1)}
      >
        <Text style={styles.buttonText}>Acción 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.customButton, { backgroundColor: theme.button }]} 
        onPress={() => handleButtonPress(2)}
      >
        <Text style={styles.buttonText}>Acción 2</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.customButton, { backgroundColor: theme.button }]} 
        onPress={() => handleButtonPress(3)}
      >
        <Text style={styles.buttonText}>Acción 3</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.customButton, { backgroundColor: theme.button }]} 
        onPress={() => handleButtonPress(4)}
      >
        <Text style={styles.buttonText}>Acción 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const dayTheme = {
  background: '#f0f8ff',
  text: '#333333',
  button: '#1976d2',
};

const nightTheme = {
  background: '#1e1e1e',
  text: '#f5f5f5',
  button: '#ff6f61',
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 25,
  },
  buttonCluster: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default CustomScreen;
