//lets code
let firstInput = document.querySelector(".first");
let secondInput = document.querySelector(".second");
let result = document.querySelector("#result"); 
let error = document.querySelector("#error");

let restBtn = document.querySelector(".rest");
//select all button
let allBtn = document.querySelectorAll(".calc");

// console.log(allBtn[1].innerHTML.value);

function add() {
  let adding = firstInput.value / 1 + secondInput.value / 1;
  result.textContent = adding;
//   console.log(adding)
}
function subtract() {
  let subtract = firstInput.value - secondInput.value;
  result.textContent = subtract;
}
function divide() {
  let divide = firstInput.value / secondInput.value;
  result.textContent = divide;
}
function multiply() {
  let multiply = firstInput.value * secondInput.value;
  result.textContent = multiply; 
}
// 

restBtn.addEventListener("click", restValue);
function restValue() {
  firstInput.value = ' '
  secondInput.value = ' '
  result.textContent = ' '
}   

 for(let i = 0; i <= allBtn.length; i++){
    allBtn[i].addEventListener("click", action)
    function action() {
        if (firstInput.value && secondInput.value  <= 0 ) { 
          error.innerHTML = 'انت هتغفلنى  اكتب رقم ياحبيبى '; 
 
         
            
        }else{ 
          error.innerHTML = ''  
        }
        
        
    } 
  //  if(firstInput.value && secondInput.value  >= 1 ){  
  //     error.innerHTML = 'اكتب الرقم التانى  بقولك ' ;
     
  //   }
 } 
//  console.log(allBtn[2].innerText )
// allBtn.forEach(myFun); 
 
//  function myFun() {
//      console.log('ssdjsdjsd <br>')
 
// };
// allBtn.addEventListener("cli")
// alert('ksj')
