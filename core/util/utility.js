"use strict";

const fs = require('fs');

function clearString(string) {
	return string.replace(/[\r\n\t]/g, '').replace(/\s\s+/g, '').replace(/[\\]/g, "");
}

function getDirList(path) {
    return fs.readdirSync(path).filter(function(file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

function getTime() {
    let today = new Date();
    let hours = ("0" + today.getHours()).substr(-2);
    let minutes = ("0" + today.getMinutes()).substr(-2);
    let seconds = ("0" + today.getSeconds()).substr(-2);
    return hours + "-" + minutes + "-" + seconds;
}

function getDate() {
    let today = new Date();
    let day = ("0" + today.getDate()).substr(-2);
    let month = ("0" + (today.getMonth() + 1)).substr(-2);
    return today.getFullYear() + "-" + month + "-" + day;
}

module.exports.clearString = clearString;
module.exports.getDirList = getDirList;
module.exports.getTime = getTime;
module.exports.getDate = getDate;