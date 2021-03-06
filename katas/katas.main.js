(function(){
	
	window.KataMain = function(){

		var tblKatas = $("#tblKatas"),
			kataContent = $("#kataContent"),
			KATAS = [
				{
					"Name" : "Bowling",
					"SrcTest" : "index-bowling.html",
					"SrcCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/bowiling-kata/bowling.js",
					"SrcTestCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/bowiling-kata/bowling-test.js"
				},
				{
					"Name" : "Hanoi Towers",
					"SrcTest" : "index-hanoi.html",
					"SrcCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/hanoi-kata/hanoi.js",
					"SrcTestCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/hanoi-kata/hanoi-test.js"

				},
				{
					"Name" : "Game of Life",
					"SrcTest" : "index-gameoflife.html",
					"SrcCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/gameoflife-kata/gameoflife.js",
					"SrcTestCode" : "https://github.com/Pabloitto/KATAS-JS/blob/master/katas/gameoflife-kata/gameoflife-test.js"
				}
			];

		function init(){
			createTableKatas();
			bindEvents();
		}
		function bindEvents(){
			tblKatas.find("tbody > tr > td > a.testlink").click(onClickTests);
		}
		function onClickTests(){
			var item = $(this),
				src = item.attr("href");
			showTest(src);
			return false;
		}
		function showTest(src){
			kataContent.show();
			src = getSrcAvoidCache(src);
			kataContent.attr("src",src);
		}
		function getSrcAvoidCache(src){
			return src + "?d="+new Date().getTime();
		}
		function createTableKatas(){
			var tBody = tblKatas.find("tbody"),
				i = 0,
				t = KATAS.length,
				item = null,
				html = '';
			for(;i<t;i++){
				item = KATAS[i];
				html += "<tr><td>"+(i + 1)+"</td><td>"+item.Name+"</td><td><a class='testlink' href='"+item.SrcTest+"'>Run tests</a></td><td><a class='codelink' href='"+item.SrcCode+"' target='blank'>View Code</a></td><td><a class='codelink' href='"+item.SrcTestCode+"' target='blank'>View Test Code</a></td></tr>";
			}
			tBody.append(html);
		}

		return {
			init : init
		}
	};

}());