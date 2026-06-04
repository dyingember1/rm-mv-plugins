/*:
*
* @plugindesc manage save files
*
* @param slots
* @desc number of total slots
* @default 6
*
* @help
* =================================================================
* 1. Manage the number of save slots available to the player in the game.
* 2. Save the current pogress to all the save slots.
* 3. Clean all the save data, except for global and config.
*
* Plugin commands:
* 1. save to all slots : overwriteallslots
* 2. delete data from all slots : deleteallsaves
*/

(function(){
    'use strict';

    //change max slots

    //fetch parameters
    var parameters = PluginManager.parameters('SlotManager');
    //set the custom value of maxSlots or leave default 6
    var maxSlots = Number(parameters['slots'])  || 6;
    //overwrite original maxSavefiles
    DataManager.maxSavefiles = function(){
        //return the custom value to game
        return maxSlots;
    };


    //save to all

    DataManager.saveToAllSaves = function() {
        // load the current progress data
        $gameSystem.onBeforeSave();

        // Loop from 1 to maxSavefiles to save data
        for (var i = 1; i <= this.maxSavefiles(); i++) {
            DataManager.saveGame(i);
        }
        StorageManager.cleanBackup();
    };


    //delete all

    DataManager.deleteAllSaves = function() {

        // Loop from 1 to maxSavefiles to delete data
        for (var i = 1; i <= this.maxSavefiles(); i++) {
            //check if the save file exists
            if (StorageManager.exists(i)){
             StorageManager.remove(i);
            }
        }
        StorageManager.cleanBackup();
    };


    //plugin commands management
    var _Alias_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Alias_Game_Interpreter_pluginCommand.call(this, command, args);

        if (command.toLowerCase() === 'overwriteallslots') {
            DataManager.saveToAllSaves();
        }
        if (command.toLowerCase() === 'deleteallsaves') {
            DataManager.deleteAllSaves();
        };
    };

})();

