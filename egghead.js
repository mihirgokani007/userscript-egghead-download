// ==UserScript==
// @name         Egghead Download Link Generator
// @namespace    http://mihirgokani.in
// @version      0.9
// @description  Create direct links to Egghead videos
// @author       Mihir Gokani
// @match        https://egghead.io/courses/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var LESSONS_REGEX = /['"](https:\/\/egghead.io\/lessons\/[^\/"'\?]+)["'\?]/g;

    var lessons = $('html').html().match(LESSONS_REGEX).filter(function(item, i, self) {
        return self.indexOf(item) === i;
    }).map(function(val) {
        return val.slice(1, -1);
    });

    console.log("Found", lessons.length, "lessons:");
    console.log(lessons.join("\n"));
})();
