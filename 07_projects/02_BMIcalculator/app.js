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