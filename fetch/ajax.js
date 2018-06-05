var http = function(url, param, type) {
	// 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
	// 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，也可以不做这一层封装，还是根据工程实际情况判断吧，重要的还是链式回调
	return $.ajax({
		url: url,
		data: param || {},
		type: type || 'GET',
		contentType: "application/json",
	});
}