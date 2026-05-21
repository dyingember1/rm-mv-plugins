// ver - 1.0 final
/*:
 * @plugindesc Customise title screen menu
 * 
 * @param NewGameText
 * @text New Game Text
 * @desc The text displayed for starting a new game
 * @default New Game
 * 
 * @param ContinueText
 * @text Continue Text
 * @desc The text displayed to load and continue the game
 * @default Continue
 * 
 * @param OptionsText
 * @text Options Text
 * @desc The text displayed for the options menu 
 * @default Options
 * 
 * @param QuitText
 * @text Quit Text
 * @desc The text displayed for exiting the game
 * @default Quit
 * 
 * @help
 * ----------------------------------------------------
 * Overwrite the default text in the title screen menu
 * 
 * No plugin commands
 * ----------------------------------------------------
*/ 

(function(){
    'use strict';
    var parameters = PluginManager.parameters('CustomTitleScreenMenu');
    var txtNewGame = String(parameters['NewGameText'] || 'New Game');
    var txtContinue = String(parameters['ContinueText'] || 'Continue');
    var txtOptions = String(parameters['OptionsText'] || 'Options');
    var txtQuit = String(parameters['QuitText'] || 'Quit');
    
    // Overwriting the command list 
    Window_TitleCommand.prototype.makeCommandList = function(){
        this.addCommand(txtNewGame, 'NewGame');
        this.addCommand(txtContinue, 'Continue', this.isContinueEnabled());
        this.addCommand(txtOptions, 'Options');
        this.addCommand(txtQuit, 'quit');

    };

    // title command window generation to map to the quit
    var _Alias_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function(){
        _Alias_Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('quit', this.commandQuit.bind(this));
    };
    
    // Safely clip command memory to avoid out-of-bounds index selection errors
    var _Alias_Window_TitleCommand_selectLastCommand = Window_TitleCommand.prototype.selectLastCommand;
    Window_TitleCommand.prototype.selectLastCommand = function() {
        _Alias_Window_TitleCommand_selectLastCommand.call(this);
        if (this._index >= this.maxItems()) {
            this.select(0);
        }
    };


    // execute the shutdown protocol
    Scene_Title.prototype.commandQuit = function(){
        this._commandWindow.close();
        this.fadeOutAll();
        if (SceneManager.exit){
            SceneManager.exit();
        } else{
            window.close();
        }
    };

})();




