import _ from 'lodash';
// import printMe from './print.js';
import Print from './print';
// import './style.css';
// import Icon from './test.jpeg';
// import Data from './data.xml';
// import Notes from './data.csv';

// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  // const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  element.appendChild(btn);
  // element.classList.add('hello');

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  // console.log(Data);
  // console.log(Notes);

  return element;
}

function getComponent() {
  const element = document.createElement('div');
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

document.body.appendChild(component());

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });