/*
* Description: 
*
* Author: Neo
*/
"use strict";

function displayData(list) {
    for(let i = 0; i < list.length; i++) {
        if($("#productDDL").val() == list[i].dept) {
            insertTableRow(list[i]);
        }
    }
}

function insertTableRow(list) {
    let courseId = list.id;
    let courseNum = list.courseNum;
    let courseName = list.courseName;
    let instructor = list.instructor;

    let element = 
    "<tr><td>" + courseNum + 
    "</td><td>" + courseName + 
    "</td><td>" + instructor + 
    "</td><td><a href='details.html?courseId=" + courseId + "'>View Details</a>"+ 
    "</a></td></tr>";

    $("#productBody").append(element);
}

$(function() {
    let objs;
    $.getJSON("/api/courses", function(data) {
        objs = data;
    });

    $("#productDDL").on("change", function() {
        $("#productBody").empty();
        displayData(objs);
    });
    
    $("#addBtn").on("click", function() {
        location.href = "new_course.html";
    });

    // Bind Click Event Handler to Reset Buttom
    $("#resetBtn").on("click", function() {
        $("#productBody").empty();
    });
});