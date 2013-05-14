var cm = require("sdk/context-menu");
var data = require("sdk/self").data;
var panel = require("sdk/panel").Panel({
    width: 602,
    height: 232,
    contentURL: data.url("notify.html")
});
var clipboard = require("sdk/clipboard");

function message(str){
    clipboard.set(str);
    panel.show();
    require('timers').setTimeout(function(){
        panel.hide();
    }, 9000);
}

var frase = cm.Item({
  label: "1 Frasis?",
  image: null,
  data: 1,
  contentScriptFile: data.url("frase.js"),
  onMessage: function(str){
    message(str);
  }
});

var um = cm.Item({
  label: "1 paragrafis?",
  image: null,
  data: 1,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

var dois = cm.Item({
  label: "2 paragrafis?",
  image: null,
  data: 2,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

var tres = cm.Item({
  label: "3 paragrafis?",
  image: null,
  data: 3,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

var quatro = cm.Item({
  label: "4 paragrafis?",
  image: null,
  data: 4,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

var cinco = cm.Item({
  label: "5 paragrafis?",
  image: null,
  data: 5,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

var seis = cm.Item({
  label: "6 paragrafis?",
  image: null,
  data: 6,
  contentScriptFile: data.url("paragrafo.js"),
  onMessage: function(str){
    message(str);
  }
});

cm.Menu({
  label: "Mussum Ipsum",
  context: cm.SelectorContext("*"),
  image: "http://mussumipsum.com/images/icon_mussum.ico",
  items: [frase, um, dois, tres, quatro, cinco, seis]
});
