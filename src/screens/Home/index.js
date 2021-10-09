import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Inputs } from './styles';
import { Txt, Button, TxtButton, Txt_input } from '../Login/styles.js';

import initRealm from '../../store';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {

  const [nameproduct, setNameProduct] = useState("")
  const [weight, setWeight] = useState("")
  const [quantity, setQuantity] = useState("")
  const [phenylalanine, setPhenylalanine] = useState("")

  const [products, setProducts] = useState([])

  async function createProduct(realm) {
    let products1 = null
    try {
      await realm.write(() => {
        products1 = realm.create("Products", {
          _id: 12,
          /* current_date: 2021-08-10,
          current_time: 18:30:59, */
          name_product: nameproduct,
          quantity_product: quantity,
          weight_total: weight,
          phenylalanine_total: phenylalanine
        });
      });
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const product = realm.objects("Products")
      setProducts(product)
    }
  }, []);

  async function handleSave() {
    const realm = await initRealm()
    await createProduct(realm)
  }

  return (
    <Container>
      <Txt>Tela da Home</Txt>
      <Inputs
        placeholder="Nome do Produto"
        value={nameproduct}
        onChangeText={nameproduct => setNameProduct(nameproduct)}>
        nameproduct
        {/* {products.map(item => <Txt_input>{item.name_product}</Txt_input>)} */}
      </Inputs>
      <Inputs
        placeholder="Quantidade do Produto a ser consumida"
        value={quantity}
        onChangeText={quantity => setQuantity(quantity)}>
        {/* {products.map(item => <Txt_input>{item.quantity_product}</Txt_input>)} */}
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Peso atual"
        value={weight}
        onChangeText={weight => setWeight(weight)}>
       {/*  {products.map(item => <Txt_input>{item.weight_total}</Txt_input>)} */}
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Total Fenilalanina"
        value={phenylalanine}
        onChangeText={phenylalanine => setPhenylalanine(phenylalanine)}>
        {/* {products.map(item => <Txt_input>{item.phenylalanine_total}</Txt_input>)} */}
      </Inputs>
      <Button onPress={() => navigation.navigate('CadastrarProduto')}>
        <TxtButton>Home Screen -{'>'} CadastrarProduto Screen</TxtButton>
      </Button>
      <TouchableOpacity onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </TouchableOpacity>
      {/* <Inputs
        keyboardType="numeric"
        placeholder="Data atual">
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Hora atual">
      </Inputs> */}
      {/* <Button onPress={() => navigation.navigate('Registro')}>
            <TxtButton>Home Screen -{'>'} Registro Screen</TxtButton>
          </Button> */}
      {/* <Button onPress={() => navigation.navigate('Historico')}>
          <TxtButton>Home Screen -{'>'} Historico Screen</TxtButton>
        </Button>
        <Button onPress={() => navigation.navigate('InfoApp')}>
          <TxtButton>Home Screen -{'>'} InfoApp Screen</TxtButton>
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
          <TxtButton>Home Screen -{'>'} Login Screen (Sair)</TxtButton>
        </Button> */}
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>
  )
}

export default Home;