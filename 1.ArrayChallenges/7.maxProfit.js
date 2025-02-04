/*
    Your job is to find the biggest profit you could make
    by buying low and selling hight 'only once'.

    A list of stock prices for each day -> [7,1,5,3,6,4]

    What you need to find:
    The difference between the cheapest price you could
    have bought the stock and the most expensive price
    you could have sold it later on.
*/
/*
    wrong way of doing it! :( 
    but learned new way of sorting array :)

const stock = [7,1,5,3,6,4]

function sortStock(a,b){
    // returns 1 if the first argument preceed the second
    // returns -1 if the second argument preceed the first
    // returns 0 if they are equals
    return a > b ? 1 : b > a ? -1 : 0;
}

// sort(with the function)
stock.sort(sortStock)
const cheapest = stock[0]
const expensive = stock.slice(-1)
const profit = (+cheapest) - (+expensive)

console.log(`Stock: ${stock}`);
console.log(`Most Cheap: ${cheapest}`);
console.log(`Most expensive: ${expensive}`);
console.log(`Profit: ${profit}`);

*/
// X COURSE SOLUTION X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;
    
        for(let i = 1; i < prices.length; i++){      
            const currentPrice = prices[i];

            // update minimum price if the lower price is found
            minPrice = Math.min(minPrice, currentPrice);
            //console.log(minPrice);

            const potentialProfit = currentPrice - minPrice;
            maxProfit = Math.max(maxProfit, potentialProfit);
        }

        return maxProfit
}

const prices = [7,1,5,3,6,4];
const profit = maxProfit(prices);
console.log('maximum profit: ', profit);
