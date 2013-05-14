// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  if(info.editable){
    console.log("Paste");
    chrome.tabs.executeScript(
      null, {
      code: 'document.execCommand("insertText", true, "Oiaaaa!!");'
    });
  }else{
    document.execCommand("insertHTML", true, "Oiaaaa!!");
  }
}

// Create one test item for each context type.
var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  // Create a parent item and two children.
  var frase = chrome.contextMenus.create({
    "title": "1 Frasis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var um = chrome.contextMenus.create({
    "title": "1 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var dois = chrome.contextMenus.create({
    "title": "2 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var tres = chrome.contextMenus.create({
    "title": "3 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var quatro = chrome.contextMenus.create({
    "title": "4 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var cinco = chrome.contextMenus.create({
    "title": "5 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
  var seis = chrome.contextMenus.create({
    "title": "6 paragrafis?",
    "onclick": genericOnClick,
    "contexts": [context]
  });
}