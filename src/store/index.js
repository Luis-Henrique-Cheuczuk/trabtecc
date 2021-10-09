import Realm from "realm";
import ProductSchema from "../screensRealm/TaskList.realm";
import CreateProductSchema from "../screensRealm/CreateProduct"

async function initRealm() {
    return await Realm.open({
        path: "myrealm",
        schema: [ProductSchema, CreateProductSchema]
    });
    /* Realm.close() */
}

export default initRealm ;