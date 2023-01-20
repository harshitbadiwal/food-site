

const Api1 ="https://api.edamam.com/api/recipes/v2?type=public&app_id=5036ad1b&app_key=%2073e29c167f5520f94147576a2bb9ba4a&imageSize=SMALL"


export  const Getdata=()=> { const getdata=fetch(Api1).then((res)=>{
    return res.json()
}).then((data)=>{
    // console.log(data)
    return data
})

}