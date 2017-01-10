(function(){

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
		console.log(pageLeaveModal);
	    e = e ? e : window.event;
	    var target = e.target || e.srcElement;
	    if (target.nodeName == "HTML") {
	        pageLeaveModal.showModal();
	        pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
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

if(window.location.href.indexOf('gclid') > -1){
	pageLeaveModal.addEvent(document, 'mouseout', pageLeaveModal.handler);
	pageLeaveModal.showContent();
}

})();