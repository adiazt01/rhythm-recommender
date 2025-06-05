import { paginate } from "../utils/pagination.util.js";
import executeQuery from "../../db/db.config.js";
import { printError } from "../ui/ui.js";
import { paginatedPrompt } from "../utils/pagination-prompt.util.js";

export async function findAllUsers() {
  await paginate("SELECT * FROM users", ["user_id", "name", "city"]);
}

export async function findAllUsersWithPrompt(onSelectUser) {
  const usuariosRes = await executeQuery("SELECT user_id, name, city FROM users");
  if (!usuariosRes.rows.length) {
    printError("No hay usuarios disponibles.");
    return;
  }
  const selectedUser = await paginatedPrompt(
    usuariosRes.rows,
    u => `${u.name} (${u.city}) [ID: ${u.user_id}]`,
    "Selecciona un usuario para ver recomendaciones:"
  );
  
  if (selectedUser && onSelectUser) {
    await onSelectUser(selectedUser);
  }
}
