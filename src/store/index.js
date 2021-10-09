import Realm from "realm";
import ProductSchema from "../screensRealm/TaskList.realm";

async function initRealm() {
    return await Realm.open({
        path: "myrealm",
        schema: [ProductSchema],
    });
    /* Realm.close() */
}

export default initRealm ;