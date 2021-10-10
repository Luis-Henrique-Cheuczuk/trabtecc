import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Login/styles';
import { Inputs } from '../Home/styles'

import initRealm from '../../store';
/* import Realm from "realm";
import ProductSchema from "./TaskList.realm";
 */
const CadastrarProduto = ({ navigation }) => {

  const [namesproduct, setNameProduct] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [unity, setUnity] = useState("")
  const [quantityprotein, setQuantityProtein] = useState("")
  const [tphenylalanine, setPhenylalanine] = useState("")

  const [products, setProducts] = useState([])

  async function createProduct(realm) {
    let createproduct1 = null
    try {
      await realm.write(() => {
        createproduct1 = realm.create("Products", {
          _id: 44,
          /* current_date: 2021-08-10,
          current_time: 18:30:59, */
          names_product: namesproduct,
          manufacturer_product: manufacturer,
          unity_product: parseFloat(unity),
          protein_total: parseFloat(quantityprotein),
          phenylalanine_totals: parseFloat(quantityprotein * 0.05)
        });
      });
      console.log("---------------------- dados createproduct1 ---------------------------\n", createproduct1)
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
        placeholder="Unidade do Produto"
        value={unity}
        onChangeText={u => setUnity(u)}>
      </Inputs>
      <Inputs
      keyboardType="numeric"
        placeholder="Quantidade de Proteína por porção"
        value={quantityprotein}
        onChangeText={q => setQuantityProtein(q)}>
      </Inputs>
      <Inputs
      keyboardType="numeric"
        placeholder="Quantidade Total de Fenilalanina"
        value={tphenylalanine}
        >
      </Inputs>
      <Button onPress={() => navigation.navigate('Home')}>
        <TxtButton> Home </TxtButton>
      </Button>
      <Button onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </Button>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>

  )

}


export default CadastrarProduto;