import React, { useRef, useState } from 'react';
import { View } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';

import { FormTarefa } from "@/components/FormTarefa";
import { Header } from "@/components/Header";

import {styles} from "./styles"
import { ListConcluida } from '@/components/ListConcluida';

export function Concluidas(){
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [tarefas, setTarefas] = useState([]) 

    const handleOpenPress = () => {
        bottomSheetRef.current?.expand();
    };

    const handleCloseAction = () => {
        bottomSheetRef.current?.close();
    };
    
    return(
        <View style={styles.container}>
            <ListConcluida tarefas={tarefas} setTarefas = {setTarefas}/>
            
        </View>
    )
}
