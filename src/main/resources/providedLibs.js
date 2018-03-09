/*global
   Java
*/

// Java libs
var ArrayList = Java.type("java.util.ArrayList");
var HashMap = Java.type("java.util.HashMap");
var Thread = Java.type("java.lang.Thread");
var Keyboard = Java.type("org.lwjgl.input.Keyboard");

// Triggers
var TriggerRegister = Java.type("com.chattriggers.ctjs.triggers.TriggerRegister");
var TriggerResult = Java.type("com.chattriggers.ctjs.triggers.OnTrigger.TriggerResult");
var Priority = Java.type("com.chattriggers.ctjs.triggers.OnTrigger.Priority");

// Libraries
var ChatLib = Java.type("com.chattriggers.ctjs.minecraft.libs.ChatLib");
var Renderer = Java.type("com.chattriggers.ctjs.minecraft.libs.renderer.Renderer");
var FileLib = Java.type("com.chattriggers.ctjs.minecraft.libs.FileLib");
var MathLib = Java.type("com.chattriggers.ctjs.minecraft.libs.MathLib");
var XMLHttpRequest = Java.type("com.chattriggers.ctjs.minecraft.libs.XMLHttpRequest");

// Objects
var Display = Java.type("com.chattriggers.ctjs.minecraft.objects.display.Display");
var DisplayLine = Java.type("com.chattriggers.ctjs.minecraft.objects.display.DisplayLine");
var DisplayHandler = Java.type("com.chattriggers.ctjs.minecraft.objects.display.DisplayHandler");
var Gui = Java.type("com.chattriggers.ctjs.minecraft.objects.gui.Gui");
var Message = Java.type("com.chattriggers.ctjs.minecraft.objects.Message");
var Book = Java.type("com.chattriggers.ctjs.minecraft.objects.Book");
var KeyBind = Java.type("com.chattriggers.ctjs.minecraft.objects.KeyBind");

// Wrappers
var Client = Java.type("com.chattriggers.ctjs.minecraft.wrappers.Client");
var Player = Java.type("com.chattriggers.ctjs.minecraft.wrappers.Player");
var World = Java.type("com.chattriggers.ctjs.minecraft.wrappers.World");
var Server = Java.type("com.chattriggers.ctjs.minecraft.wrappers.Server");
var Inventory = Java.type("com.chattriggers.ctjs.minecraft.wrappers.objects.Inventory");
var TabList = Java.type("com.chattriggers.ctjs.minecraft.wrappers.TabList");
var Scoreboard = Java.type("com.chattriggers.ctjs.minecraft.wrappers.Scoreboard");
var CPS = Java.type("com.chattriggers.ctjs.CTJS").getInstance().getCps();
var Item = Java.type("com.chattriggers.ctjs.minecraft.wrappers.objects.Item");
var Block = Java.type("com.chattriggers.ctjs.minecraft.wrappers.objects.Block");
var Entity = Java.type("com.chattriggers.ctjs.minecraft.wrappers.objects.Entity");

// Misc
var Console = Java.type("com.chattriggers.ctjs.utils.console.Console");

// Deprecated
var WorldLib = Java.type("com.chattriggers.ctjs.minecraft.libs.WorldLib");

/*End Built in Vars */



// simplified methods
function print(toPrint) {
    Console.getConsole().out.println(toPrint);
}

function cancel(event) {
    event.setCanceled(true);
}

function register(triggerType, methodName) {
    return TriggerRegister.register(triggerType, methodName);
}

// animation
function easeOut(start, finish, speed, jump) {
    if (!jump) {
        jump = 1;
    }

    if (Math.floor(Math.abs(finish - start) / jump) > 0) {
        return start + (finish - start) / speed;
    } else {
        return finish;
    }
}