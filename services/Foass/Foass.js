
export default class Foass {
    static async allOperations(){
        response = await fetch("https://foaas.com/operations",{"headers":{"Accept":"application/json"}})
        respjson = await response.json()
        // console.log(respjson)
        return respjson
    }
    static async operation(path,fields){
        for (field in fields){
            path = path.replace(":"+field,fields[field])
        }

        response = await fetch("https://foaas.com" + path.toString(),{"headers":{"Accept":"application/json"}})
        respjson = await response.json()
        // console.log(respjson)
        return respjson
    }
}