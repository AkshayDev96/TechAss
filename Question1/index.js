const api = require('axios')

const getList = async ()=>{
   const data = await api.get('https://coderbyte.com/api/challenges/json/json-cleaning')
   let objData = data?.data
   if(objData){
    Object.keys(objData).forEach((key)=>{
        //iterating each field one by one
        if(typeof objData[key]=='object'){
            if(objData[key]?.length>0){
                //validate the array
                 let tmp = []
                objData[key].forEach((val,i)=>{
                    if(val!='-'){
                        tmp.push(val)
                    }
                })
                objData[key] = tmp
            }else{
                //validate the object value
                Object.keys(objData[key]).forEach((obj)=>{
                    if(!objData[key][obj] || objData[key][obj]=='N/A'){
                        delete objData[key][obj]
                    }
                })
            }
        }else if(typeof objData[key]=='string'){
            //validate the string value
            if(!objData[key] || objData[key]=='N/A' || objData[key]=='-'){
                delete objData[key]
            }
        }
    })
    console.log(objData)
    return objData
   }
}
//call
getList()



