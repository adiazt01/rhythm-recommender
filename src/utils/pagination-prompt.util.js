import inquirer from "inquirer";

export async function paginatedPrompt(items, getLabel, promptMsg = "Selecciona un elemento:", pageSize = 10) {
  let offset = 0;
  let salir = false;
  let selected = null;
  while (!salir) {
    const page = items.slice(offset, offset + pageSize);
    const choices = page.map((item) => ({
      name: getLabel(item),
      value: item
    }));
    if (offset > 0) choices.unshift({ name: '⬅ Página anterior', value: '__prev' });
    if (offset + pageSize < items.length) choices.push({ name: '➡ Siguiente página', value: '__next' });
    choices.push({ name: '❌ Cancelar', value: '__cancel' });
    const { value } = await inquirer.prompt([
      {
        type: "list",
        name: "value",
        message: promptMsg,
        choices,
        pageSize: choices.length
      }
    ]);
    if (value === '__next') {
      offset += pageSize;
    } else if (value === '__prev') {
      offset -= pageSize;
      if (offset < 0) offset = 0;
    } else if (value === '__cancel') {
      salir = true;
    } else {
      selected = value;
      salir = true;
    }
  }
  return selected;
}
