/*
* Description: 
*
* Author: Neo
*/
"use strict";

//new improved using double nested loops
function showData(prop, value) {

    let element = 
    "<tr><td>" + prop + "</td><td><input type='text' /></td></tr>";

    $("#productBody").append(element);

    // if(value == "true") {
    //     $("tr:contains(Discontinued) input").css({color : "red"});
    // }
}

function addCourse() {
    $.post("api/courses", $("#courseForm").serialize(), function(data) {
        $("#msgDiv").text("Saved!");
    });
    return false;
}

$(function() {
    let objs;
    $.getJSON("/api/courses", function(data) {
        objs = data;

        // for(let i in objs[0]) {
        //     if(i != "id")
        //         showData(i, objs[0][i]);
        // }
    });

    $("#addBtn").on("click", function() {
        alert("Feature Pending");

        addCourse();
    });

    $("#cancelBtn").on("click", function() {
        location.href = "index.html";
    });
});