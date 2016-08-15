
function LocationTabView(){
	
	TabView.call(this)
}

//实现原型链的继承
LocationTabView.prototype = Object.create(TabView.prototype)

LocationTabView.prototype.constructor = LocationTabView

/*
 * 重写父类的load方法
 */ 
LocationTabView.prototype.load = function(index){
	
	//部分重写
	TabView.prototype.load.call(this,index)
	
	var locationDiv = document.querySelector('.header-location')
	
	var Left = locationDiv.getBoundingClientRect().left + 'px'
	
	var Top = locationDiv.getBoundingClientRect().bottom + 'px'
	 
	 if(this.$tab){
	 	this.$tab.show()
	 	return
	 }
	 
	//创建locationTabView的界面
	this.$tab = $('<div class="locationBox">').css({
		border:'1px solid silver',
		backgroundColor:'white',
		position:'absolute',
		left:Left,
		top:Top,
	}).appendTo($('body')).append($('<ul class="cityList">').css({
		listStyleType:'none',
		//padding:0
	})).hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
	
	for (var keyName in this.datas) {
		
		var Li = $('<li>').append($("<span>").css({
			display:'inline-block',
			color:normalTextColor,
			fontSize:'0.8rem',
			width:'20px',
			textAlign:'center',
			lineHeight:'25px'
		}).text(keyName)).appendTo($('.cityList'))
		
		var cities = this.datas[keyName]
		var lastClickSpan = 0
		for (var i = 0; i < cities.length; i++) {
			
			var title = cities[i]
			
			$("<span>").css({
				color:normalTextColor,
				fontSize:'0.8rem',
				padding:' 0 5px',
				textAlign:'left',
				lineHeight:'25px'
			}).text(title).appendTo(Li).click(function(){
				$('.header-location a').text($(this).text())
				$(this).css({
					backgroundColor:skinColor,
					color:'white',
					className:'clicked'
				})
				$(lastClickSpan).css({
					backgroundColor:'',
					color:normalTextColor,
					className:''
				})
				lastClickSpan = $(this)
			}).hover(function(){
				$(this).css("color",skinColor)
			},function(){
				if($(this).className == 'clicked'){
					$(this).css('color','white')
				}
				$(this).css('color',normalTextColor)
			})
		}
	}
}
































