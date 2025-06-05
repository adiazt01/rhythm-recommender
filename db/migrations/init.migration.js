import executeQuery from "../db.config.js";

async function migrate() {
	await executeQuery(
		`CREATE KEYSPACE IF NOT EXISTS rhythm_recommender WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}`,
	);
	await executeQuery('USE rhythm_recommender');

	await executeQuery(`CREATE TABLE IF NOT EXISTS users (
    user_id int PRIMARY KEY,
    name text,
    city text
  )`);

	await executeQuery(`CREATE TABLE IF NOT EXISTS songs (
    song_id int PRIMARY KEY,
    title text,
    artist text,
    genre text
  )`);

	// Create table of listens
	await executeQuery(`CREATE TABLE IF NOT EXISTS listens (
    user_id int,
    song_id int,
    listen_date date,
    PRIMARY KEY ((user_id), listen_date, song_id)
  ) WITH CLUSTERING ORDER BY (listen_date DESC, song_id ASC)`);

	// OLAP table: listens by genre and month
	await executeQuery(`CREATE TABLE IF NOT EXISTS listens_by_genre_month (
    genre text,
    month text,
    total_listens int,
    PRIMARY KEY (genre, month)
  )`);

	// OLAP table: listens by city and month
	await executeQuery(`CREATE TABLE IF NOT EXISTS listens_by_city_month (
    city text,
    month text,
    total_listens int,
    PRIMARY KEY (city, month)
  )`);

	// OLAP table: recommendations by city
	await executeQuery('DROP TABLE IF EXISTS recommendations_by_city');
	await executeQuery(`CREATE TABLE IF NOT EXISTS recommendations_by_city (
    city text,
    song_id int,
    title text,
    artist text,
    genre text,
    total_listens int,
    PRIMARY KEY (city, song_id)
  )`);

	console.log("Migración completada.");
}

migrate()
	.catch((err) => {
		console.error("Error durante la migración:", err);
	})
	.finally(() => {
		process.exit(0);
	});
