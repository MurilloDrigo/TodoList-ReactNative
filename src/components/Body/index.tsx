import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { FormTarefa } from '@/components/FormTarefa';



export function Body({ tarefas, setTarefas }) {

  function handleTaskDeleted(index:number){
      setTarefas(tarefas.filter(tarefa => tarefas.indexOf(tarefa) != index))
    }

  function handleTaskDone(){}
    
  
  return (
    <View>
      <Text style={styles.tituloTarefa}> A fazer: </Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        
        renderItem={({ item, index }) => (
          <View style={styles.itemList}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity style={styles.itemIcon} onPress={() => handleTaskDeleted(index)}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
            

          </View>
        )}
        
      />
    </View>
  );
}
