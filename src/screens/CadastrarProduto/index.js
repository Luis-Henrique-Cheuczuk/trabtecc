import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { Container, Txt, Button, TxtButton } from '../Login/styles';
import { Inputs } from '../Home/styles'

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
          _id: 111111,
          /* current_date: 2021-08-10,
          current_time: 18:30:59, */
          names_product: namesproduct,
          manufacturer_product: manufacturer,
          unity_product: unity,
          protein_total: quantityprotein,
          phenylalanine_totals: tphenylalanine
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
        value={tphenylalanine}
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