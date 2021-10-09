import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Input, Txt, Button, TxtButton } from '../Login/styles';

/* import Realm from "realm";
import ProductSchema from "./TaskList.realm";
 */
const CadastrarProduto = ({ navigation }) => {

  /*   const ProductSchema = () => {
      name: "Task",
      properties: {
        _id: "int",
        name_product: "string",
        manufacturer_product: "string",
        unity_product: "string"
        protein_total: "float",
        phenylalanine_total : "float"
      },
      primaryKey: "_id",
  }; */

/*   const createProduct = async () => {
    let product_1 = null
    let product_2 = null
    const realm = await Realm.open({
      path: "myrealm",
      schema: [ProductSchema],
    });
    try {
      realm.write(() => {
        product_1 = realm.create("Task", {
          _id: 100,
          name: "go grocery shopping",
          status: "Open",
        });
        product_2 = realm.create("Task", {
          _id: 200,
          name: "go exercise",
          status: "Open",
        });
      });
    } catch (e) {
      console.log(e)
    }
    const 40 = realm.objects("Task");
    console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);
  }

  useEffect(() => {
    createProduct()
  }); */

  return (
    <Container>
      <Txt>Tela</Txt>
      <Txt>de</Txt>
      <Txt>Cadastro de produto</Txt>
      <Input
        placeholder="Nome do Produto">
      </Input>
      <Input
        placeholder="Fabricante do Produto">
      </Input>
      <Input
        placeholder="Unidade do Produto">
      </Input>
      <Input
        placeholder="Qauntidade de Proteína por porção">
      </Input>
      <Input
        placeholder="Quantidade Total de Fenilalanina">
      </Input>
      <Button onPress={() => navigation.navigate('Home')}>
        <TxtButton>CadastrarProduto Screen -{'>'} Home Screen</TxtButton>
      </Button>
      <StatusBar marginTop={'auto'}></StatusBar>
    </Container>

  )

}

export default CadastrarProduto;