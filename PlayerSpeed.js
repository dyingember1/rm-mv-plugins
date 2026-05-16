/*:
 * @plugindesc Globally raise the player movement speed
 * @param SpeedBonus
 * @desc The flat speed value added to the player's normal movement speed.
 * @default 1.0
 * ver 1.3 (final)
 * 
 * @help
 * ============================================================================
 * Help Information
 * ============================================================================
 * This plugin increases the player's movement speed by overriding
 * the realMoveSpeed.
 *
 * This change is passive and permanent while the plugin is active.
 * 
 * To adjust the speed modifier, change the 'SpeedBonus' parameter in the
 * Plugin Manager.
 */



(function(){
    'use strict'; 
    var _pluginDesc = "modify the player's movement speed";
    var parameters = PluginManager.parameters('SpeedBoost');
    var speedBonus = Number(parameters['SpeedBonus'] || 1.0);

    var PlayerBaseSpeed = Game_CharacterBase.prototype.realMoveSpeed;
    
    Game_CharacterBase.prototype.realMoveSpeed = function(){
    var speed = PlayerBaseSpeed.call(this);
    if (this === $gamePlayer){
        return speed + speedBonus;
    }
    return speed;
    };
})();
