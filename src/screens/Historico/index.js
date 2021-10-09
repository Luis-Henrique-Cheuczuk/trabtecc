import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Login/styles';

const Historico = ({ navigation }) => {
    return(
        <Container>
        <Txt>Tela</Txt>
        <Txt>de</Txt>
        <Txt>Histórico</Txt>
        <Button onPress={() => navigation.navigate('Home')}>
          <TxtButton>Historico Screen -{'>'} Home Screen</TxtButton>
        </Button>
        </Container>

    )

}

export default Historico;