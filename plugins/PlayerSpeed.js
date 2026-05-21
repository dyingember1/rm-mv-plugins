// ver 2.0 final

/*:
 * @plugindesc Globally raise the player movement speed
 * @param SpeedBonus
 * @type number
 * @min 0
 * @max 5
 * @desc The flat speed value added to the player's normal movement speed.
 * @default 1.0
 *
 * @help
 * ============================================================================
 * Help Information
 * ============================================================================
 * This plugin increases the player's movement speed by overriding
 * the realMoveSpeed.
 *
 * To adjust the speed modifier, change the 'SpeedBonus' parameter in the
 * Plugin Manager.
 */

(function(){
  'use strict';
  var parameters = PluginManager.parameters('PlayerSpeed');
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
