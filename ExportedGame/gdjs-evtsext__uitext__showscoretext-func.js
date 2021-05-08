gdjs.evtsExt__UIText__ShowScoreText = {};
gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1= [];
gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects2= [];

gdjs.evtsExt__UIText__ShowScoreText.conditionTrue_0 = {val:false};
gdjs.evtsExt__UIText__ShowScoreText.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UIText__ShowScoreText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("TextObject"), gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1[i].setPosition(108,95);
}
}{for(var i = 0, len = gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1[i].setString("+" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1[i].addPolarForce(0, 25, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowScoreAddedTimer");
}}

}


};

gdjs.evtsExt__UIText__ShowScoreText.func = function(runtimeScene, TextObject, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TextObject": TextObject
},
  _objectArraysMap: {
"TextObject": gdjs.objectsListsToArray(TextObject)
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects1.length = 0;
gdjs.evtsExt__UIText__ShowScoreText.GDTextObjectObjects2.length = 0;

gdjs.evtsExt__UIText__ShowScoreText.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

