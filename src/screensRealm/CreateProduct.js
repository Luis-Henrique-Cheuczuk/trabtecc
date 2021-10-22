const ConsumeSchema = {
    name: "Products",
    properties: {
      _id: "string",
      name: "string",
      brand: "string",
      serving_size: "double",
      protein: "double",
      pku_consumed: "double"
    },
    primaryKey: "_id",
};

export default ConsumeSchema;