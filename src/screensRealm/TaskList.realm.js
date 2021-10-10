const ProductSchema = {
    name: "ProductsHome",
    properties: {
      _id: "int",
      /* current_date: "date",
      current_time: "", */
      name_product: "string",
      quantity_product: "double",
      protein_total: "double",
      phenylalanine_total : "double"
    },
    primaryKey: "_id",
};

export default ProductSchema;