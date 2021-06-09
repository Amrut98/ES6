 //1.Write a class that defines next() method to return next numbeletDibonacci series.The class will have a private attributes 'previousNo' and 'currentNo'.

class fib {
    #previousNo = 1;
    #currentNo = 2;
    next()
    {
        return(this.#previousNo + this.#currentNo);
    }
}
let fibo = new fib();
console.log(fib.next());




// function fibo(num)
// {
//     let previousNo = 0, currentNo = 1;
//     for(let i = 0; i<= num ; i++)
//     {
//         let nextNum= previousNo + currentNo;
//         previousNo = currentNo;
//         currentNo = nextNum;
//         console.log(nextNum);
        
//     }
// }
// fibo(8);