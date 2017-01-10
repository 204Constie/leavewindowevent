(function(document, window){
'use strict';

var pageLeaveModal = {
	addEvent: function(obj, evt, fn) {
	    if (obj.addEventListener) {
	        obj.addEventListener(evt, fn, false);
	    }
	    else if (obj.attachEvent) {
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
	    console.log('e.relatedTarget: ', e.relatedTarget);
	    console.log('e.toElement: ', e.toElement);
	    console.log('e.target: ', e.target);
	    console.log('e.srcElement: ', e.srcElement);
	    var target = e.target || e.srcElement;
	    var tar = e.relatedTarget || e.toElement;
	    var t;

	    if(tar){
	    	t = tar.nodeName.toLowerCase();
	    }

	    if((t === 'html') || target.nodeName.toLowerCase() === 'html'){
	    	pageLeaveModal.showModal();
	        pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
	    }

	    // if (target.nodeName.toLowerCase() === 'html' || t === 'html') {
	    //     pageLeaveModal.showModal();
	    //     pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
	    // }
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

if(window.location.href.indexOf('gclid') > -1){
	setTimeout(function(){
		pageLeaveModal.addEvent(document, 'mouseout', pageLeaveModal.handler);
		pageLeaveModal.showContent();
	}, 1000)

	setTimeout(function(){
		console.log('event removed');
		pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
	}, 15000);
}

})(document, window);