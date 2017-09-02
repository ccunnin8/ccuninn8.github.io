$(document).ready(function(){
	var badges_container = $(".badges-container");
	$.ajax({
		url: "http://www.teamtreehouse.com/coreycunningham.json",
		success: function(data){
			data.badges.forEach(function(badge){
			$(".badges-container").prepend("<div><img src='" + badge.icon_url + "'data-tooltip aria-haspopup='true' class='has-tip' data-disable-hover='false' tabindex='1' title='" + badge.name + "'/></div>");
			})	
		}
	});
});