// Build a Mortgage Claculator using Rxjs and calculateMortgage method

import { fromEvent } from 'rxjs';
import { calculateMortgage } from './calculate';

let loanAmount = 0;
let loanInterest = 0;
let loanLength = 30;

const insertMortgage = () => {
  const mort = calculateMortgage(loanInterest, loanAmount, loanLength);
  let result = document.getElementById('result').innerText;
  if (!Number(mort)) {
    result = 'Please specify all fields';
  } else {
    result = mort;
  }
};

fromEvent(
  document.getElementById('loanAmount'),
  'change'
).subscribe(event => {
  loanAmount = event.target.value;
  insertMortgage();
});

fromEvent(
  document.getElementById('loanInterest'),
  'change'
).subscribe(event => {
  loanInterest = event.target.value;
  insertMortgage();
});

fromEvent(
  document.getElementById('loanLength'),
  'change'
).subscribe(event => {
  loanLength = event.target.value;
  insertMortgage();
});

