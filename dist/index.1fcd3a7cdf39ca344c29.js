(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);

// import printMe from './print.js';

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
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
  element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, 'Hello webpack!');

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
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23))
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

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
// export default function printMe() {
//     console.log('I get called from print.js!');
// }

function print(text) {
    console.log(text);
  };

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDdkI7QUFDNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQixnQ0FBZ0M7O0FBRWhDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7O0FBRWhDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixrREFBTTtBQUM1QixvQkFBb0IsZ0RBQVU7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDZHQUFnQjtBQUN6QixZQUFZLGFBQWE7QUFDekI7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUo7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxJIiwiZmlsZSI6ImluZGV4LjFmY2QzYTdjZGYzOWNhMzQ0YzI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIGltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IFByaW50IGZyb20gJy4vcHJpbnQnO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgSWNvbiBmcm9tICcuL3Rlc3QuanBlZyc7XG4vLyBpbXBvcnQgRGF0YSBmcm9tICcuL2RhdGEueG1sJztcbi8vIGltcG9ydCBOb3RlcyBmcm9tICcuL2RhdGEuY3N2JztcblxuLy8gaW1wb3J0IHRvbWwgZnJvbSAnLi9kYXRhLnRvbWwnO1xuLy8gaW1wb3J0IHlhbWwgZnJvbSAnLi9kYXRhLnlhbWwnO1xuLy8gaW1wb3J0IGpzb24gZnJvbSAnLi9kYXRhLmpzb241JztcblxuLy8gY29uc29sZS5sb2codG9tbC50aXRsZSk7IC8vIG91dHB1dCBgVE9NTCBFeGFtcGxlYFxuLy8gY29uc29sZS5sb2codG9tbC5vd25lci5uYW1lKTsgLy8gb3V0cHV0IGBUb20gUHJlc3Rvbi1XZXJuZXJgXG5cbi8vIGNvbnNvbGUubG9nKHlhbWwudGl0bGUpOyAvLyBvdXRwdXQgYFlBTUwgRXhhbXBsZWBcbi8vIGNvbnNvbGUubG9nKHlhbWwub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG4vLyBjb25zb2xlLmxvZyhqc29uLnRpdGxlKTsgLy8gb3V0cHV0IGBKU09ONSBFeGFtcGxlYFxuLy8gY29uc29sZS5sb2coanNvbi5vd25lci5uYW1lKTsgLy8gb3V0cHV0IGBUb20gUHJlc3Rvbi1XZXJuZXJgXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAvLyBMb2Rhc2gsIGN1cnJlbnRseSBpbmNsdWRlZCB2aWEgYSBzY3JpcHQsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGxpbmUgdG8gd29ya1xuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcblxuICAvLyBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuICAvLyBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG5cbiAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICAvLyBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgLy8gbXlJY29uLnNyYyA9IEljb247XG5cbiAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIC8vIGNvbnNvbGUubG9nKERhdGEpO1xuICAvLyBjb25zb2xlLmxvZyhOb3Rlcyk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXR1cm4gaW1wb3J0KCdsb2Rhc2gnKVxuICAgIC50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tcG9uZW50Jyk7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG4vLyBnZXRDb21wb25lbnQoKS50aGVuKChjb21wb25lbnQpID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuLy8gfSk7IiwiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbi8vICAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9