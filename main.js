const input = document.querySelector('.input');

const string = document.getElementById('string');

const columns = document.getElementById('columns');

const submit = document.getElementById('submit');

let inputString = '';

let inputColumns = 0;

let count=0;

let searchString = '';

const rec = (i) => {
  if (i == inputString.length) return [-1, -1];

  let row = parseInt(i / count);

  let j = 0;
  let k = i;

  while (j < searchString.length && k < inputString.length) {
    if (
      row != parseInt(k / count) ||
      inputString[k] != searchString[j]
    )
   {
      break;
    }
    k++;
    j++;
  }

  if (j == searchString.length) return [i, 0];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length) {
    if (inputString[k] != searchString[j]) break;
    k = k+count + 1;
    j++;
  }

  if (j == searchString.length) return [i, 1];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length) {
    if (inputString[k] != searchString[j]) break;
    k = k+count;
    j++;
  }

  if (j == searchString.length) return [i, 2];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length) {
    if (inputString[k] != searchString[j]) break;
    k = k+count - 1;
    j++;
  }

  if (j == searchString.length) return [i, 3];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length && k > 0) {
    if (inputString[k] != searchString[j]) break;
    k--;
    j++;
  }

  if (j == searchString.length) return [i, 4];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length && k > 0) {
    if (inputString[k] != searchString[j]) break;
    k = k-(count + 1);
    j++;
  }

  if (j == searchString.length) return [i, 5];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length && k > 0) {
    if (inputString[k] != searchString[j]) break;
    k = k- count;
    j++;
  }

  if (j == searchString.length) return [i, 6];

  j = 0;
  k = i;

  while (j < searchString.length && k < inputString.length && k > 0) {
    if (inputString[k] != searchString[j]) break;
    k = k-(count - 1);
    j++;
  }

  if (j == searchString.length) return [i, 7];

  return rec(i + 1);
};

const find = () => {
  if (searchString.length == 0) {
    alert('Enter valid search string');
  } else {
    let child = document.querySelector('.child').firstElementChild;
    while (child != null) {
      child.style.backgroundColor = 'rgb(50,51,50)';
      child = child.nextElementSibling;
    }

    const arr = rec(0);

    if (arr[0] == -1) alert('String not Found');

    child = document.querySelector('.child').firstElementChild;
    let i = 0;

    while (i < arr[0]) {
      i++;
      child = child.nextElementSibling;
    }

    if (arr[0] != -1) {
      child.style.backgroundColor = 'rgb(0,128,128)';
      
      let j=1,k=i;

      if(arr[1]==0)
      {
         k=i+1;
         i++;
         while(j<searchString.length&&child.nextElementSibling)
         {
            child = child.nextElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k++;
              j++;
            }
            i++;
         }
      }
      else if(arr[1]==1)
      {
        k+=count+1;
        i++;
         while(j<searchString.length&&child.nextElementSibling)
         {
            child = child.nextElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k+=count+1;
              j++;
            }
            i++;
         }
      }
      else if(arr[1]==2)
      {
         k+=count;
         i++;
         while(j<searchString.length&&child.nextElementSibling)
         {
            child = child.nextElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k+=count;
              j++;
            }
            i++;
         }
      }
      else if(arr[1]==3)
      {
        k+=count-1;
        i++;
         while(j<searchString.length&&child.nextElementSibling)
         {
            child = child.nextElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k+=count-1;
              j++;
            }
            i++;
         }
      }
      else if(arr[1]==4)
      {
         k=i-1;
         i--;
         while(j<searchString.length&&child.previousElementSibling)
         {
            child = child.previousElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k--;
              j++;
            }
            i--;
         }
      }
      else if(arr[1]==5)
      {
         k-=count+1;
         i--;
         while(j<searchString.length&&child.previousElementSibling)
         {
            child = child.previousElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k-=count+1;
              j++;
            }
            i--;
         }
      }
      else if(arr[1]==6)
      {
        k-=count;
        i--;
         while(j<searchString.length&&child.previousElementSibling)
         {
            child = child.previousElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k-=count;
              j++;
            }
            i--;
         }
      }
      else
      {
         k-=count-1;
         i--;
         while(j<searchString.length&&child.previousElementSibling)
         {
            child = child.previousElementSibling;
            if(k==i){
              child.style.backgroundColor = 'rgb(0,128,128)';
              k-=count-1;
              j++;
            }
            i--;
         }
      }
    }
  }
};

string.addEventListener('change', (e) => {
  inputString = e.target.value;
  console.log(inputString);
});

columns.addEventListener('change', (e) => {
  inputColumns = e.target.value;
  count=parseInt(inputColumns);
  console.log(inputColumns);
});

submit.addEventListener('click', () => {
  if (inputString.length % inputColumns != 0) {
    alert('Give valid String and Columns');
  } else {
    input.style.display = 'none';
    const width =
      parseInt(inputColumns) * 30 + (parseInt(inputColumns) + 1) * 4;
    console.log(width);
    const parent = document.createElement('div');
    const children = document.createElement('div');
    parent.style.display = 'inline-flex';
    parent.style.margin = 'auto';
    children.style.display = 'flex';
    children.style.width = width + 'px';
    children.style.flexWrap = 'wrap';
    children.style.margin = '1em ';
    children.className = 'child';

    for (let i = 0; i < inputString.length; i++) {
      const child = document.createElement('div');
      child.textContent = inputString[i];
      child.style.display = 'flex';
      child.style.justifyContent = 'center';
      child.style.alignItems = 'center';
      child.style.width = '30px';
      child.style.height = '30px';
      child.style.backgroundColor = 'rgb(50,51,50)';
      child.style.color = 'white';
      child.style.fontWeight = '600';
      child.style.borderWidth = '2px';
      child.style.borderStyle = 'solid';
      child.style.borderColor = 'black';
      children.appendChild(child);
    }

    parent.appendChild(children);

    const Search = document.createElement('div');
    Search.style.display = 'flex';
    Search.style.flexDirection = 'column';
    Search.style.justifyContent = 'center';
    Search.style.alignItems = 'center';

    const search = document.createElement('input');
    const button = document.createElement('button');
    button.style.width = '50%';
    button.style.padding = '0.5em';
    button.textContent = 'Search';
    button.style.backgroundColor = 'rgb(0,128,128)';
    button.style.color = 'white';
    button.style.border = 'none';
    search.style.margin = '1em';
    search.style.padding = '0.5em';
    search.placeholder = 'Enter the string';
    search.style.width = '75%';
    search.style.fontSize = '20px';
    search.style.borderWidth = '3px';
    search.style.borderColor = 'rgb(0,128,128)';

    search.addEventListener('change', (e) => {
      searchString = e.target.value;
      console.log(searchString);
    });

    button.addEventListener('click', find);

    Search.appendChild(search);
    Search.appendChild(button);
    parent.appendChild(Search);
    const container = document.querySelector('.container');
    container.appendChild(parent);
  }
});
