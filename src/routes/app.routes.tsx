import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '@/screens/Home'
import { Concluidas } from '@/screens/Concluidas';
import { Pendentes } from '@/screens/Pendentes';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen name='Home' component={Home} options={{title:'Tarefas'}}/>
            <Screen name='Concluidas' component={Concluidas} options={{title:'Concluídas'}}/>
            <Screen name='Pendentes' component={Pendentes} options={{title:'Pendentes'}}/>

        </Navigator>
    )
}
