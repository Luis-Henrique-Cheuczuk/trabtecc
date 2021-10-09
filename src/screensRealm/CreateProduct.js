const CreateProductSchema = {
    name: "Products",
    properties: {
      _id: "int",
      names_product: "string",
      manufacturer_product: "string",
      unity_product: "string",
      protein_total: "string",
      phenylalanine_totals: "string"
    },
    primaryKey: "_id",
};

export default CreateProductSchema;