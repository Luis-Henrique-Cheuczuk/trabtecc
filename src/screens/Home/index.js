import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Inputs, Risco, Button, Txt, TxtButton, Txt_input, Scroll } from './styles';
import initRealm from '../../store/index';
import { getConsume, postConsume } from './service';
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker';

const Home = ({ navigation }) => {

  const [nameproduct, setNameProduct] = useState("")
  const [quantityprotein, setQuantityProtein] = useState("")
  const [quantity, setQuantity] = useState("")
  const [consume, setConsume] = useState([])
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState("")

  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const consume = realm.objects("Consume")
      setConsume(consume)
      realm.addListener('change', function () {
        const realmConsume = realm.objects('Consume');
        setConsume(realmConsume);
      });
    }
  }, []);

  //Mostrar os dados na tela
  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const result = await getConsume()
      if (result?.length > 0) {
        result.map(item => {
          return createConsume(realm, item, true)
        })
      }
    }
  }, []);

  //Copiado de cadastrar Produto
  useEffect(async () => {
    const realm = await initRealm()
    if (realm) {
      const product = realm.objects("Products")
      setProducts(product)
    }
  }, []);

  async function createConsume(realm, item, isGet = false) {
    console.log("\n--------------------- Dados Back-End ---------------------------", item)
    let consume = null
    const id_consume = uuid.v4()
    //Pegar os dados do state se for salvar local, ou de item, se for salvar o que vem do back
    const data_item = {
      amount_consumed: item?.amount_consumed || quantity,
      pku_consumed: parseFloat(quantityprotein * 0.05),
      user_id: item?.user_id,
      date: new Date().getTime()
    }
    console.log("\n----------------- Pegar os dados salvos do state (se for salvar local) / Ou de item (se for salvar no back)  ---------------------", data_item)
    //if(!realm.objects("Consume").find(item.id)){
    try {
      await realm.write(() => {
        consume = realm.create("Consume", {
          _id: id_consume,
          user_id: 1,
          date: data_item.date,
          amount_consumed: parseFloat(quantity),
          product_id: "1",
          pku_consumed: parseFloat(quantityprotein * 0.05)
        });
      });
      if (!isGet) {
        postConsume(id_product, consume) //Não vai gravar de volta no back
      }
      console.log("\n---------------------- Dados local  ---------------------------\n", consume)
    } catch (e) {
      console.log(e)
    }
    //}
  }

  async function handleSave() {
    const realm = await initRealm()
    await createConsume(realm, null, false)
    //postConsume()
  }


  return (
    //<Scroll>
    <Container>
      <Txt>Consumo diário</Txt>
      <Picker
        selectedValue={productSelected}
        onValueChange={(itemValue, itemIndex) =>
          setProductSelected(itemValue)
        }>
        {products.map(item => <Picker.Item label="teste" value="teste" />)}
      </Picker>
      <Txt>{productSelected}</Txt>
      <Txt>{products.length}</Txt>
      <Inputs
        placeholder="Nome do Produto"
        value={nameproduct}
        onChangeText={a => setNameProduct(a)}>
        {/* {consume.map(item => <Txt_input>{item.name_product}</Txt_input>)} */}
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Gramas do Produto consumido"
        value={quantity}
        onChangeText={q => setQuantity(q)}>
      </Inputs>
      <Inputs
        keyboardType="numeric"
        placeholder="Proteina"
        value={quantityprotein}
        onChangeText={w => setQuantityProtein(w)}>
      </Inputs>
      <Button onPress={() => navigation.navigate('CadastrarProduto')}>
        <TxtButton> Tela Cadastrar Produto </TxtButton>
      </Button>
      <Button onPress={() => handleSave()}>
        <TxtButton>Salvar</TxtButton>
      </Button>
      <Risco />
      <Txt_input>
        Nome do Produto: {consume.map(item => <Txt_input>{item.name} // </Txt_input>)}
      </Txt_input>
      <Txt_input>
        Quantidade do Produto: {consume.map(item => <Txt_input>{item.amount_consumed} // </Txt_input>)}
      </Txt_input>
      <Txt_input>
        Proteina: {consume.map(item => <Txt_input>{item.protein} // </Txt_input>)}
      </Txt_input>
      <Txt_input>
        Fenilalanina total: {consume.map(item => <Txt_input>{item.pku_consumed} // </Txt_input>)}
      </Txt_input>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>
    //</Scroll>
  )
}

export default Home;