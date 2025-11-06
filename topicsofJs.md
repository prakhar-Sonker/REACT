synchronous js--> jbtk ek kaam complete nhi hoga tbtk dusra kaam shuru nhi hoga mtlb ek ke baad dusra hoga, jb tk ek command complete na ho dusra shuru nhi hoga

asynchronous js --> apne pass 3 kaam krne ek sath hi krne hai
ek sath 3no kaam shuru kiye lekin jis jis ka response aata gya uss uss ka response dete gye mtlb sath me hi 3no kaam start kre pr jo kaam pura hojye wo bta dena bs isme koi order nhi hai

<!-- eg -->
task a- 2sec
task b- 5sec
task c- 15sec
task d- 1sec

to agr ye synchronus js se krenge to max time lgega 23 sec sb kaam krne k liye bcz sequential way me hoga aur jb tk ek kaam khtm nhi hoga tb tk dusra kaam start nhi hoga

async way se--> agr ye task asyn way se start kiye to saare kaam ek sath start krenge aur ye saare kaam 15 sec me kr dega pichle wle se jyada better way e ye kaam kr rha hai 

<!--  -->
agr tum inme se kuch use kre re ho-->
settimeout
setInterval
promises
fetch 
axios
XMLHttpRequest
to yha pe async js use hogi agr ye nhi hai to mtlb sync js use hogi

let say hmare pass ek code hai
console.log(1)
console.log(1)
fetch(api call kr di) ab yha pe ye nhi keh skte ye kitna time legi 1s,2s,4s,7s kitna bhi le sj=kti hai to agr sync js code hai to ye 3rd wle line me ruk jyega jb tk uska response na aajye tb tk wait krega fir aage ka code execute hoga but agr ye async ka code hai to wo sb kaam ek sath start krega wo phle ke 2 krdega uske baad 3rd line bhi chl ri hogi aur jb tk ye execute hogi wo aage ka code bhi run kr rha hoga jaise hi iska response ayega tb wo result dega pr code rukega nhi

callback hmesha yaad rkho ek function hai mtlb jha pe bhi callback likha hua dekho smjh jao yha pr fxn ayega


<!-- js is not asynchronous  -->
jo bhi main stack pr hota hai wo o/p krta hai and jo bhi side stack pr hota hai wo behind the scenes processing kr sakta hai aiur jb uski processing complete ho use main stack mein laa kr chalaya jaa skta hai
main stack mtlb == execution
synchronus code always move to main stack
eg-->
console.log(1)
console.log(2)
console.log(3)
setTimeout(function(){
  console.log(4)
},0)
console.log(5)
o/p--> 1 2 3 5 4  

<!-- single threading and multi threading -->
js agr ek baar me ek kaam kr ri hai to single threaded
aur agr 2 cheeze ek sath chla ri hai to multi threading- concurrency

<!-- callbacks -->
settimeout
setInterval
promises
fetch 
axios - package hota hai
inme se agr kuch bhi likh re ho to async ka code likh re ho ye req ko bhejte hai ye jb complete ho jate hai to uska ans kaha milt hai? ye hote hai bs async code likhne k liye

aur jb wo ans complete hojye fir kaise chalana hai wo inke through

then catch
callbacks
async await

callback hmesha ek fxn hota hai ye tb chlta hai jb async code ka completion ho jata hai
eg-> var ans = fetch(`https:\\google.com`)
console.log(var) aisa nhi kr skte hai bcz wo async code hai side stack me jyega aur sync code line wise chlega and iska ans hme milega nhi aur next line chl jyegi to eroor mil jyegi isliye yha pe call back fxn ka use krenge kii koi bhi agr async code likh re to uske liye callback fxnlikjna pdega

<!-- promises -->
var ans = new promise((res, rej) => {
  if(true){
    return res();
  }
  else {
    return rej();
  }
})

ans  //agr resolve state hai to then chlega nhi to catch chlega
   .then(function(){
    console.log("resolve hogya)
   })
   .catch(function (){
    console.log("reject hogya)
   })

<!-- eg of promises -->
user will ask for a number b/w 0 se 9 and if the number is below 5 resolve if not reject 

var ans = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);
  if(n<5){
    return res();
  }
  else{
    return rej();
  }
})
ans.then(function(){
  console.log("below);
})
   .catch(function(){
  console.log("above);
})


<!-- async/await -->
koi bhi aisa fxn jisme aap async code likhoge , kyunki async code hai to aap promises ka istemaal kr skte hai jb uska ans ayega aapko then lagana pdega us then ko lagane se bchne k liye aap async await ka istemaal kr skte hai

agr aapko async await lagana hai to nearest fxn ke aage async likhdo aur jha se asyncnhronus code likhna start kiya hai wha pr await likh do bs fir hm then lagane se bch jyenge

----> setTimeout and setinterval
jb bbhi aap koi aisi cheez kro jo third party me dependent hai first party aap aur sec party aapka application aur third party jisse hm data la re hai that is third party jo data hm third party se late hai to wha pe hmara application wait krna chaiye uss data ko ane ka fir uske baad hi agli line chlni chaiye agr wo dependent hai aapke data pr to