import inquirer from "inquirer";
import { bienvenida } from "../ui/ui.js";

import chalk from "chalk";
import { findAllListensByCityAndMonth, findAllListensByGenreAndMonth } from "../services/listen.service.js";
import { findAllUsers } from "../services/user.service.js";
import { findAllMusic } from "../services/music.service.js";
import { findAllRecommendationsByUserId, findAllUsersWithRecommendations } from "../services/recommendation.service.js";

export async function pausa() {
  await inquirer.prompt([
    {
      type: "input",
      name: "pausa",
      message: chalk.gray("Presiona Enter para continuar..."),
    },
  ]);
}

export async function menuOLAP() {
  const { consulta } = await inquirer.prompt([
    {
      type: "list",
      name: "consulta",
      message: "¿Qué consulta OLAP deseas ejecutar?",
      choices: [
        "Escuchas por género y mes",
        "Escuchas por ciudad y mes",
        "Volver",
      ],
    },
  ]);

  if (consulta === "Escuchas por género y mes") {
    await findAllListensByGenreAndMonth();

  } else if (consulta === "Escuchas por ciudad y mes") {
    await findAllListensByCityAndMonth();
  }
}

export async function main() {
  await bienvenida();

  const { opcion } = await inquirer.prompt([
    {
      type: "list",
      name: "opcion",
      message: chalk.hex('#1DB954').bold("¿Qué quieres hacer hoy en tu mundo musical?"),
      choices: [
        { name: chalk.bold('👤 ') + chalk.whiteBright('Explorar usuarios'), value: 'Ver usuarios' },
        { name: chalk.bold('🎶 ') + chalk.hex('#1DB954')('Descubrir canciones'), value: 'Ver canciones' },
        { name: chalk.bold('💡 ') + chalk.yellow('Recomendacion por zona'), value: 'Recomendacion por zona' },
        { name: chalk.bold('📊 ') + chalk.cyan('Estadísticas OLAP'), value: 'Consultas OLAP' },
        { name: chalk.bold('🚪 ') + chalk.gray('Salir de Rhythm Recommender'), value: 'Salir' },
      ],
      loop: false,
    },
  ]);

  switch (opcion) {
    case "Ver usuarios":
      await findAllUsers();
      break;
    case "Ver canciones":
      await findAllMusic();
      break;
    case "Recomendacion por zona": {
      await findAllUsersWithRecommendations();
      break;
    }
    case "Consultas OLAP":
      await menuOLAP();
      break;
    case "Salir":
      console.log(chalk.green("\n¡Hasta luego!\n"));
      process.exit(0);
  }
  
  await pausa();
  await main();
}
