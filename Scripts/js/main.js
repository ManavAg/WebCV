var Modal = React.createClass({
  render: function() {
    return (
        <div 
          class="modal fade" 
          id="myModal" 
          tabindex="-1" 
          role="dialog" 
          aria-labelledby="myModalLabel" 
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 
                  class="modal-title heading" 
                  id="myModalLabel" 
                  style="display:inline-block; width:50%">
                  Modal title
                </h4>
                <button 
                  type="button " 
                  class="btn btn-danger btn-xs" 
                  data-dismiss="modal" 
                  aria-hidden="true" 
                  style="margin-left:45%; width:3%; padding-left:0.5%; display:inline-block; position:fixed">
                  &times;
                </button>
              </div>
              <div class="modal-body text"></div>
            </div>
          </div>
		    </div>
      );
  }
});
var Apps = React.createClass({
  render: function() {
    return (
        <div id="apps1"></div>
        <div id="apps2"></div>
      );
  }
});
var Contacts = React.createClass({
  render: function() {
    return (
      <div id="Contacts">
        <a href="mailto:Manav.agarwal4@gmail.com"><img class="contact" src="Pics/Contacts/email.png"></a>
          <a href="http://www.facebook.com/manava1"><img class="contact" src="Pics/Contacts/facebook.png"></a>
          <a href="http://www.twitter.com/manava"><img class="contact" src="Pics/Contacts/twitter.png"></a>
          <a href="http://www.github.com/manava"><img class="contact" src="Pics/Contacts/github.png"></a>
          <a href="http://www.linkedin.com/manava"><img class="contact" src="Pics/Contacts/linkedin.png"></a>
          <a href="http://www.youtube.com/manava"><img class="contact" src="Pics/Contacts/youtube.png"></a>
      </div>
    );
  }
});
var Signature = React.createClass({
  render: function() {
    return (
      <img id="Signature" src="Pics/Signature.png" onClick="DownNameTab();"/>
    );
  }
});
var Language = React.createClass({
  render: function() {
    return (
      <div id="Lang1" class="ChangeLanguage" onClick="DownLangTab();">EN &#9660;</div>
      <div id="Lang2" class="ChangeLanguage" onClick="SelectLang();"></div>
    );
  }
});
var screen = React.createClass({
  render: function() {
    return (
      <div id="screen">
        <Language />
        <Signature />
        <Contacts />
        <Apps />
        <Modal />
      </div>
    );
  }
});
