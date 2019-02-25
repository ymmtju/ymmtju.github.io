var email=document.getElementById('email');
	var wx=document.getElementById('wx');
	var sj=document.getElementById('sj');
	var QQ=document.getElementById('QQ');
	var emailtu=document.getElementById('emailtu');
	var wxtu=document.getElementById('wxtu');
	var sjtu=document.getElementById('sjtu');
	var QQtu=document.getElementById('QQtu');
	email.onmouseover=function(){
		this.src="images/邮箱.png";
		emailtu.style.display='block';
	}
	email.onmouseout=function(){
		this.src="images/邮箱2.png";
		emailtu.style.display='none';
	}
	wx.onmouseover=function(){
		this.src="images/微信.png";
		wxtu.style.display='block';
	}
	wx.onmouseout=function(){
		this.src="images/微信2.png";
		wxtu.style.display='none';
	}
	sj.onmouseover=function(){
		this.src="images/手机.png";
		sjtu.style.display='block';
	}
	sj.onmouseout=function(){
		this.src="images/手机2.png";
		sjtu.style.display='none';
	}
	QQ.onmouseover=function(){
		this.src="images/QQ.png";
		QQtu.style.display='block';
	}
	QQ.onmouseout=function(){
		this.src="images/QQ2.png";
		QQtu.style.display='none';
	}