	let pagecount = 1;
	let nchapter=chapternumber-1;
	let pchapter=chapternumber+1;
	if(pchapter >12){pchapter=12;}
	document.getElementById("pchap").href="Chapter"+pchapter+".html";
	document.getElementById("nchap").href="Chapter"+nchapter+".html";
	pageselecter=document.getElementById("pageselect");
	for (var i=1; i<=pagemax; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		pageselecter.appendChild(opt);
	}
	document.addEventListener('keydown', function(e) {
		e.preventDefault();
		if(e.code == "ArrowRight") {
			flipforward();
		}
		else if(e.code == "ArrowLeft")  {
			flipbackward();
		}
	});
	
	function flipforward() {
		pagecount++;
		if(pagecount > pagemax){
			chapternumber--;
			window.location.replace("Chapter"+chapternumber+".html");
		}
		pageselecter.selectedIndex++;
		let pageindex = ("000"+pagecount).slice(-3);
		document.getElementById("chapterpage").src=imgURLbase+pageindex+".png";
	};
	function flipbackward() {
		pagecount--;
		if(pagecount < 1){
			chapternumber++;
			if(chapternumber>12){
				chapternumber--;
			}
			window.location.replace("Chapter"+chapternumber+".html");
		}
		pageselecter.selectedIndex--;
		let pageindex = ("000"+pagecount).slice(-3);
		document.getElementById("chapterpage").src=imgURLbase+pageindex+".png";
	};
	function setpage() {
	pagecount=pageselecter.value;
	document.getElementById("chapterpage").src=imgURLbase+("000"+pageselecter.value).slice(-3)+".png";
	}