#!/usr/bin/env node

const { program } = require("commander");
const { createFeature } = require("../src/commands/create");

program
  .command("create <layer> <name>")
  .description("Создаёт новую фичу в FSD-структуре")
  .action((layer, name) => {
    createFeature(layer, name);
  });

program.parse(process.argv);
