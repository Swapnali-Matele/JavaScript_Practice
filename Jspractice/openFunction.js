let stocks = {

    fruits : ['strwabeery', 'grapes', 'banana'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings :['chocolate', 'peanuts']
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }else{
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen(){
    try{

        await time(3000);
        console.log(`${stocks.fruits[1]} selected`)

        await time(0000)
        console.log('production has started')
         
        await time(2000)
        console.log('chopped the fruits')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(2000)
        console.log('start the machine')

        await time(3000)
        console.log(`Icecream placed on ${stocks.holder[2]}`)

        await time(2000)
        console.log(`${stocks.toppings[0]} added toppings`)

        await time(0000)
        console.log('icecream is served')
    }
    catch(error){
        console.log('customer left',error)
    }
    finally{
        console.log('The day ended shop is colsed')
    }
}
kitchen();
