function showPic1(n){
	if (!document.getElementById('placeholder')) return false;	//if there is not,not to continue	
	if (placeholder.nodeName != "IMG") return false;	//if there is not,not to continue
	if (n > 6) n = 1;
	document.getElementById('placeholder').setAttribute("src", "./images/"+n+".jpg");
	n++;
    setTimeout("showPic1("+n+")",4000);
}

// function showPic2(n){
// 	if (!document.getElementById('placeholder2')) return false;	//if there is not,not to continue	
// 	if (placeholder.nodeName != "IMG") return false;	//if there is not,not to continue
// 	if (n < 1) n = 6;
// 	document.getElementById('placeholder2').setAttribute("src", "./images/"+n+".jpg");
// 	n--;
//     setTimeout("showPic2("+n+")",6000);
// }

window.onload = function(){
	setTimeout("showPic1(1)", 4000);
	setTimeout("showPic1(6)", 6000);
}
