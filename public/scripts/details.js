/*
* Description: 
*
* Author: Neo
*/
"use strict";

//new improved using double nested loops
function showData(prop, value) {
    if(typeof value === 'string') {
        value = value.replace("'", "`");
    }

    let element = 
    "<tr><td>" + prop + "</td><td><input type='text' value='" + value + 
    "' disabled /></td></tr>";

    $("#productBody").append(element);
}

$(function() {
    let urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get("courseId");
    
    //let storage;

    let objs;
    $.getJSON("/api/courses/" + courseId, function(data) {
        objs = data;
        
        for(let i in objs) {
            showData(i, objs[i])
            //storage = objs[i][j].newValue;
            //console.log(storage);
        }
    });

    $("#saveBtn").hide();
    $("#cancelBtn").hide();
    $("#editBtn").on("click", function() {
        $("input:not([type='button'])").prop("disabled", false);

        //console.log($("input:text").val());

        $("#saveBtn").show();
        $("#cancelBtn").show();
        $("#editBtn").hide();
    });

    $("#saveBtn").on("click", function() {
        alert("Feature Pending");
        $("input:not([type='button'])").prop("disabled", true);

        $("#editBtn").show();
        $("#saveBtn").hide();
        $("#cancelBtn").hide();
    });

    $("#cancelBtn").on("click", function() {
        $("input:not([type='button'])").prop("disabled", true);

        $("#editBtn").show();
        $("#saveBtn").hide();
        $("#cancelBtn").hide();
    });
});