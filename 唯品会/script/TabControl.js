
var skinColor = '#F10180'

var baseFontSize = '14px'

var baseWidth ='1000px'

//正常的文本颜色
var normalTextColor = '#666666'

function TabControl(){
	
	this.locTabView = new LocationTabView()
	
	this.control()
}

TabControl.prototype.control = function(){
	
	//添加定位的标签触发悬停事件
	$('.header-location').hover(function(){
		
		this.locTabView.load(0)
	}.bind(this))
}
