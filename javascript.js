// 获取元素
 var rightif = document.getElementById('rightif');   
 var leftif = document.getElementById('leftif') ;
 var middle = document.getElementById('middle');
 var middleTop = middle.offsetTop; // 获取主体部分距离顶部的距离
 console.log(middleTop);
 var rightifTop = rightif.offsetTop - middleTop;  // 侧边栏是固定middle部分右边的，因此我们要用两个值相减获取middle顶着浏览器页面最上方的时候，侧边栏距离浏览器最上方的值。
 var leftifTop = rightif.offsetTop - middleTop;
 document.addEventListener('scroll', function() {      // 给【页面】添加一个滚动事件，我们事件的对象时页面的滚动。
	 if (window.scrollY >= middleTop) {    //  浏览器滚动上方被遮盖住的部分大于bannerTop，也就是说banenr上方以及没有东西了，再或者说header部分完全被滚动走了。
		 leftif.style.position = 'fixed';
		 rightif.style.position = 'fixed';
		 leftif.style.top = (leftifTop+20) + 'px';
		 rightif.style.top = (rightifTop+20) + 'px';
	 } else {
		 leftif.style.position = 'absolute';  // 如果没有滚动走，那就让侧边栏还随着页面的滚动而滚动
		 rightif.style.position = 'absolute';
		 leftif.style.top = 45+'%';    // 元素起初的位置
		 rightif.style.top = 45+'%';
	 }
 });

 