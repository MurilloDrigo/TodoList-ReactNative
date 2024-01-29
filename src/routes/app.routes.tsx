import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '@/screens/Home'

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen name='Home' component={Home} options={{title:'Tarefas Pendentes'}}/>
            <Screen name='Home1' component={Home} options={{title:'Tarefas Adiadas'}}/>
            <Screen name='Home2' component={Home} options={{title:'Tarefas Concluídas'}}/>

        </Navigator>
    )
}
