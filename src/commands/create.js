const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const LAYERS = {
  entity: "entities",
  feature: "features",
  page: "pages",
  shared: "shared",
  widget: "widgets"
};

const createFeature = async (layer, name) => {
  const layerDir = LAYERS[layer];

  if (!layerDir) {
    console.error(chalk.red(`Неизвестный слой: ${layer}`));
    return;
  }

  const basePath = path.resolve(process.cwd(), "src", layerDir, name);
  const modelPath = path.join(basePath, "model");
  const uiPath = path.join(basePath, "ui");

  try {
    await fs.ensureDir(basePath);
    await fs.writeFile(path.join(basePath, "index.ts"), "");

    await fs.ensureDir(modelPath);
    await fs.writeFile(path.join(modelPath, "types.ts"), "");

    await fs.ensureDir(uiPath);
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    await fs.writeFile(path.join(uiPath, `${componentName}.tsx`), `export const ${componentName} = () => <div>${componentName}</div>;`);

    await fs.writeFile(path.join(uiPath, `${name}.scss`), "");

    console.log(chalk.green(`✅ ${layer} "${name}" создана в src/${layerDir}/`));
  } catch (e) {
    console.error(chalk.red("Ошибка при создании:"), e);
  }
};

module.exports = { createFeature };
