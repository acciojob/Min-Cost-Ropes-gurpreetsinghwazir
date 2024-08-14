function mincost(arr){
let srt = arr.sort((a,b) => a-b);
let jump =[];
let first = srt[0] + srt[1];
jump.push(first);


for (let i = 2; i < arr.length; i++) {
  
  let second = first + srt[i]
   first=second;
   jump.push(second)

}

let sum = 0
for(let i = 0; i<jump.length;i++){
  sum = jump[i] + sum
}

return(sum-1)
	

}

module.exports=mincost;
