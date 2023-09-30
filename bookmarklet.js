javascript: (() => {
	/* 
		https://github.com/Swift42/sa_notif/
	*/
	document.addEventListener('click', function(e) 
	{
		var href;
		var target = e.target || e.srcElement;
		if (target.tagName.toLowerCase() === 'span' && target.parentElement.tagName.toLowerCase()==='button' && target.innerHTML=='Initiate Mining') 
		{
			var els = document.evaluate("//p[contains(., 'NAME / CALLSIGN')]", document, null, XPathResult.ANY_TYPE, null );
			var el = els.iterateNext();
			var fleetName=el.nextSibling.children[0].innerHTML;
			console.log('Fleet name: '+fleetName);

			var time=target.parentElement.parentElement.previousSibling.innerHTML;
			console.log('Mining time: '+time);
			var seconds=window.timeStringToSeconds(time);
			setTimeout(function() { window.notifyMe("Mining done: "+fleetName); },seconds*1000);
		}
		const regex = /START \((.*)\)/;
		var match=target.innerHTML.match(regex);
		if (target.tagName.toLowerCase() === 'span' && target.parentElement.tagName.toLowerCase()==='button' && match) 
		{
			var els = document.evaluate("//h2[contains(., 'Tier ')]", document, null, XPathResult.ANY_TYPE, null );
			var el = els.iterateNext();
			var rssName = el.innerHTML;
			console.log('RSS name: '+rssName);
		
			var time=match[1];
			console.log('Crafting time: '+time);
			var seconds=window.timeStringToSeconds(time);
			setTimeout(function() { window.notifyMe("Crafting done: "+rssName); },seconds*1000);
		}		
  });
	window.timeStringToSeconds=function(time)
	{
		var timeChunks=time.split(' ');
		var seconds=0;
		timeChunks.forEach(el => 
		{
			if(el.substring(el.length-1,el.length)=='s') seconds+=parseInt(el.substring(0,el.length-1));
			if(el.substring(el.length-1,el.length)=='m') seconds+=parseInt(el.substring(0,el.length-1))*60;
			if(el.substring(el.length-1,el.length)=='h') seconds+=parseInt(el.substring(0,el.length-1))*60*60;			
			if(el.substring(el.length-1,el.length)=='d') seconds+=parseInt(el.substring(0,el.length-1))*60*60*24;			
		});
		console.log('Time in seconds: '+seconds);
		return seconds;
	};
	window.notifyMe=function(msg) {
		if (!("Notification" in window)) {
			alert("This browser does not support desktop notification");
		} else if (Notification.permission === "granted") {
			const notification = new Notification(msg);
		} else if (Notification.permission !== "denied") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					const notification = new Notification(msg);
				}
			});
		}	
	};
	window.notifyMe('Mining/crafting event listener added.');	
})();
