gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDGameOverTextObjects1= [];
gdjs.Game_32OverCode.GDGameOverTextObjects2= [];
gdjs.Game_32OverCode.GDScoreTextObjects1= [];
gdjs.Game_32OverCode.GDScoreTextObjects2= [];
gdjs.Game_32OverCode.GDHighScoreTextObjects1= [];
gdjs.Game_32OverCode.GDHighScoreTextObjects2= [];
gdjs.Game_32OverCode.GDReturnToTitleTextObjects1= [];
gdjs.Game_32OverCode.GDReturnToTitleTextObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32OverCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBackgroundObjects1[i].addPolarForce(90, 80, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32OverCode.GDBackgroundObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBackgroundObjects1[i].getY() > 900 ) {
        gdjs.Game_32OverCode.condition0IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDBackgroundObjects1[k] = gdjs.Game_32OverCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBackgroundObjects1.length = k;}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBackgroundObjects1[i].setY(gdjs.Game_32OverCode.GDBackgroundObjects1[i].getY() - (1800));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.Game_32OverCode.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_32OverCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHighScoreTextObjects1[i].setString("High Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{



}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnterToReturnBlink");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnterToReturnTimer");
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.75, "EnterToReturnBlink");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ReturnToTitleText"), gdjs.Game_32OverCode.GDReturnToTitleTextObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDReturnToTitleTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDReturnToTitleTextObjects1[i].setString("");
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "EnterToReturnBlink");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ReturnToTitleText"), gdjs.Game_32OverCode.GDReturnToTitleTextObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDReturnToTitleTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDReturnToTitleTextObjects1[i].setString("Press Enter to Return to Title");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnterToReturnBlink");
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects2.length = 0;
gdjs.Game_32OverCode.GDHighScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDHighScoreTextObjects2.length = 0;
gdjs.Game_32OverCode.GDReturnToTitleTextObjects1.length = 0;
gdjs.Game_32OverCode.GDReturnToTitleTextObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
