import api from '../../store/connectionAPI'

async function getConsume(){
    try{
        const result = await api.get("consume")
        return result.data
    }
    catch (e)
    {
        console.log(e)
    }
}

async function postConsume(id, data){

    const newData = {
        id: data.id,
        amount_consumed: data.amount_consumed,
        user_id: data.user_id,
        product_id: data.product_id,
        pku_consumed: data.pku_consumed,
        date: data.date
    }

    try{
        await api.post("consume", newData)
        console.log('OK')
    }
    catch (e)
    {
        console.log(e)
    }
}

export {getConsume, postConsume}