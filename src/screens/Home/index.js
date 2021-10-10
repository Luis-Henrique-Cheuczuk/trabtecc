import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Inputs, Risco } from './styles';
import { Txt, Button, TxtButton, Txt_input } from '../Login/styles.js';

import initRealm from '../../store';

const Home = ({ navigation }) => {

  const [nameproduct, setNameProduct] = useState("")
  const [weight, setWeight] = useState("")
  const [quantity, setQuantity] = useState("")
  const [phenylalanine, setPhenylalanine] = useState("")

  const [products, setProductsHome] = useState([])


  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const product = realm.objects("ProductsHome")
      setProductsHome(product)
    }
  }, []);

  async function createProductHome(realm) {
    let products1 = null
    try {
      await realm.write(() => {
        products1 = realm.create("ProductsHome", {
          _id: 1,
          /* current_date: 2021-08-10,
          current_time: 18:30:59, */
          name_product: nameproduct,
          quantity_product: quantity,
          weight_total: weight,
          phenylalanine_total: phenylalanine
        });
      });
      console.log("---------------------- dados products1 ---------------------------\n", products1)
    } catch (e) {
      console.log(e)
    }
  }
  //console.log("---------------------- dados da tela ---------------------------", createProductHome())

  async function handleSave() {
    const realm = await initRealm()
    await createProductHome(realm)
  }

  return (
    <Container>
      <Txt>Tela da Home</Txt>
      <Inputs
        placeholder="Nome do Produto"
        value={nameproduct}
        onChangeText={a => setNameProduct(a)}>
        {/* {products.map(item => <Txt_input>{item.name_product}</Txt_input>)} */}
      </Inputs>
      <Inputs
        placeholder="Quantidade do Produto a ser consumida"
        value={quantity}
        onChangeText={q => setQuantity(q)}>
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Peso atual"
        value={weight}
        onChangeText={w => setWeight(w)}>
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Total Fenilalanina"
        value={phenylalanine}
        onChangeText={p => setPhenylalanine(p)}>
      </Inputs>
      <Button onPress={() => navigation.navigate('CadastrarProduto')}>
        <TxtButton> Cadastrar Produto </TxtButton>
      </Button>
      <Button onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </Button>
      <Risco />
        <Txt_input>
          Nome do Produto: {products.map(item => <Txt_input>{item.name_product}</Txt_input>)} 
        </Txt_input>
        <Txt_input>
          Quantidade do Produto: {products.map(item => <Txt_input>{item.quantity_product}</Txt_input>)} 
        </Txt_input>
        <Txt_input>
          Peso atual: {products.map(item => <Txt_input>{item.weight_total}</Txt_input>)} 
        </Txt_input>
        <Txt_input>
          Felilananila total: {products.map(item => <Txt_input>{item.phenylalanine_total}</Txt_input>)} 
        </Txt_input>
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