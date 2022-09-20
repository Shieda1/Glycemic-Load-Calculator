// https://www.omnicalculator.com/health/glycemic-load

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const glycemicloadRadio = document.getElementById('glycemicloadRadio');
const glycemicindexRadio = document.getElementById('glycemicindexRadio');
const carbsintheportionRadio = document.getElementById('carbsintheportionRadio');

let glycemicload;
let glycemicindex = v1;
let carbsintheportion = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

glycemicloadRadio.addEventListener('click', function() {
  variable1.textContent = 'Glycemic index';
  variable2.textContent = 'Carbs in the portion';
  glycemicindex = v1;
  carbsintheportion = v2;
  result.textContent = '';
});

glycemicindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Glycemic load';
  variable2.textContent = 'Carbs in the portion';
  glycemicload = v1;
  carbsintheportion = v2;
  result.textContent = '';
});

carbsintheportionRadio.addEventListener('click', function() {
  variable1.textContent = 'Glycemic load';
  variable2.textContent = 'Glycemic index';
  glycemicload = v1;
  glycemicindex = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(glycemicloadRadio.checked)
    result.textContent = `Glycemic load = ${computeglycemicload().toFixed(2)}`;

  else if(glycemicindexRadio.checked)
    result.textContent = `Glycemic index = ${computeglycemicindex().toFixed(2)}`;

  else if(carbsintheportionRadio.checked)
    result.textContent = `Carbs in the portion = ${computecarbsintheportion().toFixed(2)}`;
})

// calculation

function computeglycemicload() {
  return (Number(glycemicindex.value) * Number(carbsintheportion.value)) / 100;
}

function computeglycemicindex() {
  return (Number(glycemicload.value) * 100) / Number(carbsintheportion.value);
}

function computecarbsintheportion() {
  return (Number(glycemicload.value) * 100) / Number(glycemicindex.value);
}