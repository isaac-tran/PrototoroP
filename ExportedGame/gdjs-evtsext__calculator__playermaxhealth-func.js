gdjs.evtsExt__Calculator__PlayerMaxHealth = {};
gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1= [];
gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects2= [];

gdjs.evtsExt__Calculator__PlayerMaxHealth.conditionTrue_0 = {val:false};
gdjs.evtsExt__Calculator__PlayerMaxHealth.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Calculator__PlayerMaxHealth.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerObject"), gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.trunc((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1[0].getVariables()).get("baseHealth"))) * Math.pow((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1[0].getVariables()).get("healthScalingRatio"))) + 1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Stage")) || 0 : 0) - 1) + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1[0].getVariables()).get("flatHealthBonusPerStage"))) * ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Stage")) || 0 : 0) - 1))); }}}

}


};

gdjs.evtsExt__Calculator__PlayerMaxHealth.func = function(runtimeScene, PlayerObject, Stage, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PlayerObject": PlayerObject
},
  _objectArraysMap: {
"PlayerObject": gdjs.objectsListsToArray(PlayerObject)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Stage") return Stage;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects1.length = 0;
gdjs.evtsExt__Calculator__PlayerMaxHealth.GDPlayerObjectObjects2.length = 0;

gdjs.evtsExt__Calculator__PlayerMaxHealth.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

