import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './pages/Feed'
import logo from './assets/instagram.png'

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        defaultNavigationOptions: { // configuracoes pra todas as telas
            headerTitleAlign: 'center', // forçar a logo a ficar no centro
            headerTitle: <Image source={logo} />, // titulo do header com o component nativo de imagem e seu source
            headerStyle:{ //passando uma estilizacao pro header
                backgroundColor: '#f5f5f5'
            }
        }
    })
)

export default Routes;