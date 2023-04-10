// Code your solutions in this file
function writeCards(gifts,name){
    const thankArray=[];
    for(let i=0;i<gifts.length;i++){
        thankArray.push(`Thank you, ${gifts[i]}, for the wonderful ${name} gift!`)
    }
    return thankArray;
}
function countDown(number){
    
    while (number >= 0) {
        console.log(number--);
      }
}