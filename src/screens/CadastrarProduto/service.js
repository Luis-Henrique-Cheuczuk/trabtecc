import api from '../../store/connectionAPI'

async function getProducts(){
    try{
        const result = await api.get("products")
        return result.data
    }
    catch (e)
    {
        console.log(e)
    }
}

async function postProducts(id, data){

    const newData = {
        id: data.id,
        name: data.name,
        brand: data.brand,
        serving_size: data.serving_size,
        protein: data.protein
    }

    try{
        await api.post("products", newData)
        console.log('OK')
    }
    catch (e)
    {
        console.log(e)
    }
}

export {getProducts, postProducts}