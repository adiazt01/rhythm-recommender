import { paginate } from "../utils/pagination.util.js";
import { createSpinner } from "nanospinner";

export async function findAllListensByGenreAndMonth() {
    const spinner = createSpinner(
        "Consultando escuchas por género y mes...",
    ).start();
    
    spinner.success({ text: "Consulta iniciada" });

    await paginate(
        'SELECT genre, month, total_listens FROM listens_by_genre_month ALLOW FILTERING;',
        ["Género", "Mes", "Escuchas"],
        5
    );

    spinner.success({ text: "Consulta completada" });
}

export async function findAllListensByCityAndMonth() {
    const spinner = createSpinner(
        "Consultando escuchas por ciudad y mes...",
    ).start();
    spinner.success({ text: "Consulta iniciada" });
    await paginate(
        'SELECT city, month, total_listens FROM listens_by_city_month ALLOW FILTERING;',
        ["Ciudad", "Mes", "Escuchas"],
        5
    );
}