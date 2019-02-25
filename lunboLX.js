var box=document.getElementById('lunbo');
var inner=box.children[0];
var ulObj=inner.children[0];
var ulLis=ulObj.children;
var olObj=inner.children[1];
var left=document.getElementById('left');
var right=document.getElementById('right');
var imgWidth=window.screen.width;
var arr=document.getElementById('arr');


//一、动态生成下标 且 追加最后一张图片
   for(var i=0;i<ulLis.length;i++){
 	  var li=document.createElement('li');
 	  li.innerText=i+1;
 	  olObj.appendChild(li); 	
   }

  var olLis=olObj.children;
  olLis[0].className='current';
  var firImg=ulLis[0].cloneNode(true);
  ulObj.appendChild(firImg);

//二、鼠标经过下标按钮
    for(var j=0;j<olLis.length;j++){
    	olLis[j].index=j;     //注意this.index，将变量i变成让
    	                       //数组形式传入或者将i作为函数参数传入直接调用
    	olLis[j].onmouseover=function() {
    		for(var k=0;k<olLis.length;k++){
    			olLis[k].className="";
    		}
    		this.className="current";
    		var target=-this.index*imgWidth;
    		animate(ulObj,target);  
    		pic=this.index;     //图片与方块索引一致
    		square=this.index;  		
    	}
   }
//三、左右显示以及切换
    box.onmouseover=function(){
    	arr.style.display='block';
    	clearInterval(timer);
    }
    box.onmouseout=function(){
    	arr.style.display='none';
    	timer=setInterval(playNext,3000);
    } 
    var pic=0;
    var square=0;     
    left.onclick=function(){
    	if (pic==0) {
    		ulObj.style.left=-(ulObj.length-1)*imgWidth;
    		pic=ulLis.length-1;
    	}
    	pic--;
    	var target=-pic*imgWidth;
    	animate(ulObj,target);
    	if (square>0) {
    		square--;
    	} else{
    		square=olLis.length-1;
    	}
    	for(var i=0;i<olLis.length;i++){
    		olLis[i].className='';
    	}
    	olLis[square].className='current';
    } 
//四、实现自动播放
    timer=setInterval(playNext,3000);

    function playNext(){
    	if (pic==ulLis.length-1) {
    		pic=0;
    		ulObj.style.left=0;
    	}
    	pic++;
    	var target=-pic*imgWidth;
    	animate(ulObj,target);
    	if (square<olLis.length-1) {
    		square++;
    	}else{
    		square=0;
    	}
    	for(var i=0;i<olLis.length;i++){
    		olLis[i].className='';
    	}
    	olLis[square].className='current';
    }
 //五、animate函数
    function animate(obj,target){
    	clearInterval(obj.timer);
    	 obj.timer=setInterval(function(){
    		var step=30;
    		var step= obj.offsetLeft<target ? step:-step;
    		if (Math.abs(obj.offsetLeft-target)>Math.abs(step)) {
    			obj.style.left=obj.offsetLeft+step+'px';
    		}else{
    			obj.style.left=target+'px';
    			// clearInterval(obj.timer);
    		}    		
    	},10)
    }