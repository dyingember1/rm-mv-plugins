//custom speed
/*:
*   @plugindesc Globally raise the player movement speed
*   @param SpeedBonus
*   @default 1.0
*   @help
*   ============================================================
*   This plugin raises the player's movement speed permanently
*   by overiding the 'realMoveSpeed'
*   speed = speed + speedBonus
*   ============================================================
*/



(function(){
    'use strict'; 
    var _pluginDesc = "modify the player's movement speed";
    var parameters = PluginManger.parameters('SpeedBoost');
    var speedBonus = Number(parameters['SpeedBonus'] || 1.0);
    var PlayerBaseSpeed = Game_CharacterBase.prototype.realMoveSpeed;
    
    Game_CharacterBase.prototype.realMoveSpeed = function(){
    var speed = PlayerBaseSpeed .call(this);
    if (this === $gamePlayer){
        return speed + speedBonus;
    }
    return speed;
    };
})();
