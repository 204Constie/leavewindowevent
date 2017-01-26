



<div id="mod" class="popElement"></div>

<div></div>

<div id="myModal" class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button id="confirm" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div style="margin-top: 5px; height: 1000px; width: 20px; background-color: red;"></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script>
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

if(window.location.href.indexOf('gclid') > -1){
  pageLeaveModal.addEvent(document, 'mouseout', pageLeaveModal.handler);
  pageLeaveModal.showContent();


  //timeout set to remove the event
  setTimeout(function(){
    pageLeaveModal.removeEvent(document, 'mouseout', pageLeaveModal.handler);
  }, 15000);

}

})(document, window);
</script>

