import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './style';

export function Header({ onOpenPress }) {
    const handlePress = () => {
      onOpenPress();
    };
  
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>Tarefas</Text>
        <TouchableOpacity style={styles.botaoAdicionar} onPress={handlePress}>
          <Icon name="plus" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
  