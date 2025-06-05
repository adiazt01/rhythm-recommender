import { createSpinner } from "nanospinner";
import executeQuery from "../../db/db.config.js";
import { printEnd, printError, printTable } from "../ui/ui.js";
import { buildTable } from "./table.util.js";
import inquirer from "inquirer";

export async function paginate(query, head, pageSize = 5) {
  let pageState = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const spinner = createSpinner("Cargando datos...").start();
    const res = await executeQuery(query, [], { fetchSize: pageSize, pageState });

    spinner.success({ text: "Página cargada" });

    if (res.rows.length === 0) {
      printError("No hay datos para mostrar.");
      return;
    }

    const table = buildTable(head, res.rows);
    printTable(table);

    hasNextPage = !!res.pageState;

    if (hasNextPage) {
      const { next } = await inquirer.prompt([
        {
          type: "confirm",
          name: "next",
          message: "¿Ver siguiente página?",
          default: false,
        },
      ]);
      
      if (next) {
        pageState = res.pageState;
      } else {
        hasNextPage = false;
      }
    } else {
      printEnd("No hay más páginas.");
      hasNextPage = false;
    }
  }
}


export function paginateMap(array, offset, pageSize) {
  return array.slice(offset, offset + pageSize);
}