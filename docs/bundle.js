/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_GameOverScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/GameOverScene */ \"./src/scenes/GameOverScene.js\");\n/* harmony import */ var _scenes_MainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/MainScene */ \"./src/scenes/MainScene.js\");\n/* harmony import */ var _scenes_MainMenuScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/MainMenuScene */ \"./src/scenes/MainMenuScene.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.WEBGL,\n  width: 480,\n  height: 640,\n  backgroundColor: \"black\",\n  scale: {\n    mode: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scale.FIT,\n    autoCenter: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scale.CENTER_BOTH\n  },\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      gravity: {\n        x: 0,\n        y: 0\n      }\n    }\n  },\n  scene: [_scenes_MainMenuScene__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_MainScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_GameOverScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\n  pixelArt: true,\n  roundPixels: true\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/entities/CarrierShip.js":
/*!*************************************!*\
  !*** ./src/entities/CarrierShip.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar CarrierShip =\n/*#__PURE__*/\nfunction (_Ship) {\n  _inherits(CarrierShip, _Ship);\n\n  function CarrierShip(scene, x, y) {\n    var _this;\n\n    _classCallCheck(this, CarrierShip);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarrierShip).call(this, scene, x, y, 'sprEnemy2', 'CarrierShip'));\n\n    _this.play('sprEnemy2');\n\n    _this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(150, 300);\n    return _this;\n  }\n\n  return CarrierShip;\n}(_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarrierShip);\n\n//# sourceURL=webpack:///./src/entities/CarrierShip.js?");

/***/ }),

/***/ "./src/entities/ChaserShip.js":
/*!************************************!*\
  !*** ./src/entities/ChaserShip.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ChaserShip =\n/*#__PURE__*/\nfunction (_Ship) {\n  _inherits(ChaserShip, _Ship);\n\n  function ChaserShip(scene, x, y) {\n    var _this;\n\n    _classCallCheck(this, ChaserShip);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChaserShip).call(this, scene, x, y, 'sprEnemy1', 'ChaserShip'));\n    _this.states = {\n      MOVE_DOWN: 'MOVE_DOWN',\n      CHASE: 'CHASE'\n    };\n    _this.state = _this.states.MOVE_DOWN;\n    return _this;\n  }\n\n  _createClass(ChaserShip, [{\n    key: \"update\",\n    value: function update() {\n      var canChase = !this.getData('isDead') && !this.scene.player.getData('isDead');\n\n      if (canChase && phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y) < 300) {\n        this.state = this.states.CHASE;\n      } else {\n        this.state = this.states.MOVE_DOWN;\n      }\n\n      if (this.state === this.states.CHASE) {\n        var dx = this.scene.player.x - this.x;\n        var dy = this.scene.player.y - this.y; // angle between positive x axis and ray from (0,0) to specified point\n        // i.e. the acute angle in the hypothetical triangle used below\n\n        var angle = Math.atan2(dy, dx);\n        var speed = 200;\n        this.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);\n      } else {\n        this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(50, 100);\n        this.body.velocity.x = 0;\n      }\n\n      if (this.x < this.scene.player.x) {\n        this.angle -= 5;\n      } else {\n        this.angle += 5;\n      }\n    }\n  }]);\n\n  return ChaserShip;\n}(_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChaserShip);\n\n//# sourceURL=webpack:///./src/entities/ChaserShip.js?");

/***/ }),

/***/ "./src/entities/EnemyLaser.js":
/*!************************************!*\
  !*** ./src/entities/EnemyLaser.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar EnemyLaser =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(EnemyLaser, _Entity);\n\n  function EnemyLaser(scene, x, y) {\n    var _this;\n\n    _classCallCheck(this, EnemyLaser);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(EnemyLaser).call(this, scene, x, y, \"sprLaserEnemy0\"));\n    _this.body.velocity.y = 400;\n    return _this;\n  }\n\n  return EnemyLaser;\n}(_Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemyLaser);\n\n//# sourceURL=webpack:///./src/entities/EnemyLaser.js?");

/***/ }),

/***/ "./src/entities/Entity.js":
/*!********************************!*\
  !*** ./src/entities/Entity.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar Entity =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$S) {\n  _inherits(Entity, _Phaser$GameObjects$S);\n\n  function Entity(scene, x, y, spriteKey, type) {\n    var _this;\n\n    _classCallCheck(this, Entity);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Entity).call(this, scene, x, y, spriteKey));\n    _this.scene = scene;\n\n    _this.scene.add.existing(_assertThisInitialized(_assertThisInitialized(_this)));\n\n    _this.scene.physics.world.enableBody(_assertThisInitialized(_assertThisInitialized(_this)), 0);\n\n    _this.setData('type', type);\n\n    return _this;\n  }\n\n  return Entity;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n//# sourceURL=webpack:///./src/entities/Entity.js?");

/***/ }),

/***/ "./src/entities/Gunship.js":
/*!*********************************!*\
  !*** ./src/entities/Gunship.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n/* harmony import */ var _EnemyLaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnemyLaser */ \"./src/entities/EnemyLaser.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar Gunship =\n/*#__PURE__*/\nfunction (_Ship) {\n  _inherits(Gunship, _Ship);\n\n  function Gunship(scene, x, y) {\n    var _this;\n\n    _classCallCheck(this, Gunship);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gunship).call(this, scene, x, y, 'sprEnemy0', 'Gunship'));\n\n    _this.play('sprEnemy0');\n\n    _this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(50, 100);\n    _this.shootTimer = _this.scene.time.addEvent({\n      delay: 1000,\n      callback: function callback() {\n        var laser = new _EnemyLaser__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.x, this.y);\n        laser.setScale(this.scaleX);\n        this.scene.enemyLasers.add(laser);\n        this.scene.soundEffects.laser.play();\n      },\n      callbackScope: _assertThisInitialized(_assertThisInitialized(_this)),\n      loop: true\n    });\n    return _this;\n  }\n\n  _createClass(Gunship, [{\n    key: \"onDestroy\",\n    value: function onDestroy() {\n      if (this.shootTimer) this.shootTimer.remove();\n    }\n  }]);\n\n  return Gunship;\n}(_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gunship);\n\n//# sourceURL=webpack:///./src/entities/Gunship.js?");

/***/ }),

/***/ "./src/entities/Player.js":
/*!********************************!*\
  !*** ./src/entities/Player.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n/* harmony import */ var _PlayerLaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerLaser */ \"./src/entities/PlayerLaser.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction (_Ship) {\n  _inherits(Player, _Ship);\n\n  function Player(scene, x, y, spriteKey) {\n    var _this;\n\n    _classCallCheck(this, Player);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, scene, x, y, spriteKey, 'Player'));\n\n    _this.setData(\"speed\", 200);\n\n    _this.setData(\"isShootCoolingDown\", false);\n\n    _this.shootCooldownTimer = null;\n\n    _this.play(\"sprPlayer\");\n\n    return _this;\n  }\n\n  _createClass(Player, [{\n    key: \"moveUp\",\n    value: function moveUp() {\n      this.body.velocity.y = 0 - this.getData('speed');\n    }\n  }, {\n    key: \"moveDown\",\n    value: function moveDown() {\n      this.body.velocity.y = this.getData('speed');\n    }\n  }, {\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      this.body.velocity.x = 0 - this.getData('speed');\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      this.body.velocity.x = this.getData('speed');\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // stop player if movement keys not being pressed\n      this.body.setVelocity(0, 0); // constrain player to world dimensions\n\n      this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);\n      this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height); // emit lasers if player is shooting\n\n      if (this.getData('isShooting') && !this.getData('isShootCoolingDown')) {\n        this.scene.playerLasers.add(new _PlayerLaser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.x, this.y));\n        this.scene.soundEffects.playerLaser.play();\n        this.setData('isShootCoolingDown', true);\n        this.shootCooldownTimer = this.scene.time.addEvent({\n          delay: 100,\n          callback: function callback() {\n            this.setData('isShootCoolingDown', false);\n          },\n          callbackScope: this,\n          loop: false\n        });\n      }\n    }\n  }]);\n\n  return Player;\n}(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/entities/Player.js?");

/***/ }),

/***/ "./src/entities/PlayerLaser.js":
/*!*************************************!*\
  !*** ./src/entities/PlayerLaser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar PlayerLaser =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(PlayerLaser, _Entity);\n\n  function PlayerLaser(scene, x, y) {\n    var _this;\n\n    _classCallCheck(this, PlayerLaser);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayerLaser).call(this, scene, x, y, \"sprLaserPlayer\"));\n    _this.body.velocity.y = -400;\n    return _this;\n  }\n\n  return PlayerLaser;\n}(_Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerLaser);\n\n//# sourceURL=webpack:///./src/entities/PlayerLaser.js?");

/***/ }),

/***/ "./src/entities/Ship.js":
/*!******************************!*\
  !*** ./src/entities/Ship.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Ship =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Ship, _Entity);\n\n  function Ship(scene, x, y, spriteKey, type) {\n    var _this;\n\n    _classCallCheck(this, Ship);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ship).call(this, scene, x, y, spriteKey));\n\n    _this.setData('isDead', false);\n\n    return _this;\n  }\n\n  _createClass(Ship, [{\n    key: \"explode\",\n    value: function explode() {\n      var _this2 = this;\n\n      if (!this.getData('isDead')) {\n        this.setTexture('sprExplosion');\n        this.play('sprExplosion');\n        this.scene.soundEffects.explosions[phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.scene.soundEffects.explosions.length - 1)].play();\n        if (this.onDestroy) this.onDestroy();\n        this.setAngle(0);\n        this.body.setVelocity(0, 0);\n        this.on('animationComplete', function () {\n          _this2.destroy();\n        });\n        this.setData('isDead', true);\n      }\n    }\n  }]);\n\n  return Ship;\n}(_Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/entities/Ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game);\n\nnew Game();\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/props/ScrollingBackground.js":
/*!******************************************!*\
  !*** ./src/props/ScrollingBackground.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ScrollingBackground =\n/*#__PURE__*/\nfunction () {\n  function ScrollingBackground(scene, spriteKey, velocityY, offsetX, offsetY) {\n    _classCallCheck(this, ScrollingBackground);\n\n    this.scene = scene;\n    this.spriteKey = spriteKey;\n    this.velocityY = velocityY;\n    this.offsetX = offsetX;\n    this.offsetY = offsetY;\n    this.tiles = this.scene.add.group();\n    this.createTiles();\n  }\n\n  _createClass(ScrollingBackground, [{\n    key: \"createTiles\",\n    value: function createTiles() {\n      for (var i = 0; i < 2; i++) {\n        var tile = this.scene.add.sprite(0, 0, this.spriteKey);\n        tile.setDepth(i - 1);\n        tile.setScale(2, 2);\n        tile.y = 0 - tile.displayHeight * i + this.offsetY;\n        tile.x = 0 + this.offsetX;\n        this.scene.physics.world.enableBody(tile, 0); // 0 means static body\n\n        tile.body.velocity.y = this.velocityY;\n        this.tiles.add(tile);\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var threshold = this.scene.physics.world.bounds.height;\n      var tiles = this.tiles.children.getArray();\n      var tileOverThreshold = tiles.find(function (t) {\n        return t.y >= threshold * 2;\n      });\n\n      if (tileOverThreshold != null) {\n        var tileNotOverThreshold = tiles.find(function (t) {\n          return t !== tileOverThreshold;\n        });\n        tileOverThreshold.y = tileNotOverThreshold.y - tileNotOverThreshold.displayHeight;\n      }\n    }\n  }]);\n\n  return ScrollingBackground;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingBackground);\n\n//# sourceURL=webpack:///./src/props/ScrollingBackground.js?");

/***/ }),

/***/ "./src/sceneHelpers/createScrollingBackground.js":
/*!*******************************************************!*\
  !*** ./src/sceneHelpers/createScrollingBackground.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props_ScrollingBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props/ScrollingBackground */ \"./src/props/ScrollingBackground.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (scene, backgrounds) {\n  for (var i = 0; i < 5; i++) {\n    // create five scrolling backgrounds\n    var bg = new _props_ScrollingBackground__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, \"sprBg0\", 10 * i, // each successive background layer moves faster than the last\n    // x and y offsets to prevent jarring appearance on animation start\n    (i % 2 === 0 ? 5 : -5) * i, (i % 2 === 0 ? 10 : -10) * i);\n    backgrounds.push(bg);\n  }\n});\n\n//# sourceURL=webpack:///./src/sceneHelpers/createScrollingBackground.js?");

/***/ }),

/***/ "./src/scenes/GameOverScene.js":
/*!*************************************!*\
  !*** ./src/scenes/GameOverScene.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar GameOverScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(GameOverScene, _Phaser$Scene);\n\n  function GameOverScene() {\n    var _this;\n\n    _classCallCheck(this, GameOverScene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameOverScene).call(this, {\n      key: \"GameOverScene\"\n    }));\n    _this.soundEffects = {\n      btnOver: null,\n      btnDown: null\n    };\n    _this.btnRestart = null;\n    _this.gameOverText = null;\n    return _this;\n  }\n\n  _createClass(GameOverScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('sprBg0', 'assets/images/sprBg0.png');\n      this.load.image('sprBg1', 'assets/images/sprBg1.png');\n      this.load.image(\"sprBtnRestart\", \"assets/images/sprBtnRestart.png\");\n      this.load.image(\"sprBtnRestartHover\", \"assets/images/sprBtnRestartHover.png\");\n      this.load.image(\"sprBtnRestartDown\", \"assets/images/sprBtnRestartDown.png\");\n      this.load.audio(\"sndBtnOver\", \"assets/audio/sndBtnOver.wav\");\n      this.load.audio(\"sndBtnDown\", \"assets/audio/sndBtnDown.wav\");\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.soundEffects.btnOver = this.sound.add(\"sndBtnOver\");\n      this.soundEffects.btnDown = this.sound.add(\"sndBtnDown\");\n      this.createGameOverText();\n      this.createRestartButton();\n      this.backgrounds = [];\n      Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, this.backgrounds);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.backgrounds.forEach(function (e) {\n        return e.update();\n      });\n    }\n  }, {\n    key: \"createGameOverText\",\n    value: function createGameOverText() {\n      this.gameOverText = this.add.text(this.game.config.width * 0.5, 128, \"GAME OVER\", {\n        fontFamily: 'monospace',\n        fontSize: 48,\n        fontStyle: 'bold',\n        color: '#ffffff',\n        align: 'center'\n      });\n      this.gameOverText.setOrigin(0.5);\n    }\n  }, {\n    key: \"createRestartButton\",\n    value: function createRestartButton() {\n      var _this2 = this;\n\n      this.btnRestart = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, \"sprBtnRestart\");\n      this.btnRestart.setInteractive();\n      this.btnRestart.on(\"pointerover\", function () {\n        _this2.btnRestart.setTexture(\"sprBtnRestartHover\");\n\n        _this2.soundEffects.btnOver.play();\n      });\n      this.btnRestart.on(\"pointerout\", function () {\n        _this2.btnRestart.setTexture(\"sprBtnRestart\");\n      });\n      this.btnRestart.on(\"pointerdown\", function () {\n        _this2.btnRestart.setTexture(\"sprBtnRestartDown\");\n      });\n      this.btnRestart.on(\"pointerup\", function () {\n        _this2.btnRestart.setTexture(\"sprBtnRestartHover\");\n\n        _this2.scene.start('MainScene');\n      });\n    }\n  }]);\n\n  return GameOverScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOverScene);\n\n//# sourceURL=webpack:///./src/scenes/GameOverScene.js?");

/***/ }),

/***/ "./src/scenes/MainMenuScene.js":
/*!*************************************!*\
  !*** ./src/scenes/MainMenuScene.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar MainMenuScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(MainMenuScene, _Phaser$Scene);\n\n  function MainMenuScene() {\n    var _this;\n\n    _classCallCheck(this, MainMenuScene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenuScene).call(this, {\n      key: 'MainMenuScene'\n    }));\n    _this.soundEffects = {\n      btnOver: null,\n      btnDown: null\n    };\n    _this.btnPlay = null;\n    _this.title = null;\n    _this.backgrounds = [];\n    return _this;\n  }\n\n  _createClass(MainMenuScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('sprBg0', 'assets/images/sprBg0.png');\n      this.load.image('sprBg1', 'assets/images/sprBg1.png');\n      this.load.image(\"sprBtnPlay\", \"assets/images/sprBtnPlay.png\");\n      this.load.image(\"sprBtnPlayHover\", \"assets/images/sprBtnPlayHover.png\");\n      this.load.image(\"sprBtnPlayDown\", \"assets/images/sprBtnPlayDown.png\");\n      this.load.audio(\"sndBtnOver\", \"assets/audio/sndBtnOver.wav\");\n      this.load.audio(\"sndBtnDown\", \"assets/audio/sndBtnDown.wav\");\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.soundEffects.btnOver = this.sound.add(\"sndBtnOver\");\n      this.soundEffects.btnDown = this.sound.add(\"sndBtnDown\");\n      this.createTitle();\n      this.createStartButton();\n      Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, this.backgrounds);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.backgrounds.forEach(function (e) {\n        return e.update();\n      });\n    }\n  }, {\n    key: \"createTitle\",\n    value: function createTitle() {\n      this.title = this.add.text(this.game.config.width * 0.5, 128, \"UNREASONABLY DIFFICULT SPACE SHOOTER\", _defineProperty({\n        fontFamily: 'monospace',\n        fontSize: 48,\n        fontStyle: 'bold',\n        color: '#ffffff',\n        align: 'center',\n        wordWrap: true\n      }, \"wordWrap\", {\n        width: this.game.config.width * 0.85\n      }));\n      this.title.setOrigin(0.5);\n    }\n  }, {\n    key: \"createStartButton\",\n    value: function createStartButton() {\n      var _this2 = this;\n\n      this.btnPlay = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, \"sprBtnPlay\");\n      this.btnPlay.setInteractive();\n      this.btnPlay.on(\"pointerover\", function () {\n        _this2.btnPlay.setTexture(\"sprBtnPlayHover\");\n\n        _this2.soundEffects.btnOver.play();\n      });\n      this.btnPlay.on(\"pointerout\", function () {\n        _this2.btnPlay.setTexture(\"sprBtnPlay\");\n      });\n      this.btnPlay.on(\"pointerdown\", function () {\n        _this2.btnPlay.setTexture(\"sprBtnPlayDown\");\n      });\n      this.btnPlay.on(\"pointerup\", function () {\n        _this2.btnPlay.setTexture(\"sprBtnPlayHover\");\n\n        _this2.scene.start('MainScene');\n      });\n    }\n  }]);\n\n  return MainMenuScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainMenuScene);\n\n//# sourceURL=webpack:///./src/scenes/MainMenuScene.js?");

/***/ }),

/***/ "./src/scenes/MainScene.js":
/*!*********************************!*\
  !*** ./src/scenes/MainScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Player */ \"./src/entities/Player.js\");\n/* harmony import */ var _entities_Gunship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Gunship */ \"./src/entities/Gunship.js\");\n/* harmony import */ var _entities_CarrierShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/CarrierShip */ \"./src/entities/CarrierShip.js\");\n/* harmony import */ var _entities_ChaserShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/ChaserShip */ \"./src/entities/ChaserShip.js\");\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar MainScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(MainScene, _Phaser$Scene);\n\n  function MainScene() {\n    var _this;\n\n    _classCallCheck(this, MainScene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainScene).call(this, {\n      key: \"MainScene\"\n    }));\n    _this.soundEffects = {\n      explosions: [],\n      laser: null,\n      playerLaser: null\n    };\n    _this.player = null;\n    _this.keyW = null;\n    _this.keyS = null;\n    _this.keyA = null;\n    _this.keyD = null;\n    _this.keySpace = null;\n    _this.enemies = null;\n    _this.playerLasers = null;\n    _this.enemyLasers = null;\n    _this.backgrounds = null;\n    return _this;\n  }\n\n  _createClass(MainScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('sprBg0', 'assets/images/sprBg0.png');\n      this.load.image('sprBg1', 'assets/images/sprBg1.png');\n      this.load.image('sprEnemy1', 'assets/images/sprEnemy1.png');\n      this.load.image(\"sprLaserEnemy0\", \"assets/images/sprLaserEnemy0.png\");\n      this.load.image(\"sprLaserPlayer\", \"assets/images/sprLaserPlayer.png\");\n      this.load.spritesheet('sprExplosion', 'assets/images/sprExplosion.png', {\n        frameWidth: 32,\n        frameHeight: 32\n      });\n      this.load.spritesheet('sprEnemy0', 'assets/images/sprEnemy0.png', {\n        frameWidth: 16,\n        frameHeight: 16\n      });\n      this.load.spritesheet(\"sprEnemy2\", \"assets/images/sprEnemy2.png\", {\n        frameWidth: 16,\n        frameHeight: 16\n      });\n      this.load.spritesheet(\"sprPlayer\", \"assets/images/sprPlayer.png\", {\n        frameWidth: 16,\n        frameHeight: 16\n      });\n      this.load.audio(\"sndExplode0\", \"assets/audio/sndExplode0.wav\");\n      this.load.audio(\"sndExplode1\", \"assets/audio/sndExplode1.wav\");\n      this.load.audio(\"sndLaser\", \"assets/audio/sndLaser.wav\");\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this2 = this;\n\n      this.anims.create({\n        key: \"sprEnemy0\",\n        frames: this.anims.generateFrameNumbers(\"sprEnemy0\"),\n        frameRate: 20,\n        repeat: -1\n      });\n      this.anims.create({\n        key: \"sprEnemy2\",\n        frames: this.anims.generateFrameNumbers(\"sprEnemy2\"),\n        frameRate: 20,\n        repeat: -1\n      });\n      this.anims.create({\n        key: \"sprExplosion\",\n        frames: this.anims.generateFrameNumbers(\"sprExplosion\"),\n        frameRate: 20,\n        repeat: 0\n      });\n      this.anims.create({\n        key: \"sprPlayer\",\n        frames: this.anims.generateFrameNumbers(\"sprPlayer\"),\n        frameRate: 20,\n        repeat: -1\n      });\n      this.soundEffects.explosions.push(this.sound.add('sndExplode0'));\n      this.soundEffects.explosions.push(this.sound.add('sndExplode1'));\n      this.soundEffects.laser = this.sound.add('sndLaser', {\n        volume: 0.1\n      });\n      this.soundEffects.playerLaser = this.sound.add('sndLaser', {\n        volume: 1\n      });\n      this.player = new _entities_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 1 + this.game.config.width * 0.5, // +1 here as workaround to issue preventing shooting at starting position\n      this.game.config.height * 0.5, 'sprPlayer');\n      this.keyW = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.W);\n      this.keyS = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.S);\n      this.keyA = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.A);\n      this.keyD = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.D);\n      this.keySpace = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE);\n      this.enemies = this.add.group();\n      this.enemyLasers = this.add.group();\n      this.playerLasers = this.add.group();\n      this.physics.add.collider(this.enemies, this.playerLasers, function (enemy, laser) {\n        enemy.explode();\n        laser.destroy();\n      });\n      this.physics.add.collider(this.player, this.enemyLasers, function (player, laser) {\n        _this2.killPlayer();\n\n        laser.destroy();\n      });\n      this.physics.add.overlap(this.player, this.enemies, function (player, enemy) {\n        if (!player.getData(\"isDead\") && !enemy.getData(\"isDead\")) {\n          _this2.killPlayer();\n\n          enemy.explode();\n        }\n      });\n      this.time.addEvent({\n        delay: 350,\n        callbackScope: this,\n        loop: true,\n        callback: this.spawn\n      });\n      this.backgrounds = []; // need this here since ctor is only run once during game execution\n\n      Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, this.backgrounds);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.updatePlayer();\n      this.updateEnvironment();\n    }\n  }, {\n    key: \"killPlayer\",\n    value: function killPlayer() {\n      var _this3 = this;\n\n      this.player.explode();\n      this.time.addEvent({\n        delay: 1000,\n        callbackScope: this,\n        loop: false,\n        callback: function callback() {\n          _this3.scene.start('GameOverScene');\n        }\n      });\n    }\n  }, {\n    key: \"updatePlayer\",\n    value: function updatePlayer() {\n      if (this.player.getData('isDead')) return;\n\n      if (this.keySpace.isDown) {\n        this.player.setData('isShooting', true);\n      } else {\n        this.player.setData('isShooting', false);\n      }\n\n      this.player.update();\n      if (this.keyW.isDown) this.player.moveUp();else if (this.keyA.isDown) this.player.moveLeft();else if (this.keyS.isDown) this.player.moveDown();else if (this.keyD.isDown) this.player.moveRight();\n    }\n  }, {\n    key: \"updateEnvironment\",\n    value: function updateEnvironment() {\n      var _this4 = this;\n\n      var updateEntity = function updateEntity(e) {\n        _this4.updateEntity(e);\n      };\n\n      this.enemies.children.iterate(updateEntity);\n      this.enemyLasers.children.iterate(updateEntity);\n      this.playerLasers.children.iterate(updateEntity);\n      this.backgrounds.forEach(function (e) {\n        e.update();\n      });\n    }\n  }, {\n    key: \"spawn\",\n    value: function spawn() {\n      var roll = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, 10);\n      var newEnemy = null;\n\n      if (roll <= 5) {\n        newEnemy = new _entities_Gunship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n      } else if (roll <= 8) {\n        newEnemy = new _entities_ChaserShip__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n      } else {\n        newEnemy = new _entities_CarrierShip__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n      }\n\n      this.enemies.add(newEnemy);\n    }\n  }, {\n    key: \"updateEntity\",\n    value: function updateEntity(obj) {\n      if (obj && obj.update) {\n        obj.update();\n        this.destroyIfOutOfBounds(obj);\n      }\n    }\n  }, {\n    key: \"destroyIfOutOfBounds\",\n    value: function destroyIfOutOfBounds(obj) {\n      if (!phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.Rectangle.Overlaps(this.physics.world.bounds, obj.getBounds())) {\n        if (obj.onDestroy) obj.onDestroy();\n        obj.destroy();\n      }\n    }\n  }, {\n    key: \"getEnemiesByType\",\n    value: function getEnemiesByType(type) {\n      return this.enemies.children.filter(function (c) {\n        return c.getData('type') === type;\n      });\n    }\n  }]);\n\n  return MainScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScene);\n\n//# sourceURL=webpack:///./src/scenes/MainScene.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ken/code/misc/phaser-shooter-tutorial/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });