function generateBilanganGanjil(inputNumber){
  var oddNumber=[]
  for(i=1;i <=inputNumber;i+=2){
    oddNumber.push(i)
  }
  return oddNumber
  return document.getElementById("result").innerHTML= oddNumber;
}

function checkBilanganprima(num){
  if(num <=1){
    return false
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i===0){
      return false
    }
  }
  return true
}

function generateBilanganPrima(start,end){
  var prima=[]
  for(let i=start;i<=end;i++){
    if(checkBilanganprima(i)){
      prima.push(i)
    }
  }
  return prima;
  // return document.getElementById("result").innerHTML= prima;
}

function createTriangle(inputNumber){
  var value="";
  var inputTriangle=inputNumber.toString();
  console.log("INPUT NUMBER",inputTriangle);
  for(let i=1;i<10;i++){
    for(let j=0;j<=i;j++){
      var currentSubstring = inputTriangle.substring(0,i+1);
      var myValue = 0;
      var valueSubstring = currentSubstring.padStart(inputTriangle.length);
      
      // value = valueSubstring;
      // if(valueSubstring % 10){
      //   value = 10
      //   // myValue = 10;
        // console.log(valueSubstring.padStart(inputTriangle.length,"0"))
      // }

      // console.log(currentSubstring.padStart(inputTriangle.length))
      value +='*';
    }
    value +='\n';
  }
  return value
}


function onClickBilanganGanjil(){
  let data = document.getElementById("insertNumber")
  var myData = generateBilanganGanjil(data.value)
  console.log(data.value);
  console.log("data",myData)
  return document.getElementById("result").innerHTML= myData.map((value)=>value)
}

function onClickBilanganPrima(){
  let data = document.getElementById("insertNumber")
  var myData = generateBilanganPrima(0,data.value)
  console.log(data.value);
  console.log("data",myData)
  return document.getElementById("result").innerHTML= myData.map((value)=>value)
}

function onClickCreateTriangle(){
  let data = document.getElementById("insertNumber")
  var myData =createTriangle(data.value)
  console.log(data.value);
  console.log("data",myData)
  return document.getElementById("result").innerHTML= myData
}


// console.log("bilangan ganjil berdasarkan inputan",onClickBilanganGanjil())
// console.log("bilangan prima ", generateBilanganPrima(0,10));
// console.log("create triangle",createTriangle(1345000))
// console.log("bilangan ganjil :",generateBilanganGanjil(10));