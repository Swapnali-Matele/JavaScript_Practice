let stocks = {

    fruits : ['strwabeery', 'grapes', 'banana'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings :['chocolate', 'peanuts']
}

let is_shop_open = true;

let topping_choice = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (is_shop_open){
            resolve(console.log('which topping would you love'));}
            else {
                reject(console.log('Sorry,shop is not open'));
            }
        
        }, 2000);
    });
};

async function kitchen(){

    console.log('A');
    console.log('B');
    console.log('C');

    await topping_choice();

    console.log('D');
    console.log('E');
}

kitchen();

console.log('cleaning the dishes')
console.log('book the order')
console.log('cleaning the table and floor')