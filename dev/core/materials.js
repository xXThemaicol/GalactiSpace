registryMaterial("Sapphire", "UNMETAL");
registryMaterial("Silicon", "METAL");
IDRegistry.genItemID("oilBucket"); 
Item.createItem("oilBucket", "Oil bucket", {name: "bucketOil", meta: 1}, {stack: 1});
IDRegistry.genItemID("fuelBucket"); 
Item.createItem("fuelBucket", "Fuel bucket", {name: "bucketFuel", meta: 1}, {stack: 1});
LiquidRegistry.registerLiquid("oil", "Oil", ["Oil"]);
LiquidRegistry.registerItem("oil", {id: 325, data: 0}, {id: BlockID.oilBucket, data: 0});
LiquidRegistry.registerLiquid("fuel", "Fuel", ["Fuel"]);
LiquidRegistry.registerItem("fuel", {id: 325, data: 0}, {id: BlockID.fuelBucket, data: 0});
LiquidRegistry.registerLiquid("oxygen", "Oxygen", ["Oxygen"]);