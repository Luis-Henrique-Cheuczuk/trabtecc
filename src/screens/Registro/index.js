import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt, Button, TxtButton, Input } from '../Login/styles';

const Registro = ({ navigation }) => {
    return(
        <Container>
        <Txt>Registrar-se</Txt>
        <Input
        placeholder = "Digite seu nome">
        </Input>
        <Input
        keyboardType = "date" placeholder = "Data de nascimento">
        </Input>
        <Input
          keyboardType = "email-address" placeholder = "Digite seu e-mail">
        </Input>
        <Input
        keyboardType = "password" placeholder = "Digite sua senha">
        </Input>
        <Input
        keyboardType = "password" placeholder = "Confirme sua senha">
        </Input>
        <Button onPress={() => navigation.navigate('Login')}>
          <TxtButton>Concluído</TxtButton>
        </Button>
        <StatusBar marginTop = {'auto'}></StatusBar>
        </Container>

    )

}

export default Registro;