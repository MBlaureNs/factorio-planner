var conn = new Mongo();
db = conn.getDB("fact");
db.recipe.drop();
db.item.drop();

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "filter-inserter";
ings = [];
i = {};
i["name"] = "fast-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "filter-inserter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "stone-brick";
doc["energy_required"] = 3.5;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = true;
doc["type"] = "recipe";
doc["name"] = "stone-brick";
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "iron-axe";
doc["type"] = "recipe";
doc["name"] = "iron-axe";
ings = [];
i = {};
i["name"] = "iron-stick";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "land-mine";
doc["energy_required"] = 5;
doc["result_count"] = 4;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "land-mine";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result_count"] = 2;
doc["result"] = "small-electric-pole";
doc["type"] = "recipe";
doc["name"] = "small-electric-pole";
ings = [];
i = {};
i["name"] = "wood";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "flame-thrower-ammo";
doc["energy_required"] = 3;
ings = [];
i = {};
i["type"] = "item";
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "light-oil";
i["amount"] = 2.5;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "heavy-oil";
i["amount"] = 2.5;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "flame-thrower-ammo";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "piercing-rounds-magazine";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "piercing-rounds-magazine";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "rail";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rail";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "flame-thrower";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "flame-thrower";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "construction-robot";
ings = [];
i = {};
i["name"] = "flying-robot-frame";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "construction-robot";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "discharge-defense-remote";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "discharge-defense-remote";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/fill-crude-oil-barrel.png";
doc["order"] = "b[fill-crude-oil-barrel]";
doc["category"] = "crafting-with-fluid";
doc["subgroup"] = "barrel";
doc["energy_required"] = 1;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "crude-oil-barrel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "crude-oil";
i["amount"] = 25;
ings.push(i);
i = {};
i["type"] = "item";
i["name"] = "empty-barrel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fill-crude-oil-barrel";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 60;
doc["result"] = "effectivity-module-3";
ings = [];
i = {};
i["name"] = "effectivity-module-2";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "effectivity-module-3";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "assembling-machine-3";
ings = [];
i = {};
i["name"] = "speed-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "assembling-machine-2";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "assembling-machine-3";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 4;
doc["result"] = "shotgun";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "wood";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "shotgun";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 60;
doc["result"] = "productivity-module-3";
ings = [];
i = {};
i["name"] = "productivity-module-2";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "productivity-module-3";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "night-vision-equipment";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "night-vision-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "heavy-armor";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "heavy-armor";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "processing-unit";
doc["energy_required"] = 15;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "sulfuric-acid";
i["amount"] = 0.5;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "processing-unit";
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "rocket-part";
ings = [];
i = {};
i["name"] = "low-density-structure";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "rocket-fuel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "rocket-control-unit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["energy_required"] = 3;
doc["category"] = "rocket-building";
doc["hidden"] = true;
doc["type"] = "recipe";
doc["name"] = "rocket-part";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "assembling-machine-1";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 9;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "assembling-machine-1";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "fast-inserter";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fast-inserter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "sulfur";
i["amount"] = 2;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 1;
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 3;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "petroleum-gas";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "sulfur";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "long-handed-inserter";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "long-handed-inserter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 5;
doc["enabled"] = false;
doc["result"] = "electric-furnace";
doc["type"] = "recipe";
doc["name"] = "electric-furnace";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 1;
doc["energy_required"] = 30;
doc["result"] = "rocket-silo";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1000;
ings.push(i);
i = {};
i["name"] = "concrete";
i["amount"] = 1000;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 200;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 200;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rocket-silo";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "exoskeleton-equipment";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "exoskeleton-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "sulfuric-acid";
i["amount"] = 5;
res.push(i);
doc["results"] = res;
doc["subgroup"] = "fluid-recipes";
doc["energy_required"] = 1;
ings = [];
i = {};
i["type"] = "item";
i["name"] = "sulfur";
i["amount"] = 5;
ings.push(i);
i = {};
i["type"] = "item";
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "sulfuric-acid";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "plastic-bar";
i["amount"] = 2;
res.push(i);
doc["results"] = res;
doc["requester_paste_multiplier"] = 4;
doc["energy_required"] = 1;
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "petroleum-gas";
i["amount"] = 3;
ings.push(i);
i = {};
i["type"] = "item";
i["name"] = "coal";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "plastic-bar";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 5;
doc["energy_required"] = 8;
doc["result"] = "advanced-circuit";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "advanced-circuit";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "gate";
ings = [];
i = {};
i["name"] = "stone-wall";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "gate";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/heavy-oil-cracking.png";
doc["main_product"] = "";
doc["enabled"] = false;
doc["category"] = "chemistry";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "light-oil";
i["amount"] = 3;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 5;
doc["order"] = "b[fluid-chemistry]-a[heavy-oil-cracking]";
doc["subgroup"] = "fluid-recipes";
doc["type"] = "recipe";
doc["name"] = "heavy-oil-cracking";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 3;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "heavy-oil";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "fusion-reactor-equipment";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 30;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fusion-reactor-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "rail-chain-signal";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rail-chain-signal";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "rocket-fuel";
doc["energy_required"] = 30;
ings = [];
i = {};
i["name"] = "solid-fuel";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "rocket-fuel";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 30;
doc["result"] = "speed-module-2";
ings = [];
i = {};
i["name"] = "speed-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "speed-module-2";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "battery";
doc["energy_required"] = 5;
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "sulfuric-acid";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "battery";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "railgun";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "railgun";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result_count"] = 2;
doc["result"] = "copper-cable";
doc["type"] = "recipe";
doc["name"] = "copper-cable";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "speed-module";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "speed-module";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["energy_required"] = 1;
doc["result"] = "splitter";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "splitter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3.5;
doc["result"] = "copper-plate";
ings = [];
i = {};
i["name"] = "copper-ore";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "copper-plate";
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "low-density-structure";
doc["energy_required"] = 30;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "low-density-structure";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 1;
doc["result"] = "loader";
ings = [];
i = {};
i["name"] = "inserter";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "loader";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "slowdown-capsule";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "slowdown-capsule";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 20;
doc["enabled"] = false;
doc["result"] = "oil-refinery";
doc["type"] = "recipe";
doc["name"] = "oil-refinery";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "steel-chest";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 8;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "steel-chest";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "small-plane";
doc["energy_required"] = 30;
ings = [];
i = {};
i["name"] = "plastic-bar";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 200;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 100;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "small-plane";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "defender-capsule";
ings = [];
i = {};
i["name"] = "piercing-rounds-magazine";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "defender-capsule";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 30;
doc["result"] = "productivity-module-2";
ings = [];
i = {};
i["name"] = "productivity-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "productivity-module-2";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "submachine-gun";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "submachine-gun";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "chemical-plant";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "chemical-plant";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 30;
doc["result"] = "effectivity-module-2";
ings = [];
i = {};
i["name"] = "effectivity-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "effectivity-module-2";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "explosive-rocket";
ings = [];
i = {};
i["name"] = "rocket";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "explosive-rocket";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "destroyer-capsule";
ings = [];
i = {};
i["name"] = "distractor-capsule";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "speed-module";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "destroyer-capsule";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "car";
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 8;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "car";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 5;
doc["result"] = "science-pack-1";
doc["type"] = "recipe";
doc["name"] = "science-pack-1";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "explosive-cannon-shell";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "explosive-cannon-shell";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "logistic-chest-active-provider";
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "logistic-chest-active-provider";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "substation";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "substation";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "battery-equipment";
ings = [];
i = {};
i["name"] = "battery";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "battery-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["energy_required"] = 2;
doc["result"] = "fast-splitter";
ings = [];
i = {};
i["name"] = "splitter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fast-splitter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "railgun-dart";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "railgun-dart";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "underground-belt";
doc["requester_paste_multiplier"] = 4;
doc["energy_required"] = 1;
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "underground-belt";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/advanced-oil-processing.png";
doc["enabled"] = false;
doc["category"] = "oil-processing";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "heavy-oil";
i["amount"] = 1;
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = "light-oil";
i["amount"] = 4.5;
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = "petroleum-gas";
i["amount"] = 5.5;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 5;
doc["order"] = "a[oil-processing]-b[advanced-oil-processing]";
doc["subgroup"] = "fluid-recipes";
doc["type"] = "recipe";
doc["name"] = "advanced-oil-processing";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 5;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "crude-oil";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "alien-science-pack";
doc["energy_required"] = 12;
doc["result_count"] = 10;
ings = [];
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "alien-science-pack";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "steam-engine";
doc["type"] = "recipe";
doc["name"] = "steam-engine";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["enabled"] = false;
doc["result"] = "steel-furnace";
doc["type"] = "recipe";
doc["name"] = "steel-furnace";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 8;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "fast-transport-belt";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fast-transport-belt";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "logistic-chest-requester";
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "logistic-chest-requester";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "beacon";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "beacon";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "repair-pack";
doc["type"] = "recipe";
doc["name"] = "repair-pack";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "roboport";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 45;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 45;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 45;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "roboport";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 20;
doc["result"] = "flamethrower-turret";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "engine-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "flamethrower-turret";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "player-port";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "player-port";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 12;
doc["result"] = "science-pack-3";
ings = [];
i = {};
i["name"] = "battery";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "filter-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "science-pack-3";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "cargo-wagon";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "cargo-wagon";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "energy-shield-mk2-equipment";
ings = [];
i = {};
i["name"] = "energy-shield-equipment";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "energy-shield-mk2-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "express-underground-belt";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "fast-underground-belt";
i["amount"] = 2;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "lubricant";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result_count"] = 2;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "express-underground-belt";
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 0.5;
doc["result"] = "electric-energy-interface";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "electric-energy-interface";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3.5;
doc["result"] = "iron-plate";
ings = [];
i = {};
i["name"] = "iron-ore";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "iron-plate";
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "light-armor";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 40;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "light-armor";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "tank";
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 16;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "tank";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
ings = [];
i = {};
i["name"] = "concrete";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "hazard-concrete";
doc["energy_required"] = 0.25;
doc["result_count"] = 10;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "hazard-concrete";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
ings = [];
i = {};
i["name"] = "stone-brick";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-ore";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "concrete";
doc["energy_required"] = 10;
doc["result_count"] = 10;
doc["category"] = "crafting-with-fluid";
doc["type"] = "recipe";
doc["name"] = "concrete";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "assembling-machine-2";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 9;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "assembling-machine-1";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "assembling-machine-2";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "energy-shield-equipment";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "energy-shield-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "cannon-shell";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "cannon-shell";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "satellite";
doc["energy_required"] = 3;
ings = [];
i = {};
i["name"] = "low-density-structure";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "solar-panel";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "accumulator";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "radar";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "rocket-fuel";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "satellite";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "rocket-control-unit";
doc["energy_required"] = 30;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "speed-module";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "rocket-control-unit";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "express-splitter";
doc["energy_required"] = 2;
ings = [];
i = {};
i["name"] = "fast-splitter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "lubricant";
i["amount"] = 8;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "express-splitter";
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "poison-capsule";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "poison-capsule";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "constant-combinator";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "constant-combinator";
doc["enabled"] = "false";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "decider-combinator";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "decider-combinator";
doc["enabled"] = "false";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "electronic-circuit";
doc["type"] = "recipe";
doc["name"] = "electronic-circuit";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "arithmetic-combinator";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "arithmetic-combinator";
doc["enabled"] = "false";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["enabled"] = false;
doc["category"] = "crafting";
doc["subgroup"] = "barrel";
doc["energy_required"] = 1;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "empty-barrel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
doc["type"] = "recipe";
doc["name"] = "empty-barrel";
ings = [];
i = {};
i["type"] = "item";
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 2;
doc["result_count"] = 1;
doc["result"] = "firearm-magazine";
doc["type"] = "recipe";
doc["name"] = "firearm-magazine";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 2;
doc["result"] = "small-pump";
ings = [];
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "small-pump";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "gun-turret";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "gun-turret";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "storage-tank";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "storage-tank";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "distractor-capsule";
ings = [];
i = {};
i["name"] = "defender-capsule";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "distractor-capsule";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 2;
doc["result"] = "power-switch";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "power-switch";
doc["enabled"] = "false";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 20;
doc["enabled"] = false;
doc["result"] = "flying-robot-frame";
doc["type"] = "recipe";
doc["name"] = "flying-robot-frame";
ings = [];
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 2;
doc["result"] = "electric-mining-drill";
doc["type"] = "recipe";
doc["name"] = "electric-mining-drill";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["enabled"] = false;
doc["energy_required"] = 20;
doc["result"] = "electric-engine-unit";
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "lubricant";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "electric-engine-unit";
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["enabled"] = false;
doc["energy_required"] = 20;
doc["result"] = "engine-unit";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "engine-unit";
doc["category"] = "advanced-crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 20;
doc["enabled"] = false;
doc["result"] = "pumpjack";
doc["type"] = "recipe";
doc["name"] = "pumpjack";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 1;
doc["enabled"] = false;
doc["result"] = "deconstruction-planner";
doc["type"] = "recipe";
doc["name"] = "deconstruction-planner";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 5;
doc["enabled"] = false;
doc["result"] = "blueprint-book";
doc["type"] = "recipe";
doc["name"] = "blueprint-book";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 15;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "medium-electric-pole";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "medium-electric-pole";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "accumulator";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "accumulator";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 1;
doc["enabled"] = false;
doc["result"] = "blueprint";
doc["type"] = "recipe";
doc["name"] = "blueprint";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 1;
doc["energy_required"] = 20;
doc["result"] = "power-armor";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "power-armor";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "lubricant";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
doc["subgroup"] = "fluid-recipes";
doc["energy_required"] = 1;
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "heavy-oil";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "lubricant";
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "cluster-grenade";
ings = [];
i = {};
i["name"] = "grenade";
i["amount"] = 7;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "cluster-grenade";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "boiler";
doc["type"] = "recipe";
doc["name"] = "boiler";
ings = [];
i = {};
i["name"] = "stone-furnace";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "big-electric-pole";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "big-electric-pole";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "grenade";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "grenade";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 5;
doc["result"] = "rocket-launcher";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rocket-launcher";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "diesel-locomotive";
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 30;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "diesel-locomotive";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "personal-laser-defense-equipment";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "laser-turret";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "personal-laser-defense-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "logistic-chest-storage";
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "logistic-chest-storage";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "logistic-chest-passive-provider";
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "logistic-chest-passive-provider";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "radar";
doc["type"] = "recipe";
doc["name"] = "radar";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "logistic-robot";
ings = [];
i = {};
i["name"] = "flying-robot-frame";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "logistic-robot";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "explosives";
doc["energy_required"] = 5;
ings = [];
i = {};
i["type"] = "item";
i["name"] = "sulfur";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "item";
i["name"] = "coal";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["type"] = "recipe";
doc["name"] = "explosives";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "express-loader";
ings = [];
i = {};
i["name"] = "express-transport-belt";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "fast-loader";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "express-loader";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "discharge-defense-equipment";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "laser-turret";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "discharge-defense-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "piercing-shotgun-shell";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "piercing-shotgun-shell";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "iron-gear-wheel";
doc["type"] = "recipe";
doc["name"] = "iron-gear-wheel";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "fast-underground-belt";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "underground-belt";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fast-underground-belt";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "green-wire";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "green-wire";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "express-transport-belt";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "fast-transport-belt";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "lubricant";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "express-transport-belt";
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result_count"] = 2;
doc["result"] = "iron-stick";
doc["type"] = "recipe";
doc["name"] = "iron-stick";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "wooden-chest";
doc["type"] = "recipe";
doc["name"] = "wooden-chest";
ings = [];
i = {};
i["name"] = "wood";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result_count"] = 2;
doc["result"] = "pipe-to-ground";
doc["type"] = "recipe";
doc["name"] = "pipe-to-ground";
ings = [];
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 20;
doc["result"] = "laser-turret";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 12;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "laser-turret";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-heavy-oil.png";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "heavy-oil";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "solid-fuel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 3;
doc["order"] = "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]";
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "solid-fuel-from-heavy-oil";
doc["subgroup"] = "fluid-recipes";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "shotgun-shell";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "shotgun-shell";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "steel-plate";
doc["energy_required"] = 17.5;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "steel-plate";
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 60;
doc["result"] = "speed-module-3";
ings = [];
i = {};
i["name"] = "speed-module-2";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "speed-module-3";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "stack-inserter";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "fast-inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "stack-inserter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "battery-mk2-equipment";
ings = [];
i = {};
i["name"] = "battery-equipment";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "battery-mk2-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 2;
doc["result"] = "burner-mining-drill";
doc["type"] = "recipe";
doc["name"] = "burner-mining-drill";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "stone-furnace";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "offshore-pump";
doc["type"] = "recipe";
doc["name"] = "offshore-pump";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 6;
doc["result"] = "science-pack-2";
doc["type"] = "recipe";
doc["name"] = "science-pack-2";
ings = [];
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 3;
doc["result"] = "fast-loader";
ings = [];
i = {};
i["name"] = "fast-transport-belt";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "loader";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "fast-loader";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 5;
doc["result"] = "lab";
doc["type"] = "recipe";
doc["name"] = "lab";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "rocket";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rocket";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/basic-oil-processing.png";
doc["enabled"] = false;
doc["category"] = "oil-processing";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "heavy-oil";
i["amount"] = 3;
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = "light-oil";
i["amount"] = 3;
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = "petroleum-gas";
i["amount"] = 4;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 5;
doc["order"] = "a[oil-processing]-a[basic-oil-processing]";
doc["subgroup"] = "fluid-recipes";
doc["type"] = "recipe";
doc["name"] = "basic-oil-processing";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "crude-oil";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "steel-axe";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "steel-axe";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "petroleum-gas";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "solid-fuel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 3;
doc["order"] = "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]";
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "solid-fuel-from-petroleum-gas";
doc["subgroup"] = "fluid-recipes";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "pipe";
doc["type"] = "recipe";
doc["name"] = "pipe";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "stone-wall";
ings = [];
i = {};
i["name"] = "stone-brick";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "stone-wall";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 1;
doc["result"] = "pistol";
doc["type"] = "recipe";
doc["name"] = "pistol";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "personal-roboport-equipment";
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 45;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "personal-roboport-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/light-oil-cracking.png";
doc["main_product"] = "";
doc["enabled"] = false;
doc["category"] = "chemistry";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "petroleum-gas";
i["amount"] = 2;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 5;
doc["order"] = "b[fluid-chemistry]-b[light-oil-cracking]";
doc["subgroup"] = "fluid-recipes";
doc["type"] = "recipe";
doc["name"] = "light-oil-cracking";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "water";
i["amount"] = 3;
ings.push(i);
i = {};
i["type"] = "fluid";
i["name"] = "light-oil";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 1;
doc["energy_required"] = 25;
doc["result"] = "power-armor-mk2";
ings = [];
i = {};
i["name"] = "effectivity-module-3";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "speed-module-3";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "power-armor-mk2";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-light-oil.png";
ings = [];
i = {};
i["type"] = "fluid";
i["name"] = "light-oil";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = "solid-fuel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
doc["energy_required"] = 3;
doc["order"] = "b[fluid-chemistry]-c[solid-fuel-from-light-oil]";
doc["enabled"] = false;
doc["type"] = "recipe";
doc["name"] = "solid-fuel-from-light-oil";
doc["subgroup"] = "fluid-recipes";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "modular-armor";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "modular-armor";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result_count"] = 2;
doc["result"] = "transport-belt";
doc["type"] = "recipe";
doc["name"] = "transport-belt";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result_count"] = 2;
doc["result"] = "wood";
doc["type"] = "recipe";
doc["name"] = "wood";
ings = [];
i = {};
i["name"] = "raw-wood";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "iron-chest";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 8;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "iron-chest";
doc["enabled"] = true;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "rail-signal";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "rail-signal";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 8;
doc["result"] = "combat-shotgun";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "wood";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "combat-shotgun";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "train-stop";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "train-stop";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "burner-inserter";
doc["type"] = "recipe";
doc["name"] = "burner-inserter";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "stack-filter-inserter";
ings = [];
i = {};
i["name"] = "stack-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "stack-filter-inserter";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "solar-panel";
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "solar-panel";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["icon"] = "__base__/graphics/icons/fluid/empty-crude-oil-barrel.png";
doc["order"] = "c[empty-crude-oil-barrel]";
doc["category"] = "crafting-with-fluid";
doc["subgroup"] = "barrel";
doc["energy_required"] = 1;
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = "crude-oil";
i["amount"] = 25;
res.push(i);
i = {};
i["amount"] = "item";
i["amount"] = "empty-barrel";
i["amount"] = 1;
res.push(i);
doc["results"] = res;
ings = [];
i = {};
i["type"] = "item";
i["name"] = "crude-oil-barrel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "empty-crude-oil-barrel";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 10;
doc["result"] = "solar-panel-equipment";
ings = [];
i = {};
i["name"] = "solar-panel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "solar-panel-equipment";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "effectivity-module";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "effectivity-module";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["energy_required"] = 15;
doc["result"] = "productivity-module";
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "productivity-module";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 10;
doc["result"] = "red-wire";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "red-wire";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "landfill";
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["category"] = "crafting";
doc["type"] = "recipe";
doc["name"] = "landfill";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "inserter";
doc["type"] = "recipe";
doc["name"] = "inserter";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "small-lamp";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["type"] = "recipe";
doc["name"] = "small-lamp";
doc["enabled"] = false;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "stone-furnace";
doc["type"] = "recipe";
doc["name"] = "stone-furnace";
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
db.recipe.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/steel-axe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-axe.png";
doc["speed"] = 4;
action = [];
action.push("table: 00000000006b8580")
action.push("direct")
doc["action"] = action;
doc["order"] = "a[mining]-b[steel-axe]";
doc["durability"] = 5000;
doc["stack_size"] = 20;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "mining-tool";
doc["name"] = "steel-axe";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-axe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-axe.png";
doc["speed"] = 2.5;
action = [];
action.push("table: 00000000006979a0")
action.push("direct")
doc["action"] = action;
doc["order"] = "a[mining]-a[iron-axe]";
doc["durability"] = 4000;
doc["stack_size"] = 20;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "mining-tool";
doc["name"] = "iron-axe";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/shotgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Shotgun.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("table: 0000000000699060")
attack_parameters.push(60)
attack_parameters.push(0.6)
attack_parameters.push(20)
attack_parameters.push("projectile")
attack_parameters.push("shotgun-shell")
attack_parameters.push(1.125)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "b[shotgun]-a[basic]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "shotgun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/flame-thrower.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flame-thrower.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("table: 0000000000697e20")
attack_parameters.push(1)
attack_parameters.push(0.6)
attack_parameters.push("table: 0000000000698020")
attack_parameters.push(1)
attack_parameters.push(15)
attack_parameters.push(0.6)
attack_parameters.push("stream")
attack_parameters.push("flame-thrower")
attack_parameters.push(0.8)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "e[flame-thrower]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "flame-thrower";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/combat-shotgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Combat-shotgun.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push(20)
attack_parameters.push("table: 0000000000699a60")
attack_parameters.push(30)
attack_parameters.push(0.5)
attack_parameters.push(1.125)
attack_parameters.push("projectile")
attack_parameters.push("shotgun-shell")
attack_parameters.push(1.2)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "b[shotgun]-a[combat]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "combat-shotgun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/tank-cannon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Tank-cannon.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push(25)
attack_parameters.push("table: 0000000000698d20")
attack_parameters.push(90)
attack_parameters.push(0)
attack_parameters.push("table: 0000000000699120")
attack_parameters.push("projectile")
attack_parameters.push("cannon-shell")
attack_parameters.push(1.6)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "z[tank]-a[cannon]";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "tank-cannon";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push(15)
attack_parameters.push("table: 0000000000682180")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push(1.125)
attack_parameters.push("projectile")
attack_parameters.push("bullet")
attack_parameters.push("table: 0000000000681cc0")
doc["attack_parameters"] = attack_parameters;
doc["order"] = "a[basic-clips]-b[submachine-gun]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "submachine-gun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/railgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Railgun.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("table: 00000000006997e0")
attack_parameters.push(180)
attack_parameters.push(0.6)
attack_parameters.push(20)
attack_parameters.push("projectile")
attack_parameters.push("railgun")
attack_parameters.push(0.6)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "c[railgun]";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "railgun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push("table: 0000000000699220")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push("table: 00000000006993e0")
attack_parameters.push("table: 0000000000698f20")
attack_parameters.push(20)
attack_parameters.push("projectile")
attack_parameters.push("bullet")
attack_parameters.push(1)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "a[basic-clips]-b[tank-machine-gun]";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "tank-machine-gun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/pistol.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pistol.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push(15)
attack_parameters.push("table: 0000000000681c40")
attack_parameters.push(10)
attack_parameters.push(0.7)
attack_parameters.push(1.125)
attack_parameters.push("projectile")
attack_parameters.push("bullet")
attack_parameters.push("table: 00000000006822c0")
doc["attack_parameters"] = attack_parameters;
doc["order"] = "a[basic-clips]-a[pistol]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "pistol";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-launcher.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-launcher.png";
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("table: 0000000000698fa0")
attack_parameters.push("table: 0000000000699160")
attack_parameters.push(60)
attack_parameters.push(0.8)
attack_parameters.push(22)
attack_parameters.push("projectile")
attack_parameters.push("rocket")
attack_parameters.push(0.6)
doc["attack_parameters"] = attack_parameters;
doc["order"] = "d[rocket-launcher]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "rocket-launcher";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push(20)
attack_parameters.push("table: 0000000000698220")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push(0.65)
attack_parameters.push("projectile")
attack_parameters.push("bullet")
attack_parameters.push("table: 00000000006981a0")
doc["attack_parameters"] = attack_parameters;
doc["order"] = "a[basic-clips]-b[vehicle-machine-gun]";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "gun";
doc["name"] = "vehicle-machine-gun";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/science-pack-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-2.png";
doc["order"] = "a[science-pack-2]";
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["subgroup"] = "science-pack";
doc["durability"] = 1;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "tool";
doc["name"] = "science-pack-2";
doc["stack_size"] = 200;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/alien-science-pack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Alien-science-pack.png";
doc["order"] = "d[alien-science-pack]";
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["subgroup"] = "science-pack";
doc["durability"] = 1;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "tool";
doc["name"] = "alien-science-pack";
doc["stack_size"] = 200;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/science-pack-1.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-1.png";
doc["order"] = "a[science-pack-1]";
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["subgroup"] = "science-pack";
doc["durability"] = 1;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "tool";
doc["name"] = "science-pack-1";
doc["stack_size"] = 200;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/science-pack-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-3.png";
doc["order"] = "a[science-pack-3]";
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["subgroup"] = "science-pack";
doc["durability"] = 1;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "tool";
doc["name"] = "science-pack-3";
doc["stack_size"] = 200;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/cluster-grenade.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cluster-grenade.png";
doc["stack_size"] = 100;
doc["order"] = "a[grenade]-b[cluster]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "cluster-grenade";
capsule_action = [];
capsule_action.push("table: 0000000000680f00")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/defender-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Defender-capsule.png";
doc["stack_size"] = 100;
doc["order"] = "d[defender-capsule]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "defender-capsule";
capsule_action = [];
capsule_action.push("table: 0000000000680f40")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/grenade.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Grenade.png";
doc["stack_size"] = 100;
doc["order"] = "a[grenade]-a[normal]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "grenade";
capsule_action = [];
capsule_action.push("table: 00000000006813c0")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/equipment/discharge-defense-equipment-ability.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Discharge-defense-equipment-ability.png";
doc["stack_size"] = 1;
doc["order"] = "z";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "discharge-defense-remote";
capsule_action = [];
capsule_action.push("discharge-defense-equipment")
capsule_action.push("equipment-remote")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/poison-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Poison-capsule.png";
doc["stack_size"] = 100;
doc["order"] = "b[poison-capsule]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "poison-capsule";
capsule_action = [];
capsule_action.push("table: 00000000006812c0")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/slowdown-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Slowdown-capsule.png";
doc["stack_size"] = 100;
doc["order"] = "c[slowdown-capsule]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "slowdown-capsule";
capsule_action = [];
capsule_action.push("table: 0000000000681300")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/destroyer-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Destroyer-capsule.png";
doc["stack_size"] = 100;
doc["order"] = "f[destroyer-capsule]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "destroyer-capsule";
capsule_action = [];
capsule_action.push("table: 0000000000680800")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fish.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fish.png";
doc["stack_size"] = 100;
doc["order"] = "f-e-a";
capsule_action = [];
capsule_action.push("table: 0000000000684380")
capsule_action.push("use-on-self")
doc["capsule_action"] = capsule_action;
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "raw-fish";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/distractor-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Distractor-capsule.png";
doc["stack_size"] = 100;
doc["order"] = "e[defender-capsule]";
doc["subgroup"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "capsule";
doc["name"] = "distractor-capsule";
capsule_action = [];
capsule_action.push("table: 0000000000681340")
capsule_action.push("throw")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/blueprint.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Blueprint.png";
doc["alt_selection_cursor_box_type"] = "copy";
doc["stack_size"] = 1;
doc["draw_label_for_cursor_render"] = true;
selection_color = [];
selection_color.push(0)
selection_color.push(1)
selection_color.push(0)
doc["selection_color"] = selection_color;
doc["order"] = "c[automated-construction]-a[blueprint]";
doc["item_to_clear"] = "electronic-circuit";
alt_selection_color = [];
alt_selection_color.push(0)
alt_selection_color.push(1)
alt_selection_color.push(0)
doc["alt_selection_color"] = alt_selection_color;
doc["subgroup"] = "tool";
selection_mode = [];
selection_mode.push("blueprint")
doc["selection_mode"] = selection_mode;
alt_selection_mode = [];
alt_selection_mode.push("blueprint")
doc["alt_selection_mode"] = alt_selection_mode;
doc["selection_cursor_box_type"] = "copy";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "blueprint";
doc["name"] = "blueprint";
doc["stackable"] = false;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/repair-pack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Repair-pack.png";
doc["speed"] = 1;
doc["order"] = "b[repair]-a[repair-pack]";
doc["subgroup"] = "tool";
doc["stack_size"] = 100;
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "repair-tool";
doc["name"] = "repair-pack";
doc["durability"] = 200;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/railgun-ammo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Railgun-ammo.png";
doc["order"] = "c[railgun]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 100;
doc["magazine_size"] = 4;
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "railgun-dart";
ammo_type = [];
ammo_type.push("table: 0000000000677510")
ammo_type.push("railgun")
ammo_type.push("direction")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/cannon-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cannon-shell.png";
doc["stack_size"] = 100;
doc["order"] = "d[cannon-shell]-a[basic]";
doc["subgroup"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "cannon-shell";
ammo_type = [];
ammo_type.push("table: 0000000000677e10")
ammo_type.push("cannon-shell")
ammo_type.push("direction")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/shotgun-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Shotgun-shell.png";
doc["order"] = "b[shotgun]-a[basic]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 100;
doc["magazine_size"] = 10;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "shotgun-shell";
ammo_type = [];
ammo_type.push("table: 0000000000676a50")
ammo_type.push("shotgun-shell")
ammo_type.push("direction")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/firearm-magazine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Firearm-magazine.png";
doc["order"] = "a[basic-clips]-a[firearm-magazine]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 100;
doc["magazine_size"] = 10;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "firearm-magazine";
ammo_type = [];
ammo_type.push("bullet")
ammo_type.push("table: 0000000000682400")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/explosive-cannon-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosive-cannon-shell.png";
doc["stack_size"] = 100;
doc["order"] = "d[cannon-shell]-b[explosive]";
doc["subgroup"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "explosive-cannon-shell";
ammo_type = [];
ammo_type.push("table: 0000000000677a90")
ammo_type.push("cannon-shell")
ammo_type.push("direction")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/explosive-rocket.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosive-rocket.png";
doc["stack_size"] = 100;
doc["order"] = "d[rocket-launcher]-b[explosive]";
doc["subgroup"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "explosive-rocket";
ammo_type = [];
ammo_type.push("rocket")
ammo_type.push("table: 00000000006774d0")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket.png";
doc["stack_size"] = 100;
doc["order"] = "d[rocket-launcher]-a[basic]";
doc["subgroup"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "rocket";
ammo_type = [];
ammo_type.push("rocket")
ammo_type.push("table: 00000000006767d0")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/flame-thrower-ammo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flame-thrower-ammo.png";
doc["order"] = "e[flame-thrower]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 50;
doc["magazine_size"] = 100;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "flame-thrower-ammo";
ammo_type = [];
ammo_type.push("table: 0000000000676ed0")
ammo_type.push(true)
ammo_type.push("flame-thrower")
ammo_type.push("position")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/piercing-shotgun-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Piercing-shotgun-shell.png";
doc["order"] = "b[shotgun]-b[piercing]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 100;
doc["magazine_size"] = 10;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "piercing-shotgun-shell";
ammo_type = [];
ammo_type.push("table: 0000000000677010")
ammo_type.push("shotgun-shell")
ammo_type.push("direction")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/piercing-rounds-magazine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Piercing-rounds-magazine.png";
doc["order"] = "a[basic-clips]-b[piercing-rounds-magazine]";
doc["subgroup"] = "ammo";
doc["stack_size"] = 100;
doc["magazine_size"] = 10;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "ammo";
doc["name"] = "piercing-rounds-magazine";
ammo_type = [];
ammo_type.push("bullet")
ammo_type.push("table: 0000000000677290")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/effectivity-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module.png";
doc["tier"] = 1;
doc["order"] = "c[effectivity]-a[effectivity-module-1]";
doc["category"] = "effectivity";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9100")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "effectivity-module";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/productivity-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module-3.png";
doc["tier"] = 3;
doc["order"] = "c[productivity]-c[productivity-module-3]";
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
doc["subgroup"] = "module";
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9540")
effect.push("table: 00000000006b9680")
effect.push("table: 00000000006b9740")
effect.push("table: 00000000006b9480")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "productivity-module-3";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/productivity-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module-2.png";
doc["tier"] = 2;
doc["order"] = "c[productivity]-b[productivity-module-2]";
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
doc["subgroup"] = "module";
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9700")
effect.push("table: 00000000006b9880")
effect.push("table: 00000000006b9c80")
effect.push("table: 00000000006b95c0")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "productivity-module-2";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/speed-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module.png";
doc["tier"] = 1;
doc["order"] = "a[speed]-a[speed-module-1]";
doc["category"] = "speed";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9ac0")
effect.push("table: 00000000006b9080")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "speed-module";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/effectivity-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module-2.png";
doc["tier"] = 2;
doc["order"] = "c[effectivity]-b[effectivity-module-2]";
doc["category"] = "effectivity";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9400")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "effectivity-module-2";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/effectivity-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module-3.png";
doc["tier"] = 3;
doc["order"] = "c[effectivity]-c[effectivity-module-3]";
doc["category"] = "effectivity";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b94c0")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "effectivity-module-3";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/productivity-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module.png";
doc["tier"] = 1;
doc["order"] = "c[productivity]-a[productivity-module-1]";
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
doc["subgroup"] = "module";
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9200")
effect.push("table: 00000000006b9140")
effect.push("table: 00000000006b9580")
effect.push("table: 00000000006b91c0")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "productivity-module";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/speed-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module-2.png";
doc["tier"] = 2;
doc["order"] = "a[speed]-b[speed-module-2]";
doc["category"] = "speed";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9bc0")
effect.push("table: 00000000006b9500")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "speed-module-2";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/speed-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module-3.png";
doc["tier"] = 3;
doc["order"] = "a[speed]-c[speed-module-3]";
doc["category"] = "speed";
doc["subgroup"] = "module";
doc["default_request_amount"] = 10;
effect = [];
effect.push("table: 00000000006b9d80")
effect.push("table: 00000000006b9b00")
doc["effect"] = effect;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "module";
doc["name"] = "speed-module-3";
doc["stack_size"] = 50;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/cargo-wagon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cargo-wagon.png";
doc["stack_size"] = 5;
doc["place_result"] = "cargo-wagon";
doc["order"] = "a[train-system]-g[cargo-wagon]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item-with-entity-data";
doc["name"] = "cargo-wagon";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/diesel-locomotive.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Diesel-locomotive.png";
doc["stack_size"] = 5;
doc["place_result"] = "diesel-locomotive";
doc["order"] = "a[train-system]-f[diesel-locomotive]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item-with-entity-data";
doc["name"] = "diesel-locomotive";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/car.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Car.png";
doc["stack_size"] = 1;
doc["place_result"] = "car";
doc["order"] = "b[personal-transport]-a[car]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item-with-entity-data";
doc["name"] = "car";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/tank.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Tank.png";
doc["stack_size"] = 1;
doc["place_result"] = "tank";
doc["order"] = "b[personal-transport]-b[tank]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item-with-entity-data";
doc["name"] = "tank";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rail.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail.png";
doc["order"] = "a[train-system]-a[rail]";
doc["subgroup"] = "transport";
doc["curved_rail"] = "curved-rail";
doc["straight_rail"] = "straight-rail";
doc["stack_size"] = 100;
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "rail-planner";
doc["name"] = "rail";
doc["place_result"] = "straight-rail";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/filter-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Filter-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "filter-inserter";
doc["order"] = "e[filter-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "filter-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Underground-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "underground-belt";
doc["order"] = "b[underground-belt]-a[underground-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "underground-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/discharge-defense-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Discharge-defense-equipment.png";
doc["stack_size"] = 20;
doc["order"] = "d[active-defense]-b[discharge-defense-equipment]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "discharge-defense-equipment";
doc["placed_as_equipment_result"] = "discharge-defense-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/green-wire.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Green-wire.png";
doc["stack_size"] = 200;
doc["order"] = "a[wires]-c[green-wire]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "green-wire";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/steam-engine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steam-engine.png";
doc["stack_size"] = 10;
doc["place_result"] = "steam-engine";
doc["order"] = "b[steam-power]-b[steam-engine]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "steam-engine";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/steel-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-furnace.png";
doc["stack_size"] = 50;
doc["place_result"] = "steel-furnace";
doc["order"] = "b[steel-furnace]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "steel-furnace";
doc["subgroup"] = "smelting-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fast-underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-underground-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "fast-underground-belt";
doc["order"] = "b[underground-belt]-b[fast-underground-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fast-underground-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/land-mine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Land-mine.png";
doc["order"] = "f[land-mine]";
doc["trigger_radius"] = 1;
doc["subgroup"] = "gun";
doc["damage_radius"] = 5;
doc["stack_size"] = 20;
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "land-mine";
doc["place_result"] = "land-mine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/small-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-electric-pole.png";
doc["order"] = "a[energy]-a[small-electric-pole]";
doc["subgroup"] = "energy-pipe-distribution";
doc["stack_size"] = 50;
doc["place_result"] = "small-electric-pole";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "small-electric-pole";
doc["fuel_value"] = "4MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/laser-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Laser-turret.png";
doc["stack_size"] = 50;
doc["place_result"] = "laser-turret";
doc["order"] = "b[turret]-b[laser-turret]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "laser-turret";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fast-transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-transport-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "fast-transport-belt";
doc["order"] = "a[transport-belt]-b[fast-transport-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fast-transport-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/accumulator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Accumulator.png";
doc["stack_size"] = 50;
doc["place_result"] = "electric-energy-interface";
doc["order"] = "e[electric-energy-interface]-b[electric-energy-interface]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "electric-energy-interface";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/logistic-chest-requester.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-requester.png";
doc["stack_size"] = 50;
doc["place_result"] = "logistic-chest-requester";
doc["order"] = "b[storage]-c[logistic-chest-requester]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "logistic-chest-requester";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/wooden-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Wooden-chest.png";
doc["order"] = "a[items]-a[wooden-chest]";
doc["subgroup"] = "storage";
doc["stack_size"] = 50;
doc["place_result"] = "wooden-chest";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "wooden-chest";
doc["fuel_value"] = "4MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/landfill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Landfill.png";
place_as_tile = [];
place_as_tile.push("grass")
place_as_tile.push("table: 00000000006b8b00")
place_as_tile.push(1)
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["order"] = "c[landfill]-a[dirt]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "landfill";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/construction-robot.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Construction-robot.png";
doc["stack_size"] = 50;
doc["place_result"] = "construction-robot";
doc["order"] = "a[robot]-b[construction-robot]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "construction-robot";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/roboport.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Roboport.png";
doc["stack_size"] = 5;
doc["place_result"] = "roboport";
doc["order"] = "c[signal]-a[roboport]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "roboport";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stone.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone.png";
doc["stack_size"] = 50;
doc["order"] = "d[stone]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stone";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/hazard-concrete.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Hazard-concrete.png";
place_as_tile = [];
place_as_tile.push("hazard-concrete-left")
place_as_tile.push("table: 00000000006b8800")
place_as_tile.push(4)
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["order"] = "b[concrete]-b[hazard]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "hazard-concrete";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/player-port.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Player-port.png";
doc["stack_size"] = 50;
doc["place_result"] = "player-port";
doc["order"] = "z[not-used]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidd  en")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "player-port";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/express-loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-loader.png";
doc["stack_size"] = 50;
doc["place_result"] = "express-loader";
doc["order"] = "d[loader]-c[express-loader]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "express-loader";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/offshore-pump.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Offshore-pump.png";
doc["stack_size"] = 20;
doc["place_result"] = "offshore-pump";
doc["order"] = "b[fluids]-a[offshore-pump]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "offshore-pump";
doc["subgroup"] = "extraction-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/concrete.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Concrete.png";
place_as_tile = [];
place_as_tile.push("concrete")
place_as_tile.push("table: 00000000006b8b80")
place_as_tile.push(4)
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["order"] = "b[concrete]-a[plain]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "concrete";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/express-underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-underground-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "express-underground-belt";
doc["order"] = "b[underground-belt]-c[express-underground-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "express-underground-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/assembling-machine-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-3.png";
doc["stack_size"] = 50;
doc["place_result"] = "assembling-machine-3";
doc["order"] = "c[assembling-machine-3]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "assembling-machine-3";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-plate.png";
doc["stack_size"] = 100;
doc["order"] = "b[iron-plate]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "iron-plate";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/satellite.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Satellite.png";
doc["stack_size"] = 1;
doc["order"] = "p[satellite]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "satellite";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-part.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-part.png";
doc["stack_size"] = 5;
doc["order"] = "o[rocket-part]";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rocket-part";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-control-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-control-unit.png";
doc["stack_size"] = 10;
doc["order"] = "n[rocket-control-unit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rocket-control-unit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/copper-ore.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-ore.png";
doc["stack_size"] = 50;
doc["order"] = "f[copper-ore]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "copper-ore";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/assembling-machine-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-2.png";
doc["stack_size"] = 50;
doc["place_result"] = "assembling-machine-2";
doc["order"] = "b[assembling-machine-2]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "assembling-machine-2";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/energy-shield-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Energy-shield-equipment.png";
doc["order"] = "b[shield]-a[energy-shield-equipment]";
doc["subgroup"] = "equipment";
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "energy-shield-equipment";
doc["placed_as_equipment_result"] = "energy-shield-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/medium-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Medium-electric-pole.png";
doc["stack_size"] = 50;
doc["place_result"] = "medium-electric-pole";
doc["order"] = "a[energy]-b[medium-electric-pole]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "medium-electric-pole";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/express-splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-splitter.png";
doc["stack_size"] = 50;
doc["place_result"] = "express-splitter";
doc["order"] = "c[splitter]-c[express-splitter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "express-splitter";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/electric-engine-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-engine-unit.png";
doc["stack_size"] = 50;
doc["order"] = "h[electric-engine-unit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "electric-engine-unit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/constant-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Constant-combinator.png";
doc["stack_size"] = 50;
doc["order"] = "b[combinators]-c[constant-combinator]";
doc["place_result"] = "constant-combinator";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "constant-combinator";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/decider-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Decider-combinator.png";
doc["stack_size"] = 50;
doc["order"] = "b[combinators]-b[decider-combinator]";
doc["place_result"] = "decider-combinator";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "decider-combinator";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/arithmetic-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Arithmetic-combinator.png";
doc["stack_size"] = 50;
doc["order"] = "b[combinators]-a[arithmetic-combinator]";
doc["place_result"] = "arithmetic-combinator";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "arithmetic-combinator";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/processing-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Processing-unit.png";
doc["stack_size"] = 100;
doc["order"] = "f[processing-unit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "processing-unit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/electronic-circuit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electronic-circuit.png";
doc["stack_size"] = 200;
doc["order"] = "d[electronic-circuit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "electronic-circuit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/flying-robot-frame.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flying-robot-frame.png";
doc["stack_size"] = 50;
doc["order"] = "k[flying-robot-frame]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "flying-robot-frame";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/pipe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pipe.png";
doc["stack_size"] = 50;
doc["place_result"] = "pipe";
doc["order"] = "a[pipe]-a[pipe]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "pipe";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/assembling-machine-1.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-1.png";
doc["stack_size"] = 50;
doc["place_result"] = "assembling-machine-1";
doc["order"] = "a[assembling-machine-1]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "assembling-machine-1";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/logistic-chest-passive-provider.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-passive-provider.png";
doc["stack_size"] = 50;
doc["place_result"] = "logistic-chest-passive-provider";
doc["order"] = "b[storage]-c[logistic-chest-passive-provider]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "logistic-chest-passive-provider";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/gun-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Gun-turret.png";
doc["stack_size"] = 50;
doc["place_result"] = "gun-turret";
doc["order"] = "b[turret]-a[gun-turret]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "gun-turret";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/substation.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Substation.png";
doc["stack_size"] = 50;
doc["place_result"] = "substation";
doc["order"] = "a[energy]-d[substation]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "substation";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/sulfur.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Sulfur.png";
doc["stack_size"] = 50;
doc["order"] = "f[sulfur]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "sulfur";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/power-switch.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-switch.png";
doc["stack_size"] = 50;
doc["order"] = "c[other]-a[power-switch]";
doc["place_result"] = "power-switch";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "power-switch";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/coin.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Coin.png";
doc["stack_size"] = 100000;
doc["order"] = "y";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "coin";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/electric-mining-drill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-mining-drill.png";
doc["stack_size"] = 50;
doc["place_result"] = "electric-mining-drill";
doc["order"] = "a[items]-b[electric-mining-drill]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "electric-mining-drill";
doc["subgroup"] = "extraction-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/electric-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-furnace.png";
doc["stack_size"] = 50;
doc["place_result"] = "electric-furnace";
doc["order"] = "c[electric-furnace]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "electric-furnace";
doc["subgroup"] = "smelting-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-silo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-silo.png";
doc["stack_size"] = 1;
doc["place_result"] = "rocket-silo";
doc["order"] = "e[rocket-silo]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rocket-silo";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-stick.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-stick.png";
doc["stack_size"] = 100;
doc["order"] = "b[iron-stick]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "iron-stick";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/plastic-bar.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Plastic-bar.png";
doc["stack_size"] = 100;
doc["order"] = "g[plastic-bar]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "plastic-bar";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/wood.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Wood.png";
doc["stack_size"] = 50;
doc["order"] = "a[wood]";
doc["subgroup"] = "raw-material";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "wood";
doc["fuel_value"] = "2MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/solid-fuel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solid-fuel.png";
doc["stack_size"] = 50;
doc["order"] = "c[solid-fuel]";
doc["subgroup"] = "raw-resource";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "solid-fuel";
doc["fuel_value"] = "25MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/night-vision-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Night-vision-equipment.png";
doc["stack_size"] = 20;
doc["order"] = "f[night-vision]-a[night-vision-equipment]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "night-vision-equipment";
doc["placed_as_equipment_result"] = "night-vision-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fluid/empty-barrel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Empty-barrel.png";
doc["stack_size"] = 10;
doc["order"] = "a[empty-barrel]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "empty-barrel";
doc["subgroup"] = "barrel";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/big-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Big-electric-pole.png";
doc["stack_size"] = 50;
doc["place_result"] = "big-electric-pole";
doc["order"] = "a[energy]-c[big-electric-pole]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "big-electric-pole";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/train-stop.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Train-stop.png";
doc["stack_size"] = 10;
doc["place_result"] = "train-stop";
doc["order"] = "a[train-system]-c[train-stop]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "train-stop";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stone-wall.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-wall.png";
doc["stack_size"] = 50;
doc["place_result"] = "stone-wall";
doc["order"] = "a[stone-wall]-a[stone-wall]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stone-wall";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/boiler.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Boiler.png";
doc["stack_size"] = 50;
doc["place_result"] = "boiler";
doc["order"] = "b[steam-power]-a[boiler]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "boiler";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/oil-refinery.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Oil-refinery.png";
doc["stack_size"] = 10;
doc["place_result"] = "oil-refinery";
doc["order"] = "d[refinery]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "oil-refinery";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/pumpjack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pumpjack.png";
doc["stack_size"] = 20;
doc["place_result"] = "pumpjack";
doc["order"] = "b[fluids]-b[pumpjack]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "pumpjack";
doc["subgroup"] = "extraction-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/small-pump.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-pump.png";
doc["stack_size"] = 50;
doc["place_result"] = "small-pump";
doc["order"] = "b[pipe]-c[small-pump]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "small-pump";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/storage-tank.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Storage-tank.png";
doc["stack_size"] = 50;
doc["place_result"] = "storage-tank";
doc["order"] = "b[fluid]-a[storage-tank]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "storage-tank";
doc["subgroup"] = "storage";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/personal-laser-defense-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Personal-laser-defense-equipment.png";
doc["stack_size"] = 20;
doc["order"] = "d[active-defense]-a[personal-laser-defense-equipment]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "personal-laser-defense-equipment";
doc["placed_as_equipment_result"] = "personal-laser-defense-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/beacon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Beacon.png";
doc["stack_size"] = 10;
doc["place_result"] = "beacon";
doc["order"] = "a[beacon]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "beacon";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fusion-reactor-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fusion-reactor-equipment.png";
doc["stack_size"] = 20;
doc["order"] = "a[energy-source]-b[fusion-reactor]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fusion-reactor-equipment";
doc["placed_as_equipment_result"] = "fusion-reactor-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/radar.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Radar.png";
doc["stack_size"] = 50;
doc["place_result"] = "radar";
doc["order"] = "d[radar]-a[radar]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "radar";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/accumulator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Accumulator.png";
doc["stack_size"] = 50;
doc["place_result"] = "accumulator";
doc["order"] = "e[accumulator]-a[accumulator]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "accumulator";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/explosives.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosives.png";
doc["stack_size"] = 50;
doc["order"] = "i[explosives]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "explosives";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-fuel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-fuel.png";
doc["stack_size"] = 10;
doc["order"] = "m[rocket-fuel]";
doc["subgroup"] = "intermediate-product";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rocket-fuel";
doc["fuel_value"] = "225MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/solar-panel-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solar-panel-equipment.png";
doc["stack_size"] = 20;
doc["order"] = "a[energy-source]-a[solar-panel]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "solar-panel-equipment";
doc["placed_as_equipment_result"] = "solar-panel-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/logistic-chest-storage.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-storage.png";
doc["stack_size"] = 50;
doc["place_result"] = "logistic-chest-storage";
doc["order"] = "b[storage]-c[logistic-chest-storage]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "logistic-chest-storage";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-gear-wheel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-gear-wheel.png";
doc["stack_size"] = 100;
doc["order"] = "c[iron-gear-wheel]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "iron-gear-wheel";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/solar-panel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solar-panel.png";
doc["stack_size"] = 50;
doc["place_result"] = "solar-panel";
doc["order"] = "d[solar-panel]-a[solar-panel]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "solar-panel";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/battery.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery.png";
doc["stack_size"] = 200;
doc["order"] = "j[battery]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "battery";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/express-transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-transport-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "express-transport-belt";
doc["order"] = "a[transport-belt]-c[express-transport-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "express-transport-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/copper-cable.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-cable.png";
doc["stack_size"] = 200;
doc["order"] = "a[copper-cable]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "copper-cable";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/logistic-robot.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-robot.png";
doc["stack_size"] = 50;
doc["place_result"] = "logistic-robot";
doc["order"] = "a[robot]-a[logistic-robot]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "logistic-robot";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/pipe-to-ground.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pipe-to-ground.png";
doc["stack_size"] = 50;
doc["place_result"] = "pipe-to-ground";
doc["order"] = "a[pipe]-b[pipe-to-ground]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "pipe-to-ground";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Splitter.png";
doc["stack_size"] = 50;
doc["place_result"] = "splitter";
doc["order"] = "c[splitter]-a[splitter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "splitter";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/copper-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-plate.png";
doc["stack_size"] = 100;
doc["order"] = "c[copper-plate]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "copper-plate";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/advanced-circuit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Advanced-circuit.png";
doc["stack_size"] = 200;
doc["order"] = "e[advanced-circuit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "advanced-circuit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rocket-structure.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-structure.png";
doc["stack_size"] = 10;
doc["order"] = "l[rocket-structure]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "low-density-structure";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Loader.png";
doc["stack_size"] = 50;
doc["place_result"] = "loader";
doc["order"] = "d[loader]-a[basic-loader]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "loader";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stack-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stack-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "stack-inserter";
doc["order"] = "f[stack-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stack-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/battery-mk2-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery-mk2-equipment.png";
doc["order"] = "c[battery]-b[battery-equipment-mk2]";
doc["subgroup"] = "equipment";
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "battery-mk2-equipment";
doc["placed_as_equipment_result"] = "battery-mk2-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/steel-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-chest.png";
doc["stack_size"] = 50;
doc["place_result"] = "steel-chest";
doc["order"] = "a[items]-c[steel-chest]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "steel-chest";
doc["subgroup"] = "storage";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/coal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Coal.png";
doc["order"] = "b[coal]";
doc["subgroup"] = "raw-material";
doc["stack_size"] = 50;
doc["dark_background_icon"] = "__base__/graphics/icons/coal-dark-background.png";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "coal";
doc["fuel_value"] = "8MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/small-plane.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-plane.png";
doc["stack_size"] = 1;
doc["order"] = "h[small-plane]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "small-plane";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fast-loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-loader.png";
doc["stack_size"] = 50;
doc["place_result"] = "fast-loader";
doc["order"] = "d[loader]-b[fast-loader]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fast-loader";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/lab.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Lab.png";
doc["stack_size"] = 10;
doc["place_result"] = "lab";
doc["order"] = "g[lab]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "lab";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/exoskeleton-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Exoskeleton-equipment.png";
doc["stack_size"] = 10;
doc["order"] = "e[exoskeleton]-a[exoskeleton-equipment]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "exoskeleton-equipment";
doc["placed_as_equipment_result"] = "exoskeleton-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-ore.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-ore.png";
doc["stack_size"] = 50;
doc["order"] = "e[iron-ore]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "iron-ore";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/flamethrower-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flamethrower-turret.png";
doc["stack_size"] = 50;
doc["place_result"] = "flamethrower-turret";
doc["order"] = "b[turret]-a[flamethrower-turret]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "flamethrower-turret";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/steel-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-plate.png";
doc["stack_size"] = 100;
doc["order"] = "d[steel-plate]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "steel-plate";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rail-chain-signal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail-chain-signal.png";
doc["stack_size"] = 50;
doc["place_result"] = "rail-chain-signal";
doc["order"] = "a[train-system]-e[rail-signal-chain]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rail-chain-signal";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/rail-signal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail-signal.png";
doc["stack_size"] = 50;
doc["place_result"] = "rail-signal";
doc["order"] = "a[train-system]-d[rail-signal]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "rail-signal";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/chemical-plant.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Chemical-plant.png";
doc["stack_size"] = 10;
doc["place_result"] = "chemical-plant";
doc["order"] = "e[chemical-plant]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "chemical-plant";
doc["subgroup"] = "production-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stone-brick.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-brick.png";
place_as_tile = [];
place_as_tile.push("stone-path")
place_as_tile.push("table: 0000000000683540")
place_as_tile.push(4)
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["order"] = "a[stone-brick]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stone-brick";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/gate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Gate.png";
doc["stack_size"] = 50;
doc["place_result"] = "gate";
doc["order"] = "a[wall]-b[gate]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "gate";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/personal-roboport-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Personal-roboport-equipment.png";
doc["stack_size"] = 5;
doc["order"] = "e[robotics]-a[personal-roboport-equipment]";
doc["subgroup"] = "equipment";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "personal-roboport-equipment";
doc["placed_as_equipment_result"] = "personal-roboport-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/engine-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Engine-unit.png";
doc["stack_size"] = 50;
doc["order"] = "g[engine-unit]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "engine-unit";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/alien-artifact.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Alien-artifact.png";
doc["stack_size"] = 500;
doc["default_request_amount"] = 10;
doc["order"] = "g[alien-artifact]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "alien-artifact";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Transport-belt.png";
doc["stack_size"] = 50;
doc["place_result"] = "transport-belt";
doc["order"] = "a[transport-belt]-a[transport-belt]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "transport-belt";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/computer.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Computer.png";
doc["stack_size"] = 1;
doc["order"] = "g[computer]";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "computer";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/iron-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-chest.png";
doc["stack_size"] = 50;
doc["place_result"] = "iron-chest";
doc["order"] = "a[items]-b[iron-chest]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "iron-chest";
doc["subgroup"] = "storage";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/small-lamp.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-lamp.png";
doc["stack_size"] = 50;
doc["place_result"] = "small-lamp";
doc["order"] = "c[light]-a[small-lamp]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "small-lamp";
doc["subgroup"] = "energy";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/logistic-chest-active-provider.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-active-provider.png";
doc["stack_size"] = 50;
doc["place_result"] = "logistic-chest-active-provider";
doc["order"] = "b[storage]-c[logistic-chest-active-provider]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "logistic-chest-active-provider";
doc["subgroup"] = "logistic-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/raw-wood.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Raw-wood.png";
doc["stack_size"] = 100;
doc["order"] = "a[raw-wood]";
doc["subgroup"] = "raw-material";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "raw-wood";
doc["fuel_value"] = "4MJ";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/burner-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Burner-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "burner-inserter";
doc["order"] = "a[burner-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "burner-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stack-filter-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stack-filter-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "stack-filter-inserter";
doc["order"] = "g[stack-filter-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stack-filter-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/stone-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-furnace.png";
doc["stack_size"] = 50;
doc["place_result"] = "stone-furnace";
doc["order"] = "a[stone-furnace]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "stone-furnace";
doc["subgroup"] = "smelting-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/burner-mining-drill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Burner-mining-drill.png";
doc["stack_size"] = 50;
doc["place_result"] = "burner-mining-drill";
doc["order"] = "a[items]-a[burner-mining-drill]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "burner-mining-drill";
doc["subgroup"] = "extraction-machine";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/long-handed-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Long-handed-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "long-handed-inserter";
doc["order"] = "c[long-handed-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "long-handed-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fast-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "fast-inserter";
doc["order"] = "d[fast-inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fast-inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fluid/crude-oil-barrel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Crude-oil-barrel.png";
doc["stack_size"] = 10;
doc["order"] = "b[crude-oil-barrel]";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "crude-oil-barrel";
doc["subgroup"] = "barrel";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/red-wire.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Red-wire.png";
doc["stack_size"] = 200;
doc["order"] = "a[wires]-b[red-wire]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "red-wire";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/fast-splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-splitter.png";
doc["stack_size"] = 50;
doc["place_result"] = "fast-splitter";
doc["order"] = "c[splitter]-b[fast-splitter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "fast-splitter";
doc["subgroup"] = "belt";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Inserter.png";
doc["stack_size"] = 50;
doc["place_result"] = "inserter";
doc["order"] = "b[inserter]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "inserter";
doc["subgroup"] = "inserter";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/battery-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery-equipment.png";
doc["order"] = "c[battery]-a[battery-equipment]";
doc["subgroup"] = "equipment";
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "battery-equipment";
doc["placed_as_equipment_result"] = "battery-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/energy-shield-mk2-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Energy-shield-mk2-equipment.png";
doc["order"] = "b[shield]-b[energy-shield-equipment-mk2]";
doc["subgroup"] = "equipment";
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "item";
doc["name"] = "energy-shield-mk2-equipment";
doc["placed_as_equipment_result"] = "energy-shield-mk2-equipment";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/deconstruction-planner.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Deconstruction-planner.png";
selection_color = [];
selection_color.push(1)
selection_color.push(0)
selection_color.push(0)
doc["selection_color"] = selection_color;
doc["order"] = "c[automated-construction]-b[deconstruction-planner]";
alt_selection_color = [];
alt_selection_color.push(0)
alt_selection_color.push(0)
alt_selection_color.push(1)
doc["alt_selection_color"] = alt_selection_color;
doc["alt_selection_cursor_box_type"] = "not-allowed";
doc["subgroup"] = "tool";
selection_mode = [];
selection_mode.push("deconstruct")
doc["selection_mode"] = selection_mode;
alt_selection_mode = [];
alt_selection_mode.push("cancel-deconstruct")
doc["alt_selection_mode"] = alt_selection_mode;
doc["selection_cursor_box_type"] = "not-allowed";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "deconstruction-item";
doc["name"] = "deconstruction-planner";
doc["stack_size"] = 1;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/blueprint-book.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Blueprint-book.png";
doc["inventory_size"] = 30;
doc["stack_size"] = 1;
doc["order"] = "c[automated-construction]-c[blueprint-book]";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["type"] = "blueprint-book";
doc["name"] = "blueprint-book";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/modular-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Modular-armor.png";
doc["order"] = "c[modular-armor]";
doc["subgroup"] = "armor";
doc["durability"] = 10000;
doc["inventory_size_bonus"] = 10;
doc["stack_size"] = 1;
doc["equipment_grid"] = "small-equipment-grid";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "armor";
doc["name"] = "modular-armor";
resistances = [];
resistances.push("table: 0000000000677bd0")
resistances.push("table: 0000000000677c10")
resistances.push("table: 0000000000677dd0")
resistances.push("table: 00000000006786d0")
doc["resistances"] = resistances;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/light-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Light-armor.png";
doc["order"] = "a[light-armor]";
doc["durability"] = 1000;
doc["stack_size"] = 10;
doc["subgroup"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "armor";
doc["name"] = "light-armor";
resistances = [];
resistances.push("table: 0000000000682040")
resistances.push("table: 0000000000681f40")
resistances.push("table: 0000000000682140")
resistances.push("table: 0000000000682240")
doc["resistances"] = resistances;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/power-armor-mk2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-armor-mk2.png";
doc["order"] = "e[power-armor-mk2]";
doc["subgroup"] = "armor";
doc["durability"] = 20000;
doc["inventory_size_bonus"] = 30;
doc["stack_size"] = 1;
doc["equipment_grid"] = "large-equipment-grid";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "armor";
doc["name"] = "power-armor-mk2";
resistances = [];
resistances.push("table: 0000000000678450")
resistances.push("table: 0000000000677f90")
resistances.push("table: 0000000000677950")
resistances.push("table: 0000000000678110")
doc["resistances"] = resistances;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/power-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-armor.png";
doc["order"] = "d[power-armor]";
doc["subgroup"] = "armor";
doc["durability"] = 15000;
doc["inventory_size_bonus"] = 20;
doc["stack_size"] = 1;
doc["equipment_grid"] = "medium-equipment-grid";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "armor";
doc["name"] = "power-armor";
resistances = [];
resistances.push("table: 0000000000677e90")
resistances.push("table: 00000000006785d0")
resistances.push("table: 0000000000677f50")
resistances.push("table: 0000000000677810")
doc["resistances"] = resistances;
db.item.insert(doc);

doc = {};
doc["icon"] = "__base__/graphics/icons/heavy-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Heavy-armor.png";
doc["order"] = "b[heavy-armor]";
doc["durability"] = 5000;
doc["stack_size"] = 10;
doc["subgroup"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["type"] = "armor";
doc["name"] = "heavy-armor";
resistances = [];
resistances.push("table: 0000000000677d50")
resistances.push("table: 0000000000678190")
resistances.push("table: 0000000000677d10")
resistances.push("table: 00000000006780d0")
doc["resistances"] = resistances;
db.item.insert(doc);

db.item.update({name:"repair-pack"}, {$set: {eng_name:"Repair pack"}});
db.item.update({name:"stone"}, {$set: {eng_name:"Stone"}});
db.item.update({name:"wood"}, {$set: {eng_name:"Wood"}});
db.item.update({name:"raw-wood"}, {$set: {eng_name:"Raw wood"}});
db.item.update({name:"copper-ore"}, {$set: {eng_name:"Copper ore"}});
db.item.update({name:"iron-ore"}, {$set: {eng_name:"Iron ore"}});
db.item.update({name:"coal"}, {$set: {eng_name:"Coal"}});
db.item.update({name:"copper-plate"}, {$set: {eng_name:"Copper plate"}});
db.item.update({name:"iron-plate"}, {$set: {eng_name:"Iron plate"}});
db.item.update({name:"steel-plate"}, {$set: {eng_name:"Steel plate"}});
db.item.update({name:"stone-brick"}, {$set: {eng_name:"Stone brick"}});
db.item.update({name:"iron-axe"}, {$set: {eng_name:"Iron axe"}});
db.item.update({name:"steel-axe"}, {$set: {eng_name:"Steel axe"}});
db.item.update({name:"iron-gear-wheel"}, {$set: {eng_name:"Iron gear wheel"}});
db.item.update({name:"iron-stick"}, {$set: {eng_name:"Iron stick"}});
db.item.update({name:"copper-cable"}, {$set: {eng_name:"Copper cable"}});
db.item.update({name:"pistol"}, {$set: {eng_name:"Pistol"}});
db.item.update({name:"submachine-gun"}, {$set: {eng_name:"Submachine gun"}});
db.item.update({name:"vehicle-machine-gun"}, {$set: {eng_name:"Vehicle machine gun"}});
db.item.update({name:"tank-machine-gun"}, {$set: {eng_name:"Vehicle machine gun"}});
db.item.update({name:"rocket-launcher"}, {$set: {eng_name:"Rocket launcher"}});
db.item.update({name:"flame-thrower"}, {$set: {eng_name:"Flamethrower"}});
db.item.update({name:"flame-thrower-ammo"}, {$set: {eng_name:"Flamethrower ammo"}});
db.item.update({name:"flamethrower-turret"}, {$set: {eng_name:"Flamethrower turret"}});
db.item.update({name:"electronic-circuit"}, {$set: {eng_name:"Electronic circuit"}});
db.item.update({name:"advanced-circuit"}, {$set: {eng_name:"Advanced circuit"}});
db.item.update({name:"processing-unit"}, {$set: {eng_name:"Processing unit"}});
db.item.update({name:"light-armor"}, {$set: {eng_name:"Light armor"}});
db.item.update({name:"heavy-armor"}, {$set: {eng_name:"Heavy armor"}});
db.item.update({name:"modular-armor"}, {$set: {eng_name:"Modular armor"}});
db.item.update({name:"power-armor"}, {$set: {eng_name:"Power armor"}});
db.item.update({name:"power-armor-mk2"}, {$set: {eng_name:"Power armor MK2"}});
db.item.update({name:"rocket"}, {$set: {eng_name:"Rocket"}});
db.item.update({name:"explosive-rocket"}, {$set: {eng_name:"Explosive rocket"}});
db.item.update({name:"firearm-magazine"}, {$set: {eng_name:"Firearm magazine"}});
db.item.update({name:"piercing-rounds-magazine"}, {$set: {eng_name:"Piercing rounds magazine"}});
db.item.update({name:"laser-turret"}, {$set: {eng_name:"Laser turret"}});
db.item.update({name:"solar-panel"}, {$set: {eng_name:"Solar panel"}});
db.item.update({name:"fish"}, {$set: {eng_name:"Fish"}});
db.item.update({name:"raw-fish"}, {$set: {eng_name:"Raw fish"}});
db.item.update({name:"computer"}, {$set: {eng_name:"Computer"}});
db.item.update({name:"lab"}, {$set: {eng_name:"Lab"}});
db.item.update({name:"science-pack-1"}, {$set: {eng_name:"Science pack 1"}});
db.item.update({name:"science-pack-2"}, {$set: {eng_name:"Science pack 2"}});
db.item.update({name:"science-pack-3"}, {$set: {eng_name:"Science pack 3"}});
db.item.update({name:"alien-science-pack"}, {$set: {eng_name:"Alien science pack"}});
db.item.update({name:"red-wire"}, {$set: {eng_name:"Red wire"}});
db.item.update({name:"green-wire"}, {$set: {eng_name:"Green wire"}});
db.item.update({name:"alien-artifact"}, {$set: {eng_name:"Alien artifact"}});
db.item.update({name:"speed-module"}, {$set: {eng_name:"Speed module"}});
db.item.update({name:"speed-module-2"}, {$set: {eng_name:"Speed module 2"}});
db.item.update({name:"speed-module-3"}, {$set: {eng_name:"Speed module 3"}});
db.item.update({name:"productivity-module"}, {$set: {eng_name:"Productivity module"}});
db.item.update({name:"productivity-module-2"}, {$set: {eng_name:"Productivity module 2"}});
db.item.update({name:"productivity-module-3"}, {$set: {eng_name:"Productivity module 3"}});
db.item.update({name:"effectivity-module"}, {$set: {eng_name:"Efficiency module"}});
db.item.update({name:"effectivity-module-2"}, {$set: {eng_name:"Efficiency module 2"}});
db.item.update({name:"effectivity-module-3"}, {$set: {eng_name:"Efficiency module 3"}});
db.item.update({name:"shotgun"}, {$set: {eng_name:"Shotgun"}});
db.item.update({name:"combat-shotgun"}, {$set: {eng_name:"Combat shotgun"}});
db.item.update({name:"shotgun-shell"}, {$set: {eng_name:"Shotgun shells"}});
db.item.update({name:"piercing-shotgun-shell"}, {$set: {eng_name:"Piercing shotgun shells"}});
db.item.update({name:"railgun"}, {$set: {eng_name:"Railgun"}});
db.item.update({name:"railgun-dart"}, {$set: {eng_name:"Railgun darts"}});
db.item.update({name:"defender-capsule"}, {$set: {eng_name:"Defender capsule"}});
db.item.update({name:"distractor-capsule"}, {$set: {eng_name:"Distractor capsule"}});
db.item.update({name:"destroyer-capsule"}, {$set: {eng_name:"Destroyer capsule"}});
db.item.update({name:"poison-capsule"}, {$set: {eng_name:"Poison capsule"}});
db.item.update({name:"slowdown-capsule"}, {$set: {eng_name:"Slowdown capsule"}});
db.item.update({name:"grenade"}, {$set: {eng_name:"Grenade"}});
db.item.update({name:"cluster-grenade"}, {$set: {eng_name:"Cluster grenade"}});
db.item.update({name:"discharge-defense-remote"}, {$set: {eng_name:"Discharge defense remote"}});
db.item.update({name:"blueprint"}, {$set: {eng_name:"Blueprint"}});
db.item.update({name:"blueprint-book"}, {$set: {eng_name:"Blueprint book"}});
db.item.update({name:"rail-planner"}, {$set: {eng_name:"Rail planner"}});
db.item.update({name:"deconstruction-planner"}, {$set: {eng_name:"Deconstruction planner"}});
db.item.update({name:"sulfur"}, {$set: {eng_name:"Sulfur"}});
db.item.update({name:"solid-fuel"}, {$set: {eng_name:"Solid fuel"}});
db.item.update({name:"plastic-bar"}, {$set: {eng_name:"Plastic bar"}});
db.item.update({name:"engine-unit"}, {$set: {eng_name:"Engine unit"}});
db.item.update({name:"electric-engine-unit"}, {$set: {eng_name:"Electric engine unit"}});
db.item.update({name:"flying-robot-frame"}, {$set: {eng_name:"Flying robot frame"}});
db.item.update({name:"explosives"}, {$set: {eng_name:"Explosives"}});
db.item.update({name:"battery"}, {$set: {eng_name:"Battery"}});
db.item.update({name:"empty-barrel"}, {$set: {eng_name:"Empty barrel"}});
db.item.update({name:"crude-oil-barrel"}, {$set: {eng_name:"Crude oil barrel"}});
db.item.update({name:"small-plane"}, {$set: {eng_name:"Small plane"}});
db.item.update({name:"coin"}, {$set: {eng_name:"Coin"}});
db.item.update({name:"cannon-shell"}, {$set: {eng_name:"Cannon shell"}});
db.item.update({name:"explosive-cannon-shell"}, {$set: {eng_name:"Explosive cannon shell"}});
db.item.update({name:"tank-cannon"}, {$set: {eng_name:"Tank cannon"}});
db.item.update({name:"low-density-structure"}, {$set: {eng_name:"Low density structure"}});
db.item.update({name:"rocket-fuel"}, {$set: {eng_name:"Rocket fuel"}});
db.item.update({name:"rocket-control-unit"}, {$set: {eng_name:"Rocket control unit"}});
db.item.update({name:"rocket-part"}, {$set: {eng_name:"Rocket part"}});
db.item.update({name:"satellite"}, {$set: {eng_name:"Satellite"}});
db.item.update({name:"stone-path"}, {$set: {eng_name:"Stone path"}});
db.item.update({name:"concrete"}, {$set: {eng_name:"Concrete"}});
db.item.update({name:"hazard-concrete"}, {$set: {eng_name:"Hazard concrete"}});
db.item.update({name:"rail"}, {$set: {eng_name:"Rail"}});
db.item.update({name:"landfill"}, {$set: {eng_name:"Landfill"}});
db.item.update({name:"electric-energy-interface "}, {$set: {eng_name:" Electric energy interface"}});
db.item.update({name:"stone"}, {$set: {eng_name:"Stone"}});
db.item.update({name:"wooden-chest"}, {$set: {eng_name:"Wooden chest"}});
db.item.update({name:"copper-ore"}, {$set: {eng_name:"Copper ore"}});
db.item.update({name:"iron-ore"}, {$set: {eng_name:"Iron ore"}});
db.item.update({name:"coal"}, {$set: {eng_name:"Coal"}});
db.item.update({name:"stone-furnace"}, {$set: {eng_name:"Stone furnace"}});
db.item.update({name:"steel-furnace"}, {$set: {eng_name:"Steel furnace"}});
db.item.update({name:"electric-furnace"}, {$set: {eng_name:"Electric furnace"}});
db.item.update({name:"transport-belt"}, {$set: {eng_name:"Transport belt"}});
db.item.update({name:"fast-transport-belt"}, {$set: {eng_name:"Fast transport belt"}});
db.item.update({name:"express-transport-belt"}, {$set: {eng_name:"Express transport belt"}});
db.item.update({name:"underground-belt"}, {$set: {eng_name:"Underground belt"}});
db.item.update({name:"fast-underground-belt"}, {$set: {eng_name:"Fast underground belt"}});
db.item.update({name:"express-underground-belt"}, {$set: {eng_name:"Express underground belt"}});
db.item.update({name:"loader"}, {$set: {eng_name:"Loader"}});
db.item.update({name:"fast-loader"}, {$set: {eng_name:"Fast loader"}});
db.item.update({name:"express-loader"}, {$set: {eng_name:"Express loader"}});
db.item.update({name:"electric-mining-drill"}, {$set: {eng_name:"Electric mining drill"}});
db.item.update({name:"burner-mining-drill"}, {$set: {eng_name:"Burner mining drill"}});
db.item.update({name:"gun-turret"}, {$set: {eng_name:"Gun turret"}});
db.item.update({name:"rocket-turret"}, {$set: {eng_name:"Rocket turret"}});
db.item.update({name:"laser-turret"}, {$set: {eng_name:"Laser turret"}});
db.item.update({name:"flamethrower-turret"}, {$set: {eng_name:"Flamethrower turret"}});
db.item.update({name:"burner-inserter"}, {$set: {eng_name:"Burner inserter"}});
db.item.update({name:"inserter"}, {$set: {eng_name:"Inserter"}});
db.item.update({name:"long-handed-inserter"}, {$set: {eng_name:"Long handed inserter"}});
db.item.update({name:"fast-inserter"}, {$set: {eng_name:"Fast inserter"}});
db.item.update({name:"filter-inserter"}, {$set: {eng_name:"Filter inserter"}});
db.item.update({name:"stack-inserter"}, {$set: {eng_name:"Stack inserter"}});
db.item.update({name:"stack-filter-inserter"}, {$set: {eng_name:"Stack filter inserter"}});
db.item.update({name:"iron-chest"}, {$set: {eng_name:"Iron chest"}});
db.item.update({name:"steel-chest"}, {$set: {eng_name:"Steel chest"}});
db.item.update({name:"construction-robot"}, {$set: {eng_name:"Construction robot"}});
db.item.update({name:"logistic-robot"}, {$set: {eng_name:"Logistic robot"}});
db.item.update({name:"logistic-chest-active-provider"}, {$set: {eng_name:"Active provider chest"}});
db.item.update({name:"logistic-chest-passive-provider"}, {$set: {eng_name:"Passive provider chest"}});
db.item.update({name:"logistic-chest-storage"}, {$set: {eng_name:"Storage chest"}});
db.item.update({name:"logistic-chest-requester"}, {$set: {eng_name:"Requester chest"}});
db.item.update({name:"beacon"}, {$set: {eng_name:"Beacon"}});
db.item.update({name:"car"}, {$set: {eng_name:"Car"}});
db.item.update({name:"tank"}, {$set: {eng_name:"Tank"}});
db.item.update({name:"straight-rail"}, {$set: {eng_name:"Straight rail"}});
db.item.update({name:"straight-rail-remnants"}, {$set: {eng_name:"Straight rail remnants"}});
db.item.update({name:"curved-rail"}, {$set: {eng_name:"Curved rail"}});
db.item.update({name:"curved-rail-remnants"}, {$set: {eng_name:"Curved rail remnants"}});
db.item.update({name:"offshore-pump"}, {$set: {eng_name:"Offshore pump"}});
db.item.update({name:"small-pump"}, {$set: {eng_name:"Small pump"}});
db.item.update({name:"pipe"}, {$set: {eng_name:"Pipe"}});
db.item.update({name:"pipe-to-ground"}, {$set: {eng_name:"Pipe to ground"}});
db.item.update({name:"diesel-locomotive"}, {$set: {eng_name:"Diesel locomotive"}});
db.item.update({name:"boiler"}, {$set: {eng_name:"Boiler"}});
db.item.update({name:"copper-cable"}, {$set: {eng_name:"Copper cable"}});
db.item.update({name:"small-electric-pole"}, {$set: {eng_name:"Small electric pole"}});
db.item.update({name:"steam-engine"}, {$set: {eng_name:"Steam engine"}});
db.item.update({name:"assembling-machine-1"}, {$set: {eng_name:"Assembling machine 1"}});
db.item.update({name:"assembling-machine-2"}, {$set: {eng_name:"Assembling machine 2"}});
db.item.update({name:"assembling-machine-3"}, {$set: {eng_name:"Assembling machine 3"}});
db.item.update({name:"oil-refinery"}, {$set: {eng_name:"Oil refinery"}});
db.item.update({name:"chemical-plant"}, {$set: {eng_name:"Chemical plant"}});
db.item.update({name:"biter-spawner"}, {$set: {eng_name:"Biter spawner"}});
db.item.update({name:"rocket"}, {$set: {eng_name:"Rocket"}});
db.item.update({name:"land-mine"}, {$set: {eng_name:"Land mine"}});
db.item.update({name:"fish"}, {$set: {eng_name:"Fish"}});
db.item.update({name:"solar-panel"}, {$set: {eng_name:"Solar panel"}});
db.item.update({name:"small-biter"}, {$set: {eng_name:"Small biter"}});
db.item.update({name:"small-biter-corpse"}, {$set: {eng_name:"Small biter corpse"}});
db.item.update({name:"medium-biter"}, {$set: {eng_name:"Medium biter"}});
db.item.update({name:"medium-biter-corpse"}, {$set: {eng_name:"Medium biter corpse"}});
db.item.update({name:"big-biter"}, {$set: {eng_name:"Big biter"}});
db.item.update({name:"behemoth-biter"}, {$set: {eng_name:"Behemoth biter"}});
db.item.update({name:"big-biter-corpse"}, {$set: {eng_name:"Big biter corpse"}});
db.item.update({name:"behemoth-biter-corpse"}, {$set: {eng_name:"Behemoth biter corpse"}});
db.item.update({name:"biter-spawner-corpse"}, {$set: {eng_name:"Biter spawner corpse"}});
db.item.update({name:"small-spitter"}, {$set: {eng_name:"Small spitter"}});
db.item.update({name:"small-spitter-corpse"}, {$set: {eng_name:"Small spitter corpse"}});
db.item.update({name:"medium-spitter"}, {$set: {eng_name:"Medium spitter"}});
db.item.update({name:"medium-spitter-corpse"}, {$set: {eng_name:"Medium spitter corpse"}});
db.item.update({name:"big-spitter"}, {$set: {eng_name:"Big spitter"}});
db.item.update({name:"behemoth-spitter"}, {$set: {eng_name:"Behemoth spitter"}});
db.item.update({name:"big-spitter-corpse"}, {$set: {eng_name:"Big spitter corpse"}});
db.item.update({name:"behemoth-spitter-corpse"}, {$set: {eng_name:"Behemoth spitter corpse"}});
db.item.update({name:"spitter-spawner"}, {$set: {eng_name:"Spitter spawner"}});
db.item.update({name:"spitter-spawner-corpse"}, {$set: {eng_name:"Spitter spawner corpse"}});
db.item.update({name:"radar"}, {$set: {eng_name:"Radar"}});
db.item.update({name:"stone-wall"}, {$set: {eng_name:"Stone wall"}});
db.item.update({name:"gate"}, {$set: {eng_name:"Gate"}});
db.item.update({name:"lab"}, {$set: {eng_name:"Lab"}});
db.item.update({name:"player"}, {$set: {eng_name:"Player"}});
db.item.update({name:"player-port"}, {$set: {eng_name:"Player port"}});
db.item.update({name:"item-on-ground"}, {$set: {eng_name:"Item on ground"}});
db.item.update({name:"small-lamp"}, {$set: {eng_name:"Lamp"}});
db.item.update({name:"space-module-wreck"}, {$set: {eng_name:"Space module wreckage"}});
db.item.update({name:"rocket-silo"}, {$set: {eng_name:"Rocket silo"}});
db.item.update({name:"roboport"}, {$set: {eng_name:"Roboport"}});
db.item.update({name:"splitter"}, {$set: {eng_name:"Splitter"}});
db.item.update({name:"fast-splitter"}, {$set: {eng_name:"Fast splitter"}});
db.item.update({name:"express-splitter"}, {$set: {eng_name:"Express splitter"}});
db.item.update({name:"market"}, {$set: {eng_name:"Market"}});
db.item.update({name:"train-stop"}, {$set: {eng_name:"Train stop"}});
db.item.update({name:"rail-signal"}, {$set: {eng_name:"Rail signal"}});
db.item.update({name:"rail-chain-signal"}, {$set: {eng_name:"Rail chain signal"}});
db.item.update({name:"cargo-wagon"}, {$set: {eng_name:"Cargo wagon"}});
db.item.update({name:"decider-combinator"}, {$set: {eng_name:"Decider combinator"}});
db.item.update({name:"arithmetic-combinator"}, {$set: {eng_name:"Arithmetic combinator"}});
db.item.update({name:"constant-combinator"}, {$set: {eng_name:"Constant combinator"}});
db.item.update({name:"power-switch"}, {$set: {eng_name:"Power switch"}});
db.item.update({name:"big-electric-pole"}, {$set: {eng_name:"Big electric pole"}});
db.item.update({name:"medium-electric-pole"}, {$set: {eng_name:"Medium electric pole"}});
db.item.update({name:"accumulator"}, {$set: {eng_name:"Accumulator"}});
db.item.update({name:"substation"}, {$set: {eng_name:"Substation"}});
db.item.update({name:"small-worm-turret"}, {$set: {eng_name:"Small worm"}});
db.item.update({name:"medium-worm-turret"}, {$set: {eng_name:"Medium worm"}});
db.item.update({name:"big-worm-turret"}, {$set: {eng_name:"Big worm"}});
db.item.update({name:"small-worm-corpse"}, {$set: {eng_name:"Small worm corpse"}});
db.item.update({name:"medium-worm-corpse"}, {$set: {eng_name:"Medium worm corpse"}});
db.item.update({name:"big-worm-corpse"}, {$set: {eng_name:"Big worm corpse"}});
db.item.update({name:"defender"}, {$set: {eng_name:"Defender"}});
db.item.update({name:"distractor"}, {$set: {eng_name:"Distractor"}});
db.item.update({name:"destroyer"}, {$set: {eng_name:"Destroyer"}});
db.item.update({name:"small-remnants"}, {$set: {eng_name:"Small remnants"}});
db.item.update({name:"medium-remnants"}, {$set: {eng_name:"Medium remnants"}});
db.item.update({name:"big-remnants"}, {$set: {eng_name:"Big Remnants"}});
db.item.update({name:"small-scorchmark"}, {$set: {eng_name:"Small scorchmark"}});
db.item.update({name:"wall-remnants"}, {$set: {eng_name:"Wall remnants"}});
db.item.update({name:"storage-tank"}, {$set: {eng_name:"Storage tank"}});
db.item.update({name:"pumpjack"}, {$set: {eng_name:"Pumpjack"}});
db.item.update({name:"energy-shield-equipment"}, {$set: {eng_name:"Energy shield"}});
db.item.update({name:"energy-shield-mk2-equipment"}, {$set: {eng_name:"Energy shield MK2"}});
db.item.update({name:"battery-equipment"}, {$set: {eng_name:"Battery"}});
db.item.update({name:"battery-mk2-equipment"}, {$set: {eng_name:"Battery MK2"}});
db.item.update({name:"solar-panel-equipment"}, {$set: {eng_name:"Portable solar panel"}});
db.item.update({name:"fusion-reactor-equipment"}, {$set: {eng_name:"Portable fusion reactor"}});
db.item.update({name:"personal-laser-defense-equipment"}, {$set: {eng_name:"Personal laser defense"}});
db.item.update({name:"discharge-defense-equipment"}, {$set: {eng_name:"Discharge defense"}});
db.item.update({name:"exoskeleton-equipment"}, {$set: {eng_name:"Exoskeleton"}});
db.item.update({name:"night-vision-equipment"}, {$set: {eng_name:"Nightvision"}});
db.item.update({name:"personal-roboport-equipment"}, {$set: {eng_name:"Personal roboport"}});
db.item.update({name:"accumulator"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-accumulator.png"}});
db.item.update({name:"beacon"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-beacon.png"}});
db.item.update({name:"rail"}, {$set: {iconurl:"https://wiki.factorio.com/images/Straight-rail.png"}});
db.item.update({name:"transport-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-transport-belt.png"}});
db.item.update({name:"underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-transport-belt-to-ground.png"}});
db.item.update({name:"fast-underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Fast-transport-belt-to-ground.png"}});
db.item.update({name:"express-underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Express-transport-belt-to-ground.png"}});
db.item.update({name:"splitter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-splitter.png"}});
db.item.update({name:"personal-laser-defense-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-laser-defense-equipment.png"}});
db.item.update({name:"discharge-defense-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-electric-discharge-defense-equipment.png"}});
db.item.update({name:"exoskeleton-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/thumb/Basic-exoskeleton-equipment.png/32px-Basic-exoskeleton-equipment.png"}});
db.item.update({name:"inserter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Inserter-icon.png"}});
db.item.update({name:"stack-filter-inserter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Stack_filter_inserter.png"}});
db.item.update({name:"blueprint-book"}, {$set: {iconurl:"https://wiki.factorio.com/images/Blueprint_book.png"}});
db.item.update({name:"grenade"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-grenade.png"}});
db.item.update({name:"cluster-grenade"}, {$set: {iconurl:"https://wiki.factorio.com/images/Cluster_grenade.png"}});
db.item.update({name:"discharge-defense-remote"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-electric-discharge-defense-remote.png"}});
db.item.update({name:"electric-mining-drill"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-mining-drill.png"}});
db.item.update({name:"light-armor"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-armor.png"}});
db.item.update({name:"modular-armor"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-modular-armor.png"}});
db.item.update({name:"firearm-magazine"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-bullet-magazine.png"}});
db.item.update({name:"piercing-rounds-magazine"}, {$set: {iconurl:"https://wiki.factorio.com/images/Piercing-bullet-magazine.png"}});
