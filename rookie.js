
// var sohu= function() {
//     $("#sohuplayer").html("<iframe id='playframe' allowtransparency='true' style='' frameborder='0' width='100%' height='100%' scrolling='no' src='http://moon.moondown.net/tong.php?url="+window.location+"'></iframe>");
// }
var sohu =function (url ){
	// alert(url);
	// alert($("#player_vipTips").html()==null);
		var int =setInterval(function () {

			if($("#player_vipTips").html()!=null)
			{		
				//移除已有播放器，添加解析后播放源，保留播放列表
				$("#player").remove();
				$("#player_vipTips").remove();
				$("#sohuplayer").prepend("<div id='myplayer'  width='960' height='464' style='height: 464px; width: 960px;'></div>");
				$("#myplayer").html("<iframe id='playframe' allowtransparency='true' style='height: 464px; width: 960px;' frameborder='0' width='100%' height='100%' scrolling='no' src='http://moon.moondown.net/tong.php?url="+window.location+"'></iframe>");
				clearInterval(int ); 
			}		
				
			}, 1000);
}
var le =function(url){
	// alert(url);
	// alert($(".trylook span").html()==null);
	var int =setInterval(function () {
			if($(".trylook span").html()=="会员")
			{		
				// alert($(".trylook span").html());
				//移除已有播放器，添加解析后播放源，保留播放列表
				$("#fla_box_con").remove();
				// $("#player_vipTips").remove();
				$(".column_width").prepend("<div id='myplayer' style='width: 1095px; height: 474px;' class='column_left le_playbox'></div>");
				$("#myplayer").html("<iframe id='playframe' allowtransparency='true'  frameborder='0' width='100%' height='100%' scrolling='no' src='http://moon.moondown.net/tong.php?url="+window.location+"'></iframe>");
				clearInterval(int ); 
			}		
			}, 1000);
}
function getDomain(url) {
                    var domain = url.match(/(qq|iqiyi|youku|tudou|le|mgtv|sohu)\.(?:com|cn)/);
                    return domain ? domain[1] : "";
}

(function(){
	var url =window.location.href;
	var domain= getDomain(url);
	if("sohu"==domain){sohu(url);}
	if("le"==domain){le(url);}
})();
// alert(window.location);


// sohu();
