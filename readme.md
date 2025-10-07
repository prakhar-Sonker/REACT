map
hook
async await

step1--> cd 01basicreact
dir in window and ls in mac
npm run start
but we will not use this bcz it is a time taking process so we will use vite

step1--> npm create vite@latest
hmlog vite k through react ka project bnayenge bcz vite ek bundler hai

<!-- agr kisi folder se bhar jana hai to cd .. -->

aur kya run krna hai uske liye package.json me jao aur script dekho kaunsi run krni hai wo likh do jaise vite project run krane k liye package.json m gye aur vite script chalani thi to dev ko run kra diya -- 
npm run dev

public folder--> 
me manifest.json ye file mobile k liye hoti hai jb mobile m webpage wgera view krte hai optional hai
main work hota hai index.html ka public folder m yhi page jo load hoga aur ek hi page hoga isliye spa khte hai -- single page application

src folder in 01basicreact-->
react m jo phle entry point hota hai wo index.js file hoti hai

yha pe 2 librariries leli hai react and reactdom kyunki yhi 2 library kaam ati hai web k dom ko manipulate krne k liye react hmari core foundational lib hai jo ki saare refrences wgera lene ka kamm krti hai
reactdom iska implementation hai web pe react apna khud ka dom bnata hai usko virtual dom bolte hai aur iske baad wo main dom se compare krta hai kitna usse diff hai aur uske baad usko main dom ko sirf whi elements change krte hai jinki jrurat hai sb nhi


<!-- terminal shortcut for vite project -->
  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit