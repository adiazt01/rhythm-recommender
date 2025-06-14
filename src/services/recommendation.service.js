import { paginate } from "../utils/pagination.util.js";
import executeQuery from "../../db/db.config.js";
import { findAllUsersWithPrompt } from "./user.service.js";
import { createSpinner } from "nanospinner";

export async function findAllRecommendationsByUserId(userId) {
    const spinner = createSpinner("Buscando recomendaciones...").start();
    
    const usersFound = await executeQuery(
        `SELECT city FROM users WHERE user_id = ${userId}`,
    );

    if (!usersFound.rows.length) {
        spinner.error({ text: "Usuario no encontrado" });
        return;
    }

    const ciudad = usersFound.rows[0].city;

    await paginate(
        `SELECT title, artist, genre, total_listens FROM recommendations_by_city WHERE city = '${ciudad}' LIMIT 100`,
        ["Título", "Artista", "Género", "Escuchas"],
        5
    );

    spinner.success({ text: "Recomendaciones generadas" });
}

export async function findAllUsersWithRecommendations() {
    await findAllUsersWithPrompt(async (user) => {
        await findAllRecommendationsByUserId(user.user_id);
    });
}