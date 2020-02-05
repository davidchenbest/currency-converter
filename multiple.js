let output=document.querySelector('#outAmount');
let base = document.querySelector('#base');
let amount = document.querySelector('#amount');

var input =[];
let counter =0;
allInput = document.querySelectorAll('input');
submit.onclick =function(){
  outAmount.innerHTML='';
  var input =[];
  let counter =0;
  for(i=0; i<allInput.length; i++){
    if(allInput[i].checked == true){
      input[counter]=allInput[i].value;
      console.log(allInput[i].value);
      counter++;
    }
  }

  let api = `https://api.exchangeratesapi.io/latest?base=${base.value}`;
  fetch(api).then(
  response => {
    return response.json();
  }
  )
  .then(data =>{
    for (var i = 0; i < input.length; i++) {
      let rate = data['rates'][input[i]];
      let output = amount.value*rate;
      outAmount.innerHTML += input[i] +': '+ output +'<br>';
    }


  }
  )
};
