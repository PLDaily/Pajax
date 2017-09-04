;(function(factory) {
	var Pajax = factory();
	if(typeof define === 'function' && define.amd) {
		define(['Pajax'], function() {
			return Pajax;
		})
	}else if(typeof exports === 'object') {
		module.exports = Pajax;
	}else {
		window.Pajax = Pajax;
	}

})(function() {

	var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	
	var hasOwnProperty   = ObjProto.hasOwnProperty;

  
	var nativeKeys         = Object.keys;

	var isObject = function(obj) {
		return typeof obj === 'object' && !!obj
	}

	var getKeys = function(obj) {
		if(!isObject(obj)) return [];
		if(nativeKeys) return nativeKeys(obj);
		var keys = [];
		for(var key in obj) {
			if(hasOwnProperty.call(obj, key)) {
				keys.push(key);
			} 
		}
		return keys;
	}

	var extend = function(obj) {
		var length = arguments.length;
		if(length < 2 && obj == null) return obj;
		for(var i = 1; i < arguments.length; i++) {
			var source = arguments[i],
				keys = getKeys(source),
				l = keys.length;
			for(var j = 0; j < l; j++) {
				var key = keys[j];
				obj[key] = source[key];
			}
		}
	}

	var defaults = {
		url: '',
		method: '',
		data: '',
		async: '',
		dataType: '',
	};



	var ajax = function(options) {
		extend(defaults, options);
		console.log(defaults);
	}


	return ajax
})









