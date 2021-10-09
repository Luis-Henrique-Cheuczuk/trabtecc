import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Login/styles';

const InfoApp = ({ navigation }) => {
    return(
        <Container>
        <Txt>Tela</Txt>
        <Txt>de</Txt>
        <Txt>Indo do App</Txt>
        <Button onPress={() => navigation.navigate('Home')}>
          <TxtButton>InfoApp Screen -{'>'} Home Screen</TxtButton>
        </Button>
        </Container>

    )

}

export default InfoApp;