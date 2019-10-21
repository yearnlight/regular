const debounce = (func, wait, immediate) => {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }

    return result;
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  }

  return debounced;
}

const deepCopy = (obj) => {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]);   //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

const dateFormat = (date) =>{
  date = new Date(date);
  let fmt = "yyyy-MM-dd hh:mm:ss";
  { //author: meizz 
    var o = { 
    "M+" : date.getMonth()+1,     //月份 
    "d+" : date.getDate(),     //日 
    "h+" : date.getHours(),     //小时 
    "m+" : date.getMinutes(),     //分 
    "s+" : date.getSeconds(),     //秒 
    "q+" : Math.floor((date.getMonth()+3)/3), //季度 
    "S" : date.getMilliseconds()    //毫秒 
    }; 
    if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
    return fmt; 
   }
}

export default {
  debounce: debounce,
  deepCopy: deepCopy,
  dateFormat:dateFormat
}