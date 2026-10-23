import { PersonagemData, HabilidadeData, ArmaData, ArmaduraData, RacaData, ProfissaoData } from "./module/data.mjs";
import { TagmarFicha } from "./module/sheet.mjs";
import { TagmarItemSheet } from "./module/item-sheet.mjs";
import { popularCompendios } from "./module/compendios.mjs";

Hooks.once("init", () => {
  CONFIG.Actor.dataModels.personagem = PersonagemData;
  CONFIG.Actor.dataModels.npc = PersonagemData;
  CONFIG.Item.dataModels.habilidade = HabilidadeData;
  CONFIG.Item.dataModels.arma = ArmaData;
  CONFIG.Item.dataModels.armadura = ArmaduraData;
  CONFIG.Item.dataModels.raca = RacaData;
  CONFIG.Item.dataModels.profissao = ProfissaoData;

  const folhas = foundry.applications.apps.DocumentSheetConfig;
  folhas.registerSheet(Actor, "tagmar1e", TagmarFicha, {
    types: ["personagem", "npc"], makeDefault: true, label: "Ficha Tagmar 1ª ed."
  });
  folhas.registerSheet(Item, "tagmar1e", TagmarItemSheet, {
    types: ["habilidade", "arma", "armadura", "raca", "profissao"], makeDefault: true, label: "Item Tagmar 1ª ed."
  });

  game.settings.register("tagmar1e", "compendiosCriados", {scope: "world", config: false, type: Boolean, default: false});
  // para criar/atualizar os compendios depois, em um macro: await game.tagmar1e.popularCompendios()
  game.tagmar1e = {popularCompendios: popularCompendios};
});

Hooks.once("ready", async () => {
  if (!game.user.isGM || game.settings.get("tagmar1e", "compendiosCriados")) return;
  const sim = await foundry.applications.api.DialogV2.confirm({
    window: {title: "Tagmar 1ª ed."},
    content: "<p>Criar os compêndios do Tagmar neste mundo (habilidades, armas, armaduras, raças e profissões)?</p>",
    rejectClose: false
  });
  if (!sim) return;
  try {
    const n = await popularCompendios();
    await game.settings.set("tagmar1e", "compendiosCriados", true);
    ui.notifications.info("Compêndios do Tagmar criados (" + n + " itens).");
  } catch (e) {
    console.error("tagmar1e | erro ao criar compêndios", e);
    ui.notifications.error("Não foi possível criar os compêndios; veja o console (F12).");
  }
});
