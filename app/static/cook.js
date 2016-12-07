var cookbutton = $("#cook-button");
var outputdiv = $("#cook-output-panel");

var assembly_speed = 1.25;

var assemblers = {};
var targets = {};
var rawmats = {};
var products = {};
var cooking = false;

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function finalizecookoutput() {
    var newdiv = $(document.createElement("div"));
    newdiv.append($(document.createElement("h1")).html("done cooking"));
    
    //final products table
    newdiv.append($(document.createElement("h2")).html("net final products output"));
    var prodtable = $(document.createElement("table"));
    prodtable.addClass("pure-table").addClass("output-table");
    var tr = $(document.createElement("tr")).addClass("output-table-header");
    tr.append($(document.createElement("th"))
        .html("final product item")
    );
    prodtable.append(tr);
    for (i in Object.keys(products)) {
        var k = Object.keys(products)[i];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .html(k + " x " + products[k])
        );
        prodtable.append(tr);
    }
    newdiv.append(prodtable);
    
    newdiv.append($(document.createElement("br")));
    
    //raw materials table
    newdiv.append($(document.createElement("h2")).html("net raw materials input"));
    var rawtable = $(document.createElement("table"));
    rawtable.addClass("pure-table").addClass("output-table");
    tr = $(document.createElement("tr")).addClass("output-table-header");
    tr.append($(document.createElement("th"))
        .html("raw material item")
    );
    rawtable.append(tr);
    for (i in Object.keys(rawmats)) {
        var k = Object.keys(rawmats)[i];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .html(k + " x " + rawmats[k])
        );
        rawtable.append(tr);
    }
    newdiv.append(rawtable);
    
    newdiv.append($(document.createElement("br")));
    
    //assemblers table
    newdiv.append($(document.createElement("h2")).html("assemblers"));
    var asstable = $(document.createElement("table"));
    asstable.addClass("pure-table").addClass("output-table");
    tr = $(document.createElement("tr")).addClass("output-table-header");
    tr.append($(document.createElement("th"))
        .html("assemblers")
    );
    tr.append($(document.createElement("th"))
        .html("assembler type")
    );
    tr.append($(document.createElement("th"))
        .html("subproduct")
    );
    tr.append($(document.createElement("th"))
        .html("materials")
    );
    asstable.append(tr);
    for (i in Object.keys(assemblers)) {
        var k = Object.keys(assemblers)[i];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .html(round(assemblers[k],4))
        );
        tr.append($(document.createElement("td"))
            .html("assembling-machine-3")
        );
        tr.append($(document.createElement("td"))
            .html(k + " x " + round(assemblers[k]*60.0,4))
        );
        tr.append($(document.createElement("td"))
            .html("input")
        );
        asstable.append(tr);
    }
    newdiv.append(asstable);
    
    outputdiv.empty().append(newdiv);
    cooking = false;
}

function updatecookoutput() {
    var newdiv = $(document.createElement("div"));
    newdiv.append($(document.createElement("h2")).html("cooking..."));
    newli = newdiv.append($(document.createElement("li")));
    for (i in Object.keys(targets)) {
        newli.append($(document.createElement("ul")).html(Object.keys(targets)[i]));
    }
    outputdiv.empty().append(newdiv);
}

function ajaxcook() {
    if (Object.keys(targets).length > 0) {
        var target = Object.keys(targets)[0];
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/ajax/recipe/target/"+target,
            success: function(r) {
                if ("message" in r) {
                    if (target in rawmats) {
                        rawmats[target] += targets[target];
                    } else {
                        rawmats[target] = targets[target];
                    }
                } else {
                    var equivassembcount = targets[target] * r["energy_required"] / 60.0;
                    if (target in assemblers) {
                        assemblers[target] += equivassembcount;
                    } else {
                        assemblers[target] = equivassembcount;
                    }
                    for (i in r["ingredients"]) {
                        entry = r["ingredients"][i];
                        if (entry.name in targets) {
                            targets[entry.name] += entry.amount;
                        } else {
                            targets[entry.name] = entry.amount;
                        }
                    }
                }
                delete targets[target];
                updatecookoutput();
                ajaxcook();
            }
        });
    } else {
        finalizecookoutput();
    }
}

function startcook(newtargets) {
    assemblers = {};
    rawmats = {};
    targets = {};
    products = {};
    for (i in Object.keys(newtargets)) {
        k = Object.keys(newtargets)[i];
        targets[k] = parseInt(newtargets[k]);
        products[k] = targets[k];
    }
    ajaxcook();
}

function cookbuttonpress(e) {
    if (cooking) {return;}
    cooking = true;
    var newtargets = {}
    $(".target-input").each(function() {
       if ($(this)[0].value > 0) {
           newtargets[$(this)[0].name] = $(this)[0].value;
       }
    });
    startcook(newtargets);
}

function start() {
    cookbutton.on("click", cookbuttonpress);
}

start();