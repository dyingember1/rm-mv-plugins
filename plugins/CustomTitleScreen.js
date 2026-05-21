// ver - 0.5
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
 * @param OptionText
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
    var parameters = PluginManager.parameters('CustomTitleScreen');
    var txtNewGame = String(parameters['NewGameText'] || 'New Game');
    var txtContinue = String(parameters['ContinueText'] || 'Continue');
    var txtOptions = String(parameters['OptionsText'] || 'Options');
    var txtQuit = String(parameters['QuitText'] || 'Quit');
    
    //

})();




