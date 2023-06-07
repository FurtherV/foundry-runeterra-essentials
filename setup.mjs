// This file is automatically executed by FoundryVTT
import { CombatTargetChecker } from "./scripts/combatTargetChecker.mjs";
import { MODULE_NAME } from "./scripts/constants.mjs";
Hooks.once("init", () => {
    console.log(`FurtherV | Initializing ${MODULE_NAME}`);
});

Hooks.once("setup", () => {
    CombatTargetChecker.setup();
});
