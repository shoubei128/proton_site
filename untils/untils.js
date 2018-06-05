// 工具函数 untils
var session = window.sessionStorage;
var ls = window.localStorage;
var untils = {
    getCookieValue: function(name) {
        var cookieArr = document.cookie.split('; ');
        for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].indexOf(name) >= 0) {
                return cookieArr[i].split('=')[1];
            }
        }
    },
    setCookie: function(name, value, day, domain, path) {
        var cookie = name + '=' + encodeURIComponent(value); //设置Cookie的名称和Cookie的值，Cookie名称为必填项。
        if (typeof day === 'number') {
            cookie += ';max-age=' + (day * 60 * 60 * 24);　　 //设置Cookie的过期事件,默认为Session
        }
        if (!path) {
            cookie += ';path=/'
        }　　 //设置Cookie的路径，默认为 /
        if (domain) {
            cookie += ';domain=' + domain
        }　　 //设置Cookie的存储域，默认为当前js执行的网页的域
        document.cookie = cookie;
    },
    delCookie: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    getQueryString: function(name) { //获取query参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    // 路由中文传参解析
    GetEnRequest: function() {
        var url = decodeURI(decodeURI(location.search)); //获取url中"?"符后的字串，使用了两次decodeRUI解码
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
            return theRequest;
        }
    },
    GetRequest: function() {
        var url = location.search; //获取url中"?"符后的字串  
        var request = null;
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            request = str.split("&")[0];
        }
        return request;
    },
    // localstorage简单封装
    getItem: function(key) {
        try {
            return JSON.parse(ls.getItem(key))
        } catch (err) {
            return null
        }
    },
    setItem: function(key, val) {
        ls.setItem(key, JSON.stringify(val))
    },
    clear: function() {
        ls.clear()
    },
    keys: function() {
        return ls.keys()
    },
    removeItem: function(key) {
        ls.removeItem(key)
    }
};