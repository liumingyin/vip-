function TabView(){
	
	this.tabDatas = TabView.tabViewDatas.datas
}

TabView.prototype.load = function(index){
	
	this.datas = this.CheckDatas(index)
}

TabView.prototype.CheckDatas = function(index){
	
	if(index == 0){
		
		//获取城市列表的数据
		var locationDatas = this.tabDatas[0].userLocation
		
		//返回数据
		return locationDatas
	}
}

TabView.prototype.unload = function(){
	
}
