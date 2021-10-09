const ProductSchema = {
    name: "ProductsHome",
    properties: {
      _id: "int",
      /* current_date: "date",
      current_time: "", */
      name_product: "string",
      quantity_product: "string",
      weight_total: "string",
      phenylalanine_total : "string"
    },
    primaryKey: "_id",
};

export default ProductSchema;