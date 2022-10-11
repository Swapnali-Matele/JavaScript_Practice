let stocks = {

    fruits : ['strwabeery', 'grapes', 'banana'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings :['chocolate', 'peanuts']
}

let is_shop_open = true;

/*let order = ()=>{

    return new Promise((resolve, reject)=>{

        if(true){
            resolve()
        }else{
            reject()
        }
    })
}*/

async function order(){

    try{
         await abc;
    }
    catch(error){
        console.log('abc doesn\'t exist', error)
    }
    finally{

        console.log('finally block exucuted ')
    }
}

order()
.then(()=>{
    console.log('jnduhcuhcncjckc')
})