# Projects related to DOM

## project link
[Click here](https://dom-project-chaiaurcode-r668efx8.stackblitz.io/1-colorChanger/index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = {E.TARGET.ID} ;
    // }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
    const p = document.createElement('p');

    // if (bmi < 18.6) {
    //   p.innerHTML = 'The person is Under weight';
    // } else if (18.6 <= bmi <= 24.9) {
    //   p.innerHTML = 'The person is in Normal range';
    // } else {
    //   p.innerHTML = 'The person is Over weight';
    // }

    // ChatGPT code -->>
    let category = '';

    if (bmi < 18.5) {
      category = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'You are in the normal weight range.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'You are overweight.';
    } else {
      category = 'You are obese.';
    }

    results.innerHTML = `<span>Your BMI is ${bmi}. ${category}</span>`;
  }
});
```

## project 3 solution

```javascript
const clock = document.getElementById('clock');
// const clock document.querySelector('#clock')



setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();

},1000)
```

## project 4 solution

```javascript
```