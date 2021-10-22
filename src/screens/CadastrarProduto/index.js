import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Home/styles';
import { Inputs } from '../Home/styles'

import initRealm from '../../store';

import { getProducts, postProducts } from './service';
import uuid from 'react-native-uuid';

const CadastrarProduto = ({ navigation }) => {

  const [namesproduct, setNameProduct] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [quantityprotein, setQuantityProtein] = useState("")
  const [servingsize, setServingSize] = useState("")

  const [products, setProducts] = useState([])

  //Mostrar os dados na tela
  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const result = await getProducts()
      if (result?.length > 0) {
        result.map(item => {
          return createProduct(realm, item, true)
        })
      }
    }
  }, []);

  async function createProduct(realm, item, isGet = false) {
    let createproduct = null
    const id_product = uuid.v4()
    const data_item = {
      name: item?.name || namesproduct,
      brand: item?.brand || manufacturer,
      serving_size: item?.serving_size || servingsize,
      protein: item?.protein || quantityprotein
    }
    console.log("\n----------------- Dados Back End ---------------------", data_item)
    try {
      await realm.write(() => {
        createproduct = realm.create("Products", {
          _id: id_product,
          user_id: 1,
          name: data_item.name,
          brand: data_item.brand,
          amount_consumed: 0,
          serving_size: parseFloat(data_item.serving_size),
          protein: parseFloat(data_item.protein),
          pku_consumed: parseFloat(quantityprotein * 0.05)
        });
      });
      if(!isGet){
        postProducts(id_product, createproduct) //Não vai gravar de volta no back
      }
      console.log("\n---------------------- Dados Local ---------------------------\n", createproduct)
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
    await createProduct(realm, null, false)
  }

  return (
    <Container>
      <Txt>Tela</Txt>
      <Txt>de</Txt>
      <Txt>Cadastro de produto</Txt>
      <Inputs
        placeholder="Nome do Produto"
        value={namesproduct}
        onChangeText={a => setNameProduct(a)}>
      </Inputs>
      <Inputs
        placeholder="Fabricante do Produto"
        value={manufacturer}
        onChangeText={m => setManufacturer(m)}>
      </Inputs>
      <Inputs
      keyboardType="numeric"
        placeholder="Total de gramas do Produto"
        value={servingsize}
        onChangeText={u => setServingSize(u)}>
      </Inputs>
      <Inputs
      keyboardType="numeric"
        placeholder="Quantidade de Proteína por porção"
        value={quantityprotein}
        onChangeText={q => setQuantityProtein(q)}>
      </Inputs>
      <Button onPress={() => navigation.navigate('Home')}>
        <TxtButton> Consumo diário </TxtButton>
      </Button>
      <Button onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </Button>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>

  )

}


export default CadastrarProduto;