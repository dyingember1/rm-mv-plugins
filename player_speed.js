//not done yet

/*:
 * @plugindesc Increase default player move speed globally.
 * @help
 */
(function(){
  var _Game_Player_initMembers = Game_Player.prototype.initMembers;
  Game_Player.prototype.initMembers = function(){
    _Game_Player_initMembers.call(this);
    this._moveSpeed = 5; // default is 4; set 5 or 6 for faster
  };
})();
