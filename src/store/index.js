import Realm from "realm";
import ProductSchema from "../screensRealm/Consume";
import ConsumeSchema from "../screensRealm/CreateProduct";

async function initRealm() {
    return await Realm.open({
        path: "myrealm",
        schema: [ProductSchema, ConsumeSchema]
    });
}

export default initRealm ;