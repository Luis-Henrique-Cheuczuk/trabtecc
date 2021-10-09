import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Inputs } from './styles';
import { Txt, Button, TxtButton } from '../Login/styles.js';

import initRealm from '../../store';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CadastrarProduto = ({ navigation }) => {

  const [nameproduct, setNameProduct] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [unity, setUnity] = useState("")
  const [quantityprotein, setQuantityProtein] = useState("")
  const [phenylalanine, setPhenylalanine] = useState("")

  const [products, setProducts] = useState([])

  async function createProduct(realm) {
    let products1 = null
    try {
      await realm.write(() => {
        products1 = realm.create("Products", {
          _id: 111111,
          /* current_date: 2021-08-10,
          current_time: 18:30:59, */
          name_product: nameproduct,
          manufacturer_product: manufacturer,
          unity_product: unity,
          protein_total: quantityprotein,
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
    const teste = await createProduct(realm)
    console.log(teste)
  }

  return (
    <Container>
      <Txt>Tela</Txt>
      <Txt>de</Txt>
      <Txt>Cadastro de produto</Txt>
      <Inputs
        placeholder="Nome do Produto"
        value={nameproduct}
        onChangeText={a => setNameProduct(a)}>
      </Inputs>
      <Inputs
        placeholder="Fabricante do Produto"
        value={manufacturer}
        onChangeText={m => setManufacturer(m)}>
      </Inputs>
      <Inputs
        placeholder="Unidade do Produto"
        value={unity}
        onChangeText={u => setUnity(u)}>
      </Inputs>
      <Inputs
        placeholder="Qauntidade de Proteína por porção"
        value={quantityprotein}
        onChangeText={q => setQuantityProtein(q)}>
      </Inputs>
      <Inputs
        placeholder="Quantidade Total de Fenilalanina"
        value={phenylalanine}
        onChangeText={p => setPhenylalanine(p)}>
      </Inputs>
      <Button onPress={() => navigation.navigate('Home')}>
        <TxtButton>CadastrarProduto Screen -{'>'} Home Screen</TxtButton>
      </Button>
      <TouchableOpacity onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </TouchableOpacity>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>

  )

}

export default CadastrarProduto;