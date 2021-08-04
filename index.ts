// Build a Mortgage Claculator using Rxjs and calculateMortgage method

import { fromEvent } from 'rxjs';
import { calculateMortgage } from './calculate';

let loanAmount = 0;
let loanInterest = 0;
let loanLength = 30;

const insertMortgage = () => {
  const mort = calculateMortgage(loanInterest, loanAmount, loanLength);
  if (!Number(mort)) {
    document.getElementById('result').innerText = 'Please specify all fields';
  } else {
    document.getElementById('result').innerText = mort;
  }
};

const subscription1 = fromEvent(
  document.getElementById('loanAmount'),
  'change'
).subscribe(event => {
  loanAmount = event.target.value;
  insertMortgage();
});

const subscription2 = fromEvent(
  document.getElementById('loanInterest'),
  'change'
).subscribe(event => {
  loanInterest = event.target.value;
  insertMortgage();
});

const subscription3 = fromEvent(
  document.getElementById('loanLength'),
  'change'
).subscribe(event => {
  loanLength = event.target.value;
  insertMortgage();
});

