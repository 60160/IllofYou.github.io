	let pagecount = 1;
	document.getElementById("chapterpage").addEventListener("click", function() {
		pagecount++;
		if(pagecount > pagemax){
			chapternumber++;
			window.location.replace("Chapter"+chapternumber+".html");
		}
		else if(pagecount < pagemax){
			chapternumber--;
			window.location.replace("Chapter"+chapternumber+".html");
		}
		let pageindex = ("000" + pagecount).slice(-3);
		this.src=imgURLbase+pageindex+".png";
	});
/*	
	document.onkeydown = function (e) {
		e = e || window.event;
		pagecount++;
		let pageindex = ("000" + pagecount).slice(-3);
		document.getElementById("chapterpage").src=imgURLbase+pageindex+".png";
		};
*/	
	
	document.addEventListener('keydown', function(e) {
		if(e.code == "ArrowRight") {
			pagecount++;
		}
		else if(e.code == "ArrowLeft")  {
			pagecount--;
		}
		if(pagecount > pagemax){
			chapternumber--;
			window.location.replace("Chapter"+chapternumber+".html");
		}
		else if(pagecount < 1){
			chapternumber++;
			if(chapternumber>12){
				chapternumber--;
			}
			window.location.replace("Chapter"+chapternumber+".html");
		}
		let pageindex = ("000" + pagecount).slice(-3);
		document.getElementById("chapterpage").src=imgURLbase+pageindex+".png";
	});
	