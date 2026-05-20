//=============================================================================
// Dynamic Parameter Extraction
//=============================================================================
// Purpose : Normally, RPG Maker Plugins look for their settings using the exact
// file name like - "MyPlugin". Use it to look for them using their description
// instead.
//=============================================================================
// Use : put it inside your plugin for which you want to use it. And copy paste
// your plugin's desc in place of "Your plugin's description here". 
// I should work now.
//=============================================================================

// look for the plugin using '@desc' text
var pluginFootprint = $plugins.filter(function(p) {
  return p.description.contains("Your plugin's description here") && p.status;
})[0];

// if found : work normally, in this case retrieve the parameters
// else: turn it into an empty object to avoid errors
var parameters = pluginFootprint ? pluginFootprint.parameters : {};
