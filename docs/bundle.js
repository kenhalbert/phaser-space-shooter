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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n\n\n\nclass CarrierShip extends _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y, 'sprEnemy2', 'CarrierShip');\n    this.play('sprEnemy2');\n    this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(150, 300);\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarrierShip);\n\n//# sourceURL=webpack:///./src/entities/CarrierShip.js?");

/***/ }),

/***/ "./src/entities/ChaserShip.js":
/*!************************************!*\
  !*** ./src/entities/ChaserShip.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n\n\n\nclass ChaserShip extends _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y, 'sprEnemy1', 'ChaserShip');\n    this.states = {\n      MOVE_DOWN: 'MOVE_DOWN',\n      CHASE: 'CHASE'\n    };\n    this.state = this.states.MOVE_DOWN;\n  }\n\n  update() {\n    const canChase = !this.getData('isDead') && this.scene.player && !this.scene.player.getData('isDead');\n\n    if (canChase && phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y) < 300) {\n      this.state = this.states.CHASE;\n    } else {\n      this.state = this.states.MOVE_DOWN;\n    }\n\n    if (this.state === this.states.CHASE) {\n      const dx = this.scene.player.x - this.x;\n      const dy = this.scene.player.y - this.y; // angle between positive x axis and ray from (0,0) to specified point\n      // i.e. the acute angle in the hypothetical triangle used below\n\n      const angle = Math.atan2(dy, dx);\n      const speed = 200;\n      this.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);\n    } else {\n      this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(50, 100);\n      this.body.velocity.x = 0;\n    }\n\n    if (this.scene.player && this.x < this.scene.player.x) {\n      this.angle -= 5;\n    } else {\n      this.angle += 5;\n    }\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChaserShip);\n\n//# sourceURL=webpack:///./src/entities/ChaserShip.js?");

/***/ }),

/***/ "./src/entities/EnemyLaser.js":
/*!************************************!*\
  !*** ./src/entities/EnemyLaser.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\n\n\n\nclass EnemyLaser extends _Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y, \"sprLaserEnemy0\");\n    this.body.velocity.y = 400;\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemyLaser);\n\n//# sourceURL=webpack:///./src/entities/EnemyLaser.js?");

/***/ }),

/***/ "./src/entities/Entity.js":
/*!********************************!*\
  !*** ./src/entities/Entity.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Entity extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor(scene, x, y, spriteKey, type) {\n    super(scene, x, y, spriteKey);\n    this.scene = scene;\n    this.scene.add.existing(this);\n    this.scene.physics.world.enableBody(this, 0);\n    this.setData('type', type);\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n//# sourceURL=webpack:///./src/entities/Entity.js?");

/***/ }),

/***/ "./src/entities/Gunship.js":
/*!*********************************!*\
  !*** ./src/entities/Gunship.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n/* harmony import */ var _EnemyLaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnemyLaser */ \"./src/entities/EnemyLaser.js\");\n\n\n\n\nclass Gunship extends _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y, 'sprEnemy0', 'Gunship');\n    this.play('sprEnemy0');\n    this.body.velocity.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(50, 100);\n    this.shootTimer = this.scene.time.addEvent({\n      delay: 1000,\n      callback: function () {\n        var laser = new _EnemyLaser__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.x, this.y);\n        laser.setScale(this.scaleX);\n        this.scene.enemyLasers.add(laser);\n        this.scene.soundEffects.laser.play();\n      },\n      callbackScope: this,\n      loop: true\n    });\n  }\n\n  onDestroy() {\n    if (this.shootTimer) this.shootTimer.remove();\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gunship);\n\n//# sourceURL=webpack:///./src/entities/Gunship.js?");

/***/ }),

/***/ "./src/entities/Player.js":
/*!********************************!*\
  !*** ./src/entities/Player.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/entities/Ship.js\");\n/* harmony import */ var _PlayerLaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerLaser */ \"./src/entities/PlayerLaser.js\");\n\n\n\nclass Player extends _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, spriteKey) {\n    super(scene, x, y, spriteKey, 'Player');\n    this.setData(\"speed\", 200);\n    this.setData(\"isShootCoolingDown\", false);\n    this.shootCooldownTimer = null;\n    this.play(\"sprPlayer\");\n  }\n\n  moveUp() {\n    this.body.velocity.y = 0 - this.getData('speed');\n  }\n\n  moveDown() {\n    this.body.velocity.y = this.getData('speed');\n  }\n\n  moveLeft() {\n    this.body.velocity.x = 0 - this.getData('speed');\n  }\n\n  moveRight() {\n    this.body.velocity.x = this.getData('speed');\n  }\n\n  update() {\n    // stop player if movement keys not being pressed\n    this.body.setVelocity(0, 0); // constrain player to world dimensions\n\n    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);\n    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height); // emit lasers if player is shooting\n\n    if (this.getData('isShooting') && !this.getData('isShootCoolingDown')) {\n      this.scene.playerLasers.add(new _PlayerLaser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.x, this.y));\n      this.scene.soundEffects.playerLaser.play();\n      this.setData('isShootCoolingDown', true);\n      this.shootCooldownTimer = this.scene.time.addEvent({\n        delay: 100,\n        callback: function () {\n          this.setData('isShootCoolingDown', false);\n        },\n        callbackScope: this,\n        loop: false\n      });\n    }\n  }\n\n  onDestroy() {\n    this.scene.player = null;\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/entities/Player.js?");

/***/ }),

/***/ "./src/entities/PlayerLaser.js":
/*!*************************************!*\
  !*** ./src/entities/PlayerLaser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\n\n\n\nclass PlayerLaser extends _Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y, \"sprLaserPlayer\");\n    this.body.velocity.y = -400;\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerLaser);\n\n//# sourceURL=webpack:///./src/entities/PlayerLaser.js?");

/***/ }),

/***/ "./src/entities/Ship.js":
/*!******************************!*\
  !*** ./src/entities/Ship.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\n\n\n\nclass Ship extends _Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y, spriteKey, type) {\n    super(scene, x, y, spriteKey);\n    this.setData('isDead', false);\n  }\n\n  explode() {\n    if (!this.getData('isDead')) {\n      this.setData('isDead', true);\n      this.setTexture('sprExplosion');\n      this.play('sprExplosion');\n      this.scene.soundEffects.explosions[phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.scene.soundEffects.explosions.length - 1)].play();\n      if (this.onDestroy) this.onDestroy();\n      this.setAngle(0);\n      this.body.setVelocity(0, 0);\n      this.on('animationcomplete', () => {\n        this.destroy();\n      });\n    }\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/entities/Ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game {\n  constructor() {\n    super(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n}\n\nnew Game();\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ScrollingBackground {\n  constructor(scene, spriteKey, velocityY, offsetX, offsetY) {\n    this.scene = scene;\n    this.spriteKey = spriteKey;\n    this.velocityY = velocityY;\n    this.offsetX = offsetX;\n    this.offsetY = offsetY;\n    this.tiles = this.scene.add.group();\n    this.createTiles();\n  }\n\n  createTiles() {\n    for (let i = 0; i < 2; i++) {\n      const tile = this.scene.add.sprite(0, 0, this.spriteKey);\n      tile.setDepth(i - 1);\n      tile.setScale(2, 2);\n      tile.y = 0 - tile.displayHeight * i + this.offsetY;\n      tile.x = 0 + this.offsetX;\n      this.scene.physics.world.enableBody(tile, 0); // 0 means static body\n\n      tile.body.velocity.y = this.velocityY;\n      this.tiles.add(tile);\n    }\n  }\n\n  update() {\n    const threshold = this.scene.physics.world.bounds.height;\n    const tiles = this.tiles.children.getArray();\n    const tileOverThreshold = tiles.find(t => t.y >= threshold * 2);\n\n    if (tileOverThreshold != null) {\n      const tileNotOverThreshold = tiles.find(t => t !== tileOverThreshold);\n      tileOverThreshold.y = tileNotOverThreshold.y - tileNotOverThreshold.displayHeight;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingBackground);\n\n//# sourceURL=webpack:///./src/props/ScrollingBackground.js?");

/***/ }),

/***/ "./src/sceneHelpers/createScrollingBackground.js":
/*!*******************************************************!*\
  !*** ./src/sceneHelpers/createScrollingBackground.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props_ScrollingBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props/ScrollingBackground */ \"./src/props/ScrollingBackground.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((scene, backgrounds) => {\n  for (let i = 0; i < 5; i++) {\n    // create five scrolling backgrounds\n    const bg = new _props_ScrollingBackground__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, \"sprBg0\", 10 * i, // each successive background layer moves faster than the last\n    // x and y offsets to prevent jarring appearance on animation start\n    (i % 2 === 0 ? 5 : -5) * i, (i % 2 === 0 ? 10 : -10) * i);\n    backgrounds.push(bg);\n  }\n});\n\n//# sourceURL=webpack:///./src/sceneHelpers/createScrollingBackground.js?");

/***/ }),

/***/ "./src/scenes/GameOverScene.js":
/*!*************************************!*\
  !*** ./src/scenes/GameOverScene.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\n\n\n\nclass GameOverScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: \"GameOverScene\"\n    });\n    this.soundEffects = {\n      btnOver: null,\n      btnDown: null\n    };\n    this.btnRestart = null;\n    this.gameOverText = null;\n  }\n\n  preload() {\n    this.load.image('sprBg0', 'assets/images/sprBg0.png');\n    this.load.image('sprBg1', 'assets/images/sprBg1.png');\n    this.load.image(\"sprBtnRestart\", \"assets/images/sprBtnRestart.png\");\n    this.load.image(\"sprBtnRestartHover\", \"assets/images/sprBtnRestartHover.png\");\n    this.load.image(\"sprBtnRestartDown\", \"assets/images/sprBtnRestartDown.png\");\n    this.load.audio(\"sndBtnOver\", \"assets/audio/sndBtnOver.wav\");\n    this.load.audio(\"sndBtnDown\", \"assets/audio/sndBtnDown.wav\");\n  }\n\n  create() {\n    this.soundEffects.btnOver = this.sound.add(\"sndBtnOver\");\n    this.soundEffects.btnDown = this.sound.add(\"sndBtnDown\");\n    this.createGameOverText();\n    this.createRestartButton();\n    this.backgrounds = [];\n    Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, this.backgrounds);\n  }\n\n  update() {\n    this.backgrounds.forEach(e => e.update());\n  }\n\n  createGameOverText() {\n    this.gameOverText = this.add.text(this.game.config.width * 0.5, 128, \"GAME OVER\", {\n      fontFamily: 'monospace',\n      fontSize: 48,\n      fontStyle: 'bold',\n      color: '#ffffff',\n      align: 'center'\n    });\n    this.gameOverText.setOrigin(0.5);\n  }\n\n  createRestartButton() {\n    this.btnRestart = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, \"sprBtnRestart\");\n    this.btnRestart.setInteractive();\n    this.btnRestart.on(\"pointerover\", () => {\n      this.btnRestart.setTexture(\"sprBtnRestartHover\");\n      this.soundEffects.btnOver.play();\n    });\n    this.btnRestart.on(\"pointerout\", () => {\n      this.btnRestart.setTexture(\"sprBtnRestart\");\n    });\n    this.btnRestart.on(\"pointerdown\", () => {\n      this.btnRestart.setTexture(\"sprBtnRestartDown\");\n    });\n    this.btnRestart.on(\"pointerup\", () => {\n      this.btnRestart.setTexture(\"sprBtnRestartHover\");\n      this.scene.start('MainScene');\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOverScene);\n\n//# sourceURL=webpack:///./src/scenes/GameOverScene.js?");

/***/ }),

/***/ "./src/scenes/MainMenuScene.js":
/*!*************************************!*\
  !*** ./src/scenes/MainMenuScene.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\n\n\n\nclass MainMenuScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'MainMenuScene'\n    });\n    this.soundEffects = {\n      btnOver: null,\n      btnDown: null\n    };\n    this.btnPlay = null;\n    this.title = null;\n    this.backgrounds = [];\n  }\n\n  preload() {\n    this.load.image('sprBg0', 'assets/images/sprBg0.png');\n    this.load.image('sprBg1', 'assets/images/sprBg1.png');\n    this.load.image(\"sprBtnPlay\", \"assets/images/sprBtnPlay.png\");\n    this.load.image(\"sprBtnPlayHover\", \"assets/images/sprBtnPlayHover.png\");\n    this.load.image(\"sprBtnPlayDown\", \"assets/images/sprBtnPlayDown.png\");\n    this.load.audio(\"sndBtnOver\", \"assets/audio/sndBtnOver.wav\");\n    this.load.audio(\"sndBtnDown\", \"assets/audio/sndBtnDown.wav\");\n  }\n\n  create() {\n    this.soundEffects.btnOver = this.sound.add(\"sndBtnOver\");\n    this.soundEffects.btnDown = this.sound.add(\"sndBtnDown\");\n    this.createTitle();\n    this.createStartButton();\n    Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, this.backgrounds);\n  }\n\n  update() {\n    this.backgrounds.forEach(e => e.update());\n  }\n\n  createTitle() {\n    this.title = this.add.text(this.game.config.width * 0.5, 128, \"UNREASONABLY DIFFICULT SPACE SHOOTER\", {\n      fontFamily: 'monospace',\n      fontSize: 48,\n      fontStyle: 'bold',\n      color: '#ffffff',\n      align: 'center',\n      wordWrap: true,\n      wordWrap: {\n        width: this.game.config.width * 0.85\n      }\n    });\n    this.title.setOrigin(0.5);\n  }\n\n  createStartButton() {\n    this.btnPlay = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, \"sprBtnPlay\");\n    this.btnPlay.setInteractive();\n    this.btnPlay.on(\"pointerover\", () => {\n      this.btnPlay.setTexture(\"sprBtnPlayHover\");\n      this.soundEffects.btnOver.play();\n    });\n    this.btnPlay.on(\"pointerout\", () => {\n      this.btnPlay.setTexture(\"sprBtnPlay\");\n    });\n    this.btnPlay.on(\"pointerdown\", () => {\n      this.btnPlay.setTexture(\"sprBtnPlayDown\");\n    });\n    this.btnPlay.on(\"pointerup\", () => {\n      this.btnPlay.setTexture(\"sprBtnPlayHover\");\n      this.scene.start('MainScene');\n    });\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainMenuScene);\n\n//# sourceURL=webpack:///./src/scenes/MainMenuScene.js?");

/***/ }),

/***/ "./src/scenes/MainScene.js":
/*!*********************************!*\
  !*** ./src/scenes/MainScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Player */ \"./src/entities/Player.js\");\n/* harmony import */ var _entities_Gunship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Gunship */ \"./src/entities/Gunship.js\");\n/* harmony import */ var _entities_CarrierShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/CarrierShip */ \"./src/entities/CarrierShip.js\");\n/* harmony import */ var _entities_ChaserShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/ChaserShip */ \"./src/entities/ChaserShip.js\");\n/* harmony import */ var _sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sceneHelpers/createScrollingBackground */ \"./src/sceneHelpers/createScrollingBackground.js\");\n\n\n\n\n\n\n\nclass MainScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: \"MainScene\"\n    });\n    this.soundEffects = {\n      explosions: [],\n      laser: null,\n      playerLaser: null\n    };\n    this.player = null;\n    this.keyW = null;\n    this.keyS = null;\n    this.keyA = null;\n    this.keyD = null;\n    this.keySpace = null;\n    this.enemies = null;\n    this.playerLasers = null;\n    this.enemyLasers = null;\n    this.backgrounds = null;\n  }\n\n  preload() {\n    this.load.image('sprBg0', 'assets/images/sprBg0.png');\n    this.load.image('sprBg1', 'assets/images/sprBg1.png');\n    this.load.image('sprEnemy1', 'assets/images/sprEnemy1.png');\n    this.load.image(\"sprLaserEnemy0\", \"assets/images/sprLaserEnemy0.png\");\n    this.load.image(\"sprLaserPlayer\", \"assets/images/sprLaserPlayer.png\");\n    this.load.spritesheet('sprExplosion', 'assets/images/sprExplosion.png', {\n      frameWidth: 32,\n      frameHeight: 32\n    });\n    this.load.spritesheet('sprEnemy0', 'assets/images/sprEnemy0.png', {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.spritesheet(\"sprEnemy2\", \"assets/images/sprEnemy2.png\", {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.spritesheet(\"sprPlayer\", \"assets/images/sprPlayer.png\", {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.audio(\"sndExplode0\", \"assets/audio/sndExplode0.wav\");\n    this.load.audio(\"sndExplode1\", \"assets/audio/sndExplode1.wav\");\n    this.load.audio(\"sndLaser\", \"assets/audio/sndLaser.wav\");\n  }\n\n  create() {\n    this.anims.create({\n      key: \"sprEnemy0\",\n      frames: this.anims.generateFrameNumbers(\"sprEnemy0\"),\n      frameRate: 20,\n      repeat: -1\n    });\n    this.anims.create({\n      key: \"sprEnemy2\",\n      frames: this.anims.generateFrameNumbers(\"sprEnemy2\"),\n      frameRate: 20,\n      repeat: -1\n    });\n    this.anims.create({\n      key: \"sprExplosion\",\n      frames: this.anims.generateFrameNumbers(\"sprExplosion\"),\n      frameRate: 20,\n      repeat: 0\n    });\n    this.anims.create({\n      key: \"sprPlayer\",\n      frames: this.anims.generateFrameNumbers(\"sprPlayer\"),\n      frameRate: 20,\n      repeat: -1\n    });\n    this.soundEffects.explosions.push(this.sound.add('sndExplode0'));\n    this.soundEffects.explosions.push(this.sound.add('sndExplode1'));\n    this.soundEffects.laser = this.sound.add('sndLaser', {\n      volume: 0.1\n    });\n    this.soundEffects.playerLaser = this.sound.add('sndLaser', {\n      volume: 1\n    });\n    this.player = new _entities_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 1 + this.game.config.width * 0.5, // +1 here as workaround to issue preventing shooting at starting position\n    this.game.config.height * 0.5, 'sprPlayer');\n    this.keyW = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.W);\n    this.keyS = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.S);\n    this.keyA = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.A);\n    this.keyD = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.D);\n    this.keySpace = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE);\n    this.enemies = this.add.group();\n    this.enemyLasers = this.add.group();\n    this.playerLasers = this.add.group();\n    this.physics.add.collider(this.enemies, this.playerLasers, (enemy, laser) => {\n      enemy.explode();\n      laser.destroy();\n    });\n    this.physics.add.collider(this.player, this.enemyLasers, (player, laser) => {\n      this.killPlayer();\n      laser.destroy();\n    });\n    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {\n      if (!player.getData(\"isDead\") && !enemy.getData(\"isDead\")) {\n        this.killPlayer();\n        enemy.explode();\n      }\n    });\n    this.time.addEvent({\n      delay: 350,\n      callbackScope: this,\n      loop: true,\n      callback: this.spawn\n    });\n    this.backgrounds = []; // need this here since ctor is only run once during game execution\n\n    Object(_sceneHelpers_createScrollingBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, this.backgrounds);\n  }\n\n  update() {\n    this.updatePlayer();\n    this.updateEnvironment();\n  }\n\n  killPlayer() {\n    if (!this.player) return;\n    this.player.explode();\n    this.time.addEvent({\n      delay: 1000,\n      callbackScope: this,\n      loop: false,\n      callback: () => {\n        this.scene.start('GameOverScene');\n      }\n    });\n  }\n\n  updatePlayer() {\n    if (!this.player || this.player.getData('isDead')) return;\n\n    if (this.keySpace.isDown) {\n      this.player.setData('isShooting', true);\n    } else {\n      this.player.setData('isShooting', false);\n    }\n\n    this.player.update();\n    if (this.keyW.isDown) this.player.moveUp();else if (this.keyA.isDown) this.player.moveLeft();else if (this.keyS.isDown) this.player.moveDown();else if (this.keyD.isDown) this.player.moveRight();\n  }\n\n  updateEnvironment() {\n    const updateEntity = e => {\n      this.updateEntity(e);\n    };\n\n    this.enemies.children.iterate(updateEntity);\n    this.enemyLasers.children.iterate(updateEntity);\n    this.playerLasers.children.iterate(updateEntity);\n    this.backgrounds.forEach(e => {\n      e.update();\n    });\n  }\n\n  spawn() {\n    const roll = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, 10);\n    let newEnemy = null;\n\n    if (roll <= 5) {\n      newEnemy = new _entities_Gunship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n    } else if (roll <= 8) {\n      newEnemy = new _entities_ChaserShip__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n    } else {\n      newEnemy = new _entities_CarrierShip__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, this.game.config.width), 0);\n    }\n\n    this.enemies.add(newEnemy);\n  }\n\n  updateEntity(obj) {\n    if (obj && obj.update) {\n      obj.update();\n      this.destroyIfOutOfBounds(obj);\n    }\n  }\n\n  destroyIfOutOfBounds(obj) {\n    if (!phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.Rectangle.Overlaps(this.physics.world.bounds, obj.getBounds())) {\n      if (obj.onDestroy) obj.onDestroy();\n      obj.destroy();\n    }\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScene);\n\n//# sourceURL=webpack:///./src/scenes/MainScene.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ken/code/github/phaser-space-shooter/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });