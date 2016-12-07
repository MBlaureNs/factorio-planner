var cookbutton = $("#cook-button");
var outputdiv = $("#cook-output-panel");

var assembly_speed = 1.25;

var assemblers = {};
var targets = {};
var rawmats = {};
var products = {};
var cooking = false;

var recipecache = {};
var itemcache = {};

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function finalizecookoutput() {
    var itemimglist = [];
    var newdiv = $(document.createElement("div"));
    newdiv.append($(document.createElement("h1")).html("done cooking"));
    
    //final products table
    newdiv.append($(document.createElement("h2")).html("net final products output"));
    var prodtable = $(document.createElement("table"));
    prodtable.addClass("pure-table").addClass("output-table");
    var tr = $(document.createElement("tr")).addClass("output-table-header");
    tr.append($(document.createElement("th"))
        .html("final product per minute")
    );
    prodtable.append(tr);
    for (i in Object.keys(products)) {
        var k = Object.keys(products)[i];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .append($(document.createElement("img"))
                    .addClass(k+"-img")
                    .attr("alt",k)
                    )
            .append(" x " + products[k])
        );
        itemimglist.push(k);
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
        .html("raw material per minute")
    );
    rawtable.append(tr);
    for (i in Object.keys(rawmats)) {
        var k = Object.keys(rawmats)[i];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .append($(document.createElement("img"))
                    .addClass(k+"-img")
                    .attr("alt",k)
                    )
            .append(" x " + rawmats[k])
        );
        itemimglist.push(k);
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
        .html("subproduct")
    );
    tr.append($(document.createElement("th"))
        .html("materials")
    );
    asstable.append(tr);
    for (i in Object.keys(assemblers)) {
        var k = Object.keys(assemblers)[i];
        var recipe = recipecache[k];
        tr = $(document.createElement("tr"));
        tr.append($(document.createElement("td"))
            .append($(document.createElement("img"))
                    .attr("src","https://wiki.factorio.com/images/Assembling-machine-3.png")
                    .attr("alt","assembling-machine-3")
                    )
            .append(" x " + round(assemblers[k],4))
        );
        tr.append($(document.createElement("td"))
            .append($(document.createElement("img"))
                    .addClass(k+"-img")
                    .attr("alt",k)
                    )
            .append(" x " + round(assemblers[k]*60.0/recipe["energy_required"]*recipe["result_count"],4))
        );
        itemimglist.push(k);
        var mattd = $(document.createElement("td"));
        for (i in recipe["ingredients"]) {
            ing = recipe["ingredients"][i];
            mattd.append($(document.createElement("img"))
                         .addClass(ing["name"]+"-img")
                         .attr("alt",ing["name"])
                         )
                 .append(" x " + round(ing["amount"] * assemblers[k] * 60.0 / recipe["energy_required"],4));
            itemimglist.push(ing["name"]);
        }
        tr.append(mattd);
        asstable.append(tr);
    }
    newdiv.append(asstable);
    
    outputdiv.empty().append(newdiv);
    cooking = false;
    
    for (i in itemimglist) {
        itemimg = itemimglist[i];
        ajaxloadimage(itemimg);
    }
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

function loadimagecallback(item) {
    $("."+item["name"]+"-img").each(function (index) {
        $(this).attr("src",item["iconurl"]);
    });
}

function ajaxloadimage(k) {
    if (k in itemcache) {
        loadimagecallback(itemcache[k]);
    } else {
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/ajax/item/"+k,
            success: function(r) {                    
                if (!(r["name"] in itemcache)) {
                    itemcache[r["name"]] = r;
                }
                loadimagecallback(r);
            }
        });
    }
}

function cookcallback(r) {
    target = r["result"];
    if ("message" in r) {
        if (target in rawmats) {
            rawmats[target] += targets[target];
        } else {
            rawmats[target] = targets[target];
        }
    } else {
        var equivassembcount = targets[target] * r["energy_required"] / r["result_count"] / 60.0;
        if (target in assemblers) {
            assemblers[target] += equivassembcount;
        } else {
            assemblers[target] = equivassembcount;
        }
        for (i in r["ingredients"]) {
            entry = r["ingredients"][i];
            if (entry.name in targets) {
                targets[entry.name] += entry.amount * targets[target] / r["result_count"];
            } else {
                targets[entry.name] = entry.amount * targets[target] / r["result_count"];
            }
        }
    }
    delete targets[target];
    updatecookoutput();
    ajaxcook();
}

function ajaxcook() {
    if (Object.keys(targets).length > 0) {
        var target = Object.keys(targets)[0];
        if (target in recipecache) {
            var r = recipecache[target];
            cookcallback(r);
        } else {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: "/ajax/recipe/target/"+target,
                success: function(r) {                    
                    if (!(r["result"] in recipecache)) {
                        recipecache[r["result"]] = r;
                    }
                    cookcallback(r);
                }
            });
        }
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