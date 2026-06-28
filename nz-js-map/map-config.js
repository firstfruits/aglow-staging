var nzjsmapconfig = {
  "default":{
    "borderColor": "#6B8B9E",// Borders Color
    "showNames": true, // true/false to Show/Hide the names
    "namesColor": "#666666",// Default Names Color
    "namesHoverColor": "#FFFFFF",// Names Hover Color
    "showCallouts": true // true/false to Show/Hide the callout boxes (works on white background)
  },
  "nzjsmap_1":{
    "hover": "AUCKLAND",// Info of the popup
    "url": "",// Link to any webpage
    "target": "same_page",// Use "same_page", "new_page", or "none"
    "upColor": "#f3faff",// Default Color
    "overColor": "#005999",// Hover Color
    "active": true // true/false to set it as Active/Inactive
  },
  "nzjsmap_2":{
    "hover": "BAY OF PLENTY",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_3":{
    "hover": "CANTERBURY",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_4":{
    "hover": "GISBORNE",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_5":{
    "hover": "HAWKE’S BAY",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_6":{
    "hover": "MANAWATU-WANGANUI",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_7":{
    "hover": "MARLBOROUGH",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_8":{
    "hover": "NELSON",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_9":{
    "hover": "NORTHLAND",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_10":{
    "hover": "OTAGO",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_11":{
    "hover": "SOUTHLAND",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_12":{
    "hover": "TARANAKI",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_13":{
    "hover": "TASMAN",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_14":{
    "hover": "WAIKATO",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_15":{
    "hover": "WELLINGTON",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  },
  "nzjsmap_16":{
    "hover": "WEST COAST",
    "url": "", "target": "same_page",
    "upColor": "#f3faff", "overColor": "#005999",
    "active": true
  }};

// The following is the script for map interaction DON'T EDIT !!! //
(function(){"use strict";function isTouchEnabled(){return('ontouchstart' in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}
document.addEventListener('DOMContentLoaded',function(){const nzObjAll=document.querySelectorAll('path[id^="nzjsmap_"]');const nzAbbAll=document.querySelectorAll('text[id^="nzjsvn_"]');nzObjAll.forEach(function(nzObj,index){const nzAbb=nzAbbAll[index];const nzTextobj=[nzObj,nzAbb];const id=nzObj.id;addEvent(nzTextobj,id)})});function addEvent(nzTextobj,id){const[nzObj,nzAbb]=nzTextobj;const nzWrapper=document.getElementById('nzjsmapwrapper');const nzVisns=document.getElementById('nzjsvisns');const nzCallouts=document.getElementById('nzjscallouts');const nzTip=document.getElementById('nzjstip');const downColor='#595959';const nzCalloutsColor='#FFFFFF';nzWrapper.style.opacity='1';if(nzjsmapconfig.default.showNames){nzVisns.style.opacity='1';nzVisns.setAttribute('fill',nzjsmapconfig.default.namesColor)}else{nzVisns.style.opacity='0'}
if(nzjsmapconfig.default.showCallouts){nzCallouts.style.visibility='hidden'}else{nzCallouts.style.visibility='visible';nzCallouts.setAttribute('fill',nzCalloutsColor)}
nzObj.setAttribute('fill',nzjsmapconfig[id].upColor);nzObj.setAttribute('stroke',nzjsmapconfig.default.borderColor);if(nzjsmapconfig[id].active){if(isTouchEnabled()){let touchmoved;nzTextobj.forEach(function(textObj){textObj.addEventListener('touchstart',function(){touchmoved=!1;nzObj.setAttribute('fill',nzjsmapconfig[id].upColor);nzTip.style.display='none'});textObj.addEventListener('touchmove',function(){touchmoved=!0});textObj.addEventListener('touchend',function(){if(!touchmoved){nzObj.setAttribute('fill',nzjsmapconfig[id].upColor);if(nzjsmapconfig[id].target==='new_page'){window.open(nzjsmapconfig[id].url)}else if(nzjsmapconfig[id].target==='same_page'){window.location.href=nzjsmapconfig[id].url}
nzTip.style.display='none'}})})}else{nzTextobj.forEach(function(textObj){textObj.style.cursor='pointer';textObj.addEventListener('mouseenter',function(){nzTip.style.display='none';nzObj.setAttribute('fill',nzjsmapconfig[id].overColor);nzAbb.setAttribute('fill',nzjsmapconfig.default.namesHoverColor)});textObj.addEventListener('mouseleave',function(){nzTip.style.display='none';nzObj.setAttribute('fill',nzjsmapconfig[id].upColor);nzAbb.setAttribute('fill',nzjsmapconfig.default.namesColor)});if(nzjsmapconfig[id].target!=='none'){textObj.addEventListener('mousedown',function(){nzObj.setAttribute('fill',downColor)})}
textObj.addEventListener('mouseup',function(){nzTip.style.display='none';nzObj.setAttribute('fill',nzjsmapconfig[id].overColor);if(nzjsmapconfig[id].target==='new_page'){window.open(nzjsmapconfig[id].url)}else if(nzjsmapconfig[id].target==='same_page'){window.location.href=nzjsmapconfig[id].url}});textObj.addEventListener('mousemove',function(e){nzTip.style.display='block';nzTip.innerHTML=nzjsmapconfig[id].hover;let x=e.pageX+10,y=e.pageY+15;let nzTipWidth=nzTip.offsetWidth,nzTipHeight=nzTip.offsetHeight;x=(x+nzTipWidth>window.innerWidth+window.scrollX)?x-nzTipWidth-20:x;y=(y+nzTipHeight>window.innerHeight+window.scrollY)?window.innerHeight+window.scrollY-nzTipHeight-10:y;nzTip.style.left=x+'px';nzTip.style.top=y+'px'})})}}else{nzAbb.style.fillOpacity='0.5';nzTextobj.forEach(function(textObj){textObj.style.cursor='default'})}}})()
