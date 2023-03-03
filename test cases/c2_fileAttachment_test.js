const scenariosFile = require("../src/Scenarios");
var scenarios = new scenariosFile.Scenarios();

Feature('file attachment');

Scenario('wrong file attachment',  async ({ I }) => {

    await scenarios.fileAttachFalse();
    I.wait(3)
});

Scenario('file attachment',  async ({ I }) => {

    await scenarios.fileAttach();
    I.wait(3)
});