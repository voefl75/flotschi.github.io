let id;
let object;
let cnt;
let img;
let max;

function init(){
	id="img1";
	object=document.getElementById(id);
	cnt=1;
	max = 4;
	setTimeout(next_img,2000);
}
function next_img(){
	cnt++;
	if(cnt > max){
		cnt = 1;
	}
	if(cnt < 10){
		img = "0"+cnt;
	}
	else{
		img = cnt;
	}
	object.src=img+".jpg";
	setTimeout(next_img,2000);
}
window.addEventListener("load",init);