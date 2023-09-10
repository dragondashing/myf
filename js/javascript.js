// 获取元素
 var sliderbar = document.querySelector('right.html.right');   
 var sliderbar2 = document.querySelector('legt.html.left-top') ;
 var banner = document.querySelector('index.html.middle');
 var bannerTop = banner.offsetTop; // 获取主体部分距离顶部的距离
 var sliderbarTop = sliderbar.offsetTop - bannerTop;  // 看上图我们发现侧边栏是固定banner部分右边的，因此我们要用两个值相减获取banner顶着浏览器页面最上方的时候，侧边栏距离浏览器最上方的值。
 var sliderbarTop2 = sliderbar2.offsetTop - bannerTop;
 document.addEventListener('scroll', function() {      // 给【页面】添加一个滚动事件，我们事件的对象时页面的滚动。
	 if (window.pageYOffset >= bannerTop) {    //  浏览器滚动上方被遮盖住的部分大于bannerTop，也就是说banenr上方以及没有东西了，再或者说header部分完全被滚动走了。
		 sliderbar.style.position = 'fixed';
		 sliderbar2.style.position = 'fixed';
		 sliderbar.style.top = sliderbarTop + 'px';
		 sliderbar2.style.top = sliderbarTop2 + 'px';
	 } else {
		 sliderbar.style.position = 'absolute';  // 如果没有滚动走，那就让侧边栏还随着页面的滚动而滚动
		 sliderbar2.style.position = 'absolute';
		 sliderbar.style.top = 406 + 'px';    // 元素起初的位置
		 sliderbar2.style.top = 406 + 'px';
	 }
	 if (window.pageYOffset >= mainTop) {      
		 goBack.style.display = 'block';     // 如果banner部分被滚动走了，那就让侧边栏内容给显示出来
	 } else {
		 goBack.style.display = 'none';        // 否则不显示
	 }
	
 });
 var mainTop = main.offsetTop;
 