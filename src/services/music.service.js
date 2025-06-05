import { paginate } from "../utils/pagination.util.js";

export async function findAllMusic() {
  await paginate("SELECT * FROM songs", ["song_id", "title", "artist", "genre"]);
}
