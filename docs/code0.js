gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.GDBackgroundObjects1= [];
gdjs.Title_32screenCode.GDBackgroundObjects2= [];
gdjs.Title_32screenCode.GDBackgroundObjects3= [];
gdjs.Title_32screenCode.GDGameTitleObjects1= [];
gdjs.Title_32screenCode.GDGameTitleObjects2= [];
gdjs.Title_32screenCode.GDGameTitleObjects3= [];
gdjs.Title_32screenCode.GDGameHeading1Objects1= [];
gdjs.Title_32screenCode.GDGameHeading1Objects2= [];
gdjs.Title_32screenCode.GDGameHeading1Objects3= [];
gdjs.Title_32screenCode.GDEnterToStartObjects1= [];
gdjs.Title_32screenCode.GDEnterToStartObjects2= [];
gdjs.Title_32screenCode.GDEnterToStartObjects3= [];
gdjs.Title_32screenCode.GDActionsObjects1= [];
gdjs.Title_32screenCode.GDActionsObjects2= [];
gdjs.Title_32screenCode.GDActionsObjects3= [];
gdjs.Title_32screenCode.GDButtonsObjects1= [];
gdjs.Title_32screenCode.GDButtonsObjects2= [];
gdjs.Title_32screenCode.GDButtonsObjects3= [];
gdjs.Title_32screenCode.GDOptionsTextObjects1= [];
gdjs.Title_32screenCode.GDOptionsTextObjects2= [];
gdjs.Title_32screenCode.GDOptionsTextObjects3= [];
gdjs.Title_32screenCode.GDMusicTextObjects1= [];
gdjs.Title_32screenCode.GDMusicTextObjects2= [];
gdjs.Title_32screenCode.GDMusicTextObjects3= [];
gdjs.Title_32screenCode.GDSoundTextObjects1= [];
gdjs.Title_32screenCode.GDSoundTextObjects2= [];
gdjs.Title_32screenCode.GDSoundTextObjects3= [];
gdjs.Title_32screenCode.GDDifficultyTextObjects1= [];
gdjs.Title_32screenCode.GDDifficultyTextObjects2= [];
gdjs.Title_32screenCode.GDDifficultyTextObjects3= [];
gdjs.Title_32screenCode.GDCursorObjects1= [];
gdjs.Title_32screenCode.GDCursorObjects2= [];
gdjs.Title_32screenCode.GDCursorObjects3= [];
gdjs.Title_32screenCode.GDCursorTextWObjects1= [];
gdjs.Title_32screenCode.GDCursorTextWObjects2= [];
gdjs.Title_32screenCode.GDCursorTextWObjects3= [];
gdjs.Title_32screenCode.GDCursorTextSObjects1= [];
gdjs.Title_32screenCode.GDCursorTextSObjects2= [];
gdjs.Title_32screenCode.GDCursorTextSObjects3= [];
gdjs.Title_32screenCode.GDCursorTextAObjects1= [];
gdjs.Title_32screenCode.GDCursorTextAObjects2= [];
gdjs.Title_32screenCode.GDCursorTextAObjects3= [];
gdjs.Title_32screenCode.GDCursorTextDObjects1= [];
gdjs.Title_32screenCode.GDCursorTextDObjects2= [];
gdjs.Title_32screenCode.GDCursorTextDObjects3= [];

gdjs.Title_32screenCode.conditionTrue_0 = {val:false};
gdjs.Title_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition3IsTrue_0 = {val:false};
gdjs.Title_32screenCode.conditionTrue_1 = {val:false};
gdjs.Title_32screenCode.condition0IsTrue_1 = {val:false};
gdjs.Title_32screenCode.condition1IsTrue_1 = {val:false};
gdjs.Title_32screenCode.condition2IsTrue_1 = {val:false};
gdjs.Title_32screenCode.condition3IsTrue_1 = {val:false};


gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 0;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicText"), gdjs.Title_32screenCode.GDMusicTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(Math.max(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) - 0.101, 0));
}{for(var i = 0, len = gdjs.Title_32screenCode.GDMusicTextObjects2.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDMusicTextObjects2[i].setString("<<   " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 10)) + "   >>");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 3, 30 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 0;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.Title_32screenCode.GDSoundTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(Math.max(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) - 0.101, 0));
}{for(var i = 0, len = gdjs.Title_32screenCode.GDSoundTextObjects2.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDSoundTextObjects2[i].setString("<<   " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) * 10)) + "   >>");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\sci-fi-sounds\\Audio\\laserRetro_000.ogg", false, 10 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), 1);
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 1;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Title_32screenCode.GDDifficultyTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString("<<   " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "   >>");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% enemy dmg"));
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% score"));
}
}}

}


};gdjs.Title_32screenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 1;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicText"), gdjs.Title_32screenCode.GDMusicTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(4).add(0.1);
}{for(var i = 0, len = gdjs.Title_32screenCode.GDMusicTextObjects2.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDMusicTextObjects2[i].setString("<<   " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 10)) + "   >>");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 3, 30 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 1;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.Title_32screenCode.GDSoundTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(5).add(0.1);
}{for(var i = 0, len = gdjs.Title_32screenCode.GDSoundTextObjects2.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDSoundTextObjects2[i].setString("<<   " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) * 10)) + "   >>");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\sci-fi-sounds\\Audio\\laserRetro_000.ogg", false, 10 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), 1);
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 5;
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Title_32screenCode.GDDifficultyTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString("<<   " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "   >>");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% enemy dmg"));
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% score"));
}
}}

}


};gdjs.Title_32screenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Title_32screenCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDBackgroundObjects1[i].addPolarForce(90, 80, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Title_32screenCode.GDBackgroundObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDBackgroundObjects1[i].getY() > 900 ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDBackgroundObjects1[k] = gdjs.Title_32screenCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDBackgroundObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDBackgroundObjects1[i].setY(gdjs.Title_32screenCode.GDBackgroundObjects1[i].getY() - (1800));
}
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].resetTimer("EnterToStartBlink");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].unpauseTimer("EnterToStartBlink");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Runtime");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDEnterToStartObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDEnterToStartObjects1[i].timerElapsedTime("EnterToStartBlink", 0.75) ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDEnterToStartObjects1[k] = gdjs.Title_32screenCode.GDEnterToStartObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDEnterToStartObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterToStart"), gdjs.Title_32screenCode.GDEnterToStartObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32screenCode.GDEnterToStartObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDEnterToStartObjects1[i].timerElapsedTime("EnterToStartBlink", 1.5) ) {
        gdjs.Title_32screenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32screenCode.GDEnterToStartObjects1[k] = gdjs.Title_32screenCode.GDEnterToStartObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = k;}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32screenCode.GDEnterToStartObjects1 */
{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].setString("Press Enter to Start!");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDEnterToStartObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDEnterToStartObjects1[i].resetTimer("EnterToStartBlink");
}
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Runtime");
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Assets\\Music\\Crash Landing.mp3", 3, false, 30 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 3) >= 29;
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelPlayingOffset(runtimeScene, 3, 0);
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Title_32screenCode.GDDifficultyTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicText"), gdjs.Title_32screenCode.GDMusicTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.Title_32screenCode.GDSoundTextObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDMusicTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDMusicTextObjects1[i].setString("<<   " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 10)) + "   >>");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDSoundTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDSoundTextObjects1[i].setString("<<   " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) * 10)) + "   >>");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString("<<   " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "   >>");
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% enemy dmg"));
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].setString(gdjs.Title_32screenCode.GDDifficultyTextObjects1[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(100 + 25 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) - 3)) + "% score"));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Title_32screenCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("CursorTextA"), gdjs.Title_32screenCode.GDCursorTextAObjects1);
gdjs.copyArray(runtimeScene.getObjects("CursorTextD"), gdjs.Title_32screenCode.GDCursorTextDObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDCursorTextAObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDCursorTextAObjects1[i].setY(398 + 32 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDCursorTextDObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDCursorTextDObjects1[i].setY(398 + 32 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Title_32screenCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDCursorObjects1[i].setY(396 + 32 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
gdjs.Title_32screenCode.condition2IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.Title_32screenCode.condition1IsTrue_0.val ) {
{
{gdjs.Title_32screenCode.conditionTrue_1 = gdjs.Title_32screenCode.condition2IsTrue_0;
gdjs.Title_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9202148);
}
}}
}
if (gdjs.Title_32screenCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
gdjs.Title_32screenCode.condition2IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 2;
}if ( gdjs.Title_32screenCode.condition1IsTrue_0.val ) {
{
{gdjs.Title_32screenCode.conditionTrue_1 = gdjs.Title_32screenCode.condition2IsTrue_0;
gdjs.Title_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9203436);
}
}}
}
if (gdjs.Title_32screenCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{



}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32screenCode.conditionTrue_1 = gdjs.Title_32screenCode.condition1IsTrue_0;
gdjs.Title_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9204708);
}
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Title_32screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
gdjs.Title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.Title_32screenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32screenCode.conditionTrue_1 = gdjs.Title_32screenCode.condition1IsTrue_0;
gdjs.Title_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9210428);
}
}}
if (gdjs.Title_32screenCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Title_32screenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDBackgroundObjects1.length = 0;
gdjs.Title_32screenCode.GDBackgroundObjects2.length = 0;
gdjs.Title_32screenCode.GDBackgroundObjects3.length = 0;
gdjs.Title_32screenCode.GDGameTitleObjects1.length = 0;
gdjs.Title_32screenCode.GDGameTitleObjects2.length = 0;
gdjs.Title_32screenCode.GDGameTitleObjects3.length = 0;
gdjs.Title_32screenCode.GDGameHeading1Objects1.length = 0;
gdjs.Title_32screenCode.GDGameHeading1Objects2.length = 0;
gdjs.Title_32screenCode.GDGameHeading1Objects3.length = 0;
gdjs.Title_32screenCode.GDEnterToStartObjects1.length = 0;
gdjs.Title_32screenCode.GDEnterToStartObjects2.length = 0;
gdjs.Title_32screenCode.GDEnterToStartObjects3.length = 0;
gdjs.Title_32screenCode.GDActionsObjects1.length = 0;
gdjs.Title_32screenCode.GDActionsObjects2.length = 0;
gdjs.Title_32screenCode.GDActionsObjects3.length = 0;
gdjs.Title_32screenCode.GDButtonsObjects1.length = 0;
gdjs.Title_32screenCode.GDButtonsObjects2.length = 0;
gdjs.Title_32screenCode.GDButtonsObjects3.length = 0;
gdjs.Title_32screenCode.GDOptionsTextObjects1.length = 0;
gdjs.Title_32screenCode.GDOptionsTextObjects2.length = 0;
gdjs.Title_32screenCode.GDOptionsTextObjects3.length = 0;
gdjs.Title_32screenCode.GDMusicTextObjects1.length = 0;
gdjs.Title_32screenCode.GDMusicTextObjects2.length = 0;
gdjs.Title_32screenCode.GDMusicTextObjects3.length = 0;
gdjs.Title_32screenCode.GDSoundTextObjects1.length = 0;
gdjs.Title_32screenCode.GDSoundTextObjects2.length = 0;
gdjs.Title_32screenCode.GDSoundTextObjects3.length = 0;
gdjs.Title_32screenCode.GDDifficultyTextObjects1.length = 0;
gdjs.Title_32screenCode.GDDifficultyTextObjects2.length = 0;
gdjs.Title_32screenCode.GDDifficultyTextObjects3.length = 0;
gdjs.Title_32screenCode.GDCursorObjects1.length = 0;
gdjs.Title_32screenCode.GDCursorObjects2.length = 0;
gdjs.Title_32screenCode.GDCursorObjects3.length = 0;
gdjs.Title_32screenCode.GDCursorTextWObjects1.length = 0;
gdjs.Title_32screenCode.GDCursorTextWObjects2.length = 0;
gdjs.Title_32screenCode.GDCursorTextWObjects3.length = 0;
gdjs.Title_32screenCode.GDCursorTextSObjects1.length = 0;
gdjs.Title_32screenCode.GDCursorTextSObjects2.length = 0;
gdjs.Title_32screenCode.GDCursorTextSObjects3.length = 0;
gdjs.Title_32screenCode.GDCursorTextAObjects1.length = 0;
gdjs.Title_32screenCode.GDCursorTextAObjects2.length = 0;
gdjs.Title_32screenCode.GDCursorTextAObjects3.length = 0;
gdjs.Title_32screenCode.GDCursorTextDObjects1.length = 0;
gdjs.Title_32screenCode.GDCursorTextDObjects2.length = 0;
gdjs.Title_32screenCode.GDCursorTextDObjects3.length = 0;

gdjs.Title_32screenCode.eventsList2(runtimeScene);
return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
