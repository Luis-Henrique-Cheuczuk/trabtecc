const CreateProductSchema = {
    name: "Products",
    properties: {
      _id: "int",
      name_product: "string",
      manufacturer_product: "string",
      unity_product: "string",
      protein_total: "float",
      phenylalanine_total : "float"
    },
    primaryKey: "_id",
};

export default CreateProductSchema;