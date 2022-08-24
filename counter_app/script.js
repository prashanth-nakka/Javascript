//document.getElementById("count").innerText = 5;
// let count = 0;
//let myAge = 25
// console.log(count);
//console.log(myAge)
// let myAge = 25
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 25
// bonusPoints = bonusPoints + 75
// console.log(bonusPoints)
// function increment(){
//     // console.log("Clicked")
//     let count = 0
//     count = count + 1
//     console.log(count)
// }
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logs(){
//     let totalLaps = lap1 + lap2 + lap3
//     console.log(totalLaps)
// }
// logs()
// let lapsComplete = 0;
// function totalLaps() {
//   lapsComplete = lapsComplete + 1;
// }
// totalLaps();
// totalLaps();
// totalLaps();
// console.log(lapsComplete);

let totalCount = document.getElementById("count");
let p = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  totalCount.innerHTML = count;
  // console.log(count);
}
function decrement() {
  if (count >= 1) {
    count -= 1;
    totalCount.innerHTML = count;
    // console.log(count);
  }
}
function save() {
  let s = count + " - ";
  p.innerHTML += s;
  count = 0
  totalCount.textContent = count
}
function reset() {
  count = 0;
  totalCount.innerHTML = count;
  // console.log(count);
}
