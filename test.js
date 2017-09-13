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

	
	var hasOwnProperty = ObjProto.hasOwnProperty;

  
	var nativeKeys = Object.keys;

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
	}

	var defaultsFunc = {
		'exts' : 'jpg,jpeg,gif,png,bmp,pdf,doc,docx,ppt,pptx,vcf,pot,potx,xls,xlsx,txt,rtf,et,wps,dps,mp3,mp4,wma,mid,ifc,rvt,obj', //支持的扩展名
		'extsfun' : function(nowexts){ //不支持的扩展名回调
			alert("不支持上传"+nowexts+"扩展名文件");
		},
		'maxsize' : 10485760, //最大10MB
		'maxsizefun' : function(nowsize){ //超出大小回调
			alert("最大支持10MB，现在"+nowsize);
		},
		'start' : function($setAfter){},
		'progress' : function(percentage,$objProgress){},
		'complete' : function(data,index){},
		'failed' : function(msg){},
		'cancel' : function(){},
		'load': function(){}
	};


	var ajax = function(options) {
		extend(defaults, options);
		console.log(defaults);
	}


	return ajax
})









