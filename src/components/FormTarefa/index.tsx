import React, { useState } from 'react';
import { View, Button, Keyboard } from 'react-native';
import { styles } from './style';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

export function FormTarefa({ bottomSheetRef, onCloseAction, setTarefas }) {
  const [tarefa, setTarefa] = useState("") 
  const handleSalvarPress = () => {
    setTarefas(prev => [...prev,tarefa])
    Keyboard.dismiss();
    onCloseAction();
    bottomSheetRef.current?.close();
    setTarefa("")
  };

  return (
      <BottomSheet style={styles.bottomSheet} ref={bottomSheetRef} snapPoints={['40%', '20%']} enablePanDownToClose={true}>
        <BottomSheetTextInput style={styles.input} placeholder="Escreva aqui a nova tarefa" value={tarefa} onChangeText={txt => setTarefa(txt)} />
          <Button title="Salvar" onPress={handleSalvarPress} />
      </BottomSheet>
  );
}
