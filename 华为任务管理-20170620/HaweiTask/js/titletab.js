;(function ($) {
	$(function () {
		var team = {
			//需操作元素
			wp:$('.sliderContainer'),
			wp_text:$('.sliderContainer .slider'),
			wp_ul:$('.subtitle'),
			btn_prev:$('#prev'),
			btn_next:$('#next'),
			//方法
			titile_switchover:function () {//项目信息标题切换
				var _this = this;
				_this.wp_text.click(function (e) {
					_this.wp_ul.slideToggle();
				})
			},
			btn_fun:function () {//上下按钮
				var _this = this;
				var li = null ,len = 0;
				console.log(_this.btn_prev,_this.btn_next);
				_this.btn_prev.on('click',function (e) {
					fun('prev');
				})
				_this.btn_next.on('click',function (e) {
					fun('next');
				})
				function fun(next) {
					li = _this.wp_ul.find('li'),
					len = li.length;
					if(len>=2){
						var next_i,i = li.filter('.active').index();
						
						if(next == 'next'){
							console.log(next);
							next_i = i < len-1 ? i+1 : 0;
						}else{
							console.log('prev');
							next_i = i > 0 ? i - 1 : len-1;
						}
						console.log(li);
						console.log(len,i,next_i);
						_this.alter_wp_text(next_i);
					}
				}
			},
			alter_wp_text:function (li_index) {//改变h2文本，改变的内容为 li.eq(li_index)
				var _this = this;
				var li = _this.wp_ul.find('li'),
					len = li.length; 
				if(len > li_index){
//					_this.wp_ul.data('active',li_index);
					var texts = li.removeClass('active').eq(li_index).addClass('active').text(); 
				}else{
					var texts = '项目列表为空';
				}
				_this.wp_text.find('h2').text(texts);
			},
			init:function () {//初始化
				var _this = this;
				//加载完 提取ul 中第一条 li的文本显示
				_this.alter_wp_text(0);
				//项目信息标题切换
				_this.titile_switchover();
				//上下按钮
				_this.btn_fun();
			}
		}
		team.init();
		
	})
})(jQuery)
