export var isEmptyObject = function (obj) { return Object.keys(obj).length === 0 && obj.constructor === Object; };
export var getRandomId = function () { return Math.random().toString(36).substr(2, 9); };
//# sourceMappingURL=tools.js.map