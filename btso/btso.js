// ==UserScript==
// @name         btso
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/nukewarrior/UserScript/master/btso/btso.js      
// @description  try to take over the world!
// @author       Yang
// @match        https://btsow.bar/*
// @icon         https://btsow.bar/app/bts/View/img/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("script start");

    var main_container = document.getElementsByClassName("container")[2]

    var h3_block = document.querySelectorAll("h3")[0];
    h3_block.parentNode.removeChild(h3_block);

    var tags = document.getElementsByClassName("tags-box")[1];
    tags.parentNode.removeChild(tags);

    var links = document.getElementsByClassName("pull-right ishare")[0];
    links.parentNode.removeChild(links);

    var search_text = document.getElementsByClassName("form-control")[1];
    search_text.setAttribute("size", "80");

    var search_box = document.getElementsByClassName("input-group")[1];
    // search_box.style.left = (document.documentElement.clientWidth - search_box.clientWidth) / 2 + 'px';
    search_box.style.left = (main_container.clientWidth - search_box.clientWidth) / 2 + 'px';

    //var page_bar = document.getElementsByClassName("text-center hidden-xs")[1];
    //page_bar.style.left=(document.documentElement.clientWidth-page_bar.clientWidth)/2+'px';


    console.log("script end");
})();