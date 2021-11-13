const input = document.querySelector('#input');
const randomYearBtn = document.querySelector('.btn');
const factText = document.querySelector('.fact-text');

// fetched content heading

const contentHeading = () => {
  document.querySelector('.fact-heading').textContent = `Did you know...`;
};

// fetching data

const fetchDataForInput = () => {
  let inputValue = input.value;
  fetch(`http://numbersapi.com/${inputValue}/year`)
    .then(response => {
      return response.text();
    })
    .then(data => {
      if(inputValue != '') {
        contentHeading();
        factText.innerText = data;
      }
    })
    .catch(err => {
      factText.innerText = 'ERROR: Faulty network connection';
    });
};

const fetchDataForRandomYearBtn = () => {
  fetch('http://numbersapi.com/random/year')
    .then(response => {
      return response.text();
    })
    .then(data => {
      contentHeading();
      factText.innerText = data;
    })
    .catch(err => {
      factText.innerText = 'ERROR: Faulty network connection';
    });
};

input.addEventListener('input', fetchDataForInput);
randomYearBtn.addEventListener('click', fetchDataForRandomYearBtn);