;(function ($) {
	$(function () {
		var team = {
			//�����Ԫ��
			wp:$('.sliderContainer'),
			wp_text:$('.sliderContainer .slider'),
			wp_ul:$('.subtitle'),
			btn_prev:$('#prev'),
			btn_next:$('#next'),
			//����
			titile_switchover:function () {//��Ŀ��Ϣ�����л�
				var _this = this;
				_this.wp_text.click(function (e) {
					_this.wp_ul.slideToggle();
				})
			},
			btn_fun:function () {//���°�ť
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
			alter_wp_text:function (li_index) {//�ı�h2�ı����ı������Ϊ li.eq(li_index)
				var _this = this;
				var li = _this.wp_ul.find('li'),
					len = li.length; 
				if(len > li_index){
//					_this.wp_ul.data('active',li_index);
					var texts = li.removeClass('active').eq(li_index).addClass('active').text(); 
				}else{
					var texts = '��Ŀ�б�Ϊ��';
				}
				_this.wp_text.find('h2').text(texts);
			},
			init:function () {//��ʼ��
				var _this = this;
				//������ ��ȡul �е�һ�� li���ı���ʾ
				_this.alter_wp_text(0);
				//��Ŀ��Ϣ�����л�
				_this.titile_switchover();
				//���°�ť
				_this.btn_fun();
			}
		}
		team.init();
		
	})
})(jQuery)
