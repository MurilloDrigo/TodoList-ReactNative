import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';



export function Body({ tarefas, setExclui }) {
  const [excluir, setExcluir] = useState("")
  const handleExcluirPress = () => {  
  const excluirTarefa = () => {
    setExclui(prev=>{
      return [...prev,excluir]
    })

  
  return (
    <View style={styles.bodyContainer} >
      <Text>Lista de Tarefas:</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Text>{item}</Text>
            <Button title="Excluir" onPress={handleExcluirPress} />

          </View>
        )}
      />
    </View>
  );
}
