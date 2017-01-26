(function(document, window){
'use strict';

var pageLeaveModal = {
	addEvent: function(obj, evt, fn) {
	    if (obj.addEventListener) {
	        obj.addEventListener(evt, fn, false);
	    } else if (obj.attachEvent) {
	        obj.attachEvent("on" + evt, fn);
	    }
	},

	removeEvent: function(obj, evt, fn){
		if (obj.removeEventListener) {
	        obj.removeEventListener(evt, fn, false);
	    }
	    else if (obj.detachEvent) {
	        obj.detachEvent("on" + evt, fn);
	    }
	},

	generateRandomEvent: function(){
		var z = Math.floor(Math.random()*2);
		console.log(z);
		if(z == 0){
			//append to url
			window.location.hash = 'gclid';
		}
	},

	handler: function(e) {
	    e = e ? e : window.event;
	    var tar = e.relatedTarget || e.toElement;
	    var t;

	    if(tar){
	    	t = tar.nodeName.toLowerCase();
	    }

	    if(e.target.body){
		    if((t === 'html' || !tar) && !((e.screenX > e.target.body.scrollWidth - 1) && (e.screenX < e.target.body.scrollWidth + 7))){
		    	pageLeaveModal.showModal();
		    	pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
		    }
		} else if(e.target.scrollWidth){
			if((t === 'html' || !tar) && !((e.screenX > e.target.scrollWidth - 1) && (e.screenX < e.target.scrollWidth + 15))){
		    	pageLeaveModal.showModal();
		    	pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
		    }
		}
	},

	showModal: function(){
		$('#myModal').modal('show');
	},

	showContent: function(){
		$('#confirm').click(function(){
			$('#mod').css({'display': 'block'});
		});
	}
};

pageLeaveModal.generateRandomEvent();

console.log('window.location.href.indexOf(\'gclid\'): ', window.location.href.indexOf('gclid'));

if(window.location.href.indexOf('gclid') > -1){
	console.log('hjb');
	pageLeaveModal.addEvent(document, 'mouseout', pageLeaveModal.handler);
	pageLeaveModal.showContent();


	//timeout set to remove the event
	setTimeout(function(){
		console.log('event removed');
		pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
	}, 15000);

}

})(document, window);