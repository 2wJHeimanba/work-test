export function func(e){
    let newList=[]
    e.forEach(value=>{
        if(Reflect.has(value.meta,'parent')){
            if(!newList.find(item=>item.id==value.meta.parent.id)){
                value.meta.parent.childrens=[]
                newList.push(value.meta.parent)
            }
        }else{
            newList.push(value)
        }
    });
    newList.map(value=>{
        if(!value.tochange){
            e.forEach(item=>{
                if(Reflect.has(item.meta,'parent')&&item.meta.parent.id==value.id){
                    value.childrens.push({
                        path:item.path,
                        name:item.name,
                        title:item.meta.title,
                    })
                }
            })
        }
    })
    return newList
}