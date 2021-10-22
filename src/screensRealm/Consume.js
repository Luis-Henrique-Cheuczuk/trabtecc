const ProductSchema = {//criar uma tabela de consumo: 
  //id_produto, user_id, amount_consumed, date = new Date() (converter pra timestamp, ver se o back recebe)
    name: "Consume",
    properties: {
      _id: "string",
      user_id: "double",
      product_id: "string",
      amount_consumed: "double",
      date: /*"new Date()"*/ "date",
      pku_consumed : "double"
    },
    primaryKey: "_id",
};

export default ProductSchema;