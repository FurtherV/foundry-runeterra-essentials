export const CombatTargetChecker = {
    setup: function () {
        Hooks.on("dnd5e.preRollAttack", _preRollAttack);
    },
};

/**
 * @param {Item5e} item
 * @param {object} config
 */
function _preRollAttack(item, config) {
    const bypassTargetCheck = config.bypassTargetCheck ?? false;
    if (bypassTargetCheck) return true;

    const actor = item.actor;
    if (!actor.inCombat) return true;
    if (!!Array.from(game.user.targets).length) return true;

    Dialog.confirm({
        title: game.i18n.localize(
            "RUNETERRA-ESSENTIALS.CombatTargetChecker.Title"
        ),
        content: `${game.i18n.localize(
            "RUNETERRA-ESSENTIALS.CombatTargetChecker.Prompt"
        )}`,
        yes: () => {
            item.rollAttack({ bypassTargetCheck: true });
        },
        no: () => {},
        render: () => {},
        defaultYes: true,
        rejectClose: false,
        options: {
            classes: ["dnd5e", "dialog"],
        },
    });
    return false;
}
