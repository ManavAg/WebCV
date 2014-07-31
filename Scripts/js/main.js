var Modal = React.createClass({
  render: function() {
    return (
        <div 
          className="modal fade" 
          id="myModal" 
          tabindex="-1" 
          role="dialog" 
          aria-labelledby="myModalLabel" 
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 
                  className="modal-title heading" 
                  id="myModalLabel" 
                  style="display:inline-block; width:50%">
                  Modal title
                </h4>
                <button 
                  type="button " 
                  className="btn btn-danger btn-xs" 
                  data-dismiss="modal" 
                  aria-hidden="true" 
                  style="margin-left:45%; width:3%; padding-left:0.5%; display:inline-block; position:fixed">
                  &times;
                </button>
              </div>
              <div className="modal-body text"></div>
            </div>
          </div>
		    </div>
      );
  }
});
var Apps = React.createClass({
  render: function() {
    return (
        <div>
          <div id="apps1"></div>
          <div id="apps2"></div>
        </div>
      );
  }
});
var Contacts = React.createClass({
  render: function() {
    return (
      <div id="Contacts">
        <a href="mailto:Manav.agarwal4@gmail.com">
          <img className="contact" src="Pics/Contacts/email.png"/>
        </a>
        <a href="http://www.facebook.com/manava1">
          <img className="contact" src="Pics/Contacts/facebook.png"/>
        </a>
        <a href="http://www.twitter.com/manava">
          <img className="contact" src="Pics/Contacts/twitter.png"/>
        </a>
        <a href="http://www.github.com/manava">
          <img className="contact" src="Pics/Contacts/github.png"/>
        </a>
        <a href="http://www.linkedin.com/manava">
          <img className="contact" src="Pics/Contacts/linkedin.png"/>
        </a>
        <a href="http://www.youtube.com/manava">
          <img className="contact" src="Pics/Contacts/youtube.png"/>
        </a>
      </div>
    );
  }
});
var Signature = React.createClass({
  render: function() {
    return (
      <img 
        id="Signature" 
        src="Pics/Signature.png" 
        onClick="DownNameTab();"/>
    );
  }
});
var Language = React.createClass({
  render: function() {
    return (
      <div>
        <div 
          id="Lang1" 
          className="ChangeLanguage" 
          onClick="DownLangTab();">
          EN &#9660;
        </div>
        <div 
          id="Lang2" 
          className="ChangeLanguage" 
          onClick="SelectLang();">
        </div>
      </div>
    );
  }
});
var Screen = React.createClass({
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

$(document).ready(function(){
    /* jshint ignore:start */
  var $tabletBlock = document.getElementById('tablet');
    React.renderComponent(<Screen />, $tabletBlock);
    /* jshint ignore:end */
});
