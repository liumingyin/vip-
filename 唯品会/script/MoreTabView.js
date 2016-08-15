function MoreTabView(){
	
	TabView.call(this)
}

MoreTabView.prototype = Object.create(TabView.prototype)

MoreTabView.prototype.constructor = MoreTabView

MoreTabView.prototype.load = function(){
	
	TabView.prototype.load.call(this)
	
	//获取更多按钮的右边和窗口的距离
	var moreRight = document.querySelector('.more-show').getBoundingClientRect().right
	
	var Left = moreRight - $('.more-modal').innerWidth() + 'px'
	
	$('.more-modal').show().css({
		
		left:Left
		
	}).hover(function(){
		
		$(this).show()
		
	},function(){
		
		$(this).hide()
		
	})
	
	$('.more-modal li').hover(function(){
		
		$(this).find('p').animate({
			top:0
		},500)
		
	},function(){
		
		$(this).find('p').animate({
			
			top:'25%'
			
		},500)
		
	})
}

MoreTabView.prototype.unload = function(){
	
	TabView.prototype.unload.call(this)
	
	$('.more-modal').hide()
}









