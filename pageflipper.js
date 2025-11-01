	let pagecount = 1;
	document.addEventListener('keydown', function(e) {
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
		let pageindex = ("000"+pagecount).slice(-3);
		document.getElementById("chapterpage").src=imgURLbase+pageindex+".png";
	};
	