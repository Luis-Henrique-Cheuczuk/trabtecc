const CreateProductSchema = {
    name: "Products",
    properties: {
      _id: "int",
      names_product: "string",
      manufacturer_product: "string",
      unity_product: "double",
      protein_total: "double",
      phenylalanine_totals: "double"
    },
    primaryKey: "_id",
};

export default CreateProductSchema;