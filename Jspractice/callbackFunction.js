// Icecream production

let stocks = {

    fruits : ['strwabeery', 'grapes', 'banana'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings :['chocolate', 'peanuts']
}

const order = (fruit_name, call_production) => {

    setTimeout(() => {

        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();

    }, 2000);
    
};

let production = () => {

    setTimeout(() => {
        console.log('production has started');
        
        setTimeout(() => {
            console.log('fruits has been chopped');
            
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

                setTimeout(() => {
                    console.log('machine was started');

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added toppings`);

                            setTimeout(() =>{
                                console.log('serve icecream');
                            }), 2000;

                        },3000);
                         
                    }, 2000);

                
            }, 1000);
        }, 1000);


    }, 2000);
}, 0000);

};

order(0, production);

