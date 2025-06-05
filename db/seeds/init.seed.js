import executeQuery from "../db.config.js";

async function seed() {
    // --- Users Data (Doubled) ---
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (101, 'Ana Perez', 'Caracas')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (102, 'Carlos Gomez', 'Bogota')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (103, 'Laura Torres', 'Mexico DF')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (104, 'Javier Ruiz', 'Caracas')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (105, 'Sofia Martinez', 'Bogota')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (106, 'Pedro Garcia', 'Lima')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (107, 'Maria Fernandez', 'Santiago')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (108, 'Luis Castro', 'Caracas')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (109, 'Elena Diaz', 'Bogota')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (110, 'Ricardo Morales', 'Mexico DF')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (111, 'Gabriela Soto', 'Lima')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (112, 'Andres Flores', 'Santiago')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (113, 'Valeria Rojas', 'Caracas')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (114, 'Daniel Vargas', 'Bogota')",
    );
    await executeQuery(
        "INSERT INTO users (user_id, name, city) VALUES (115, 'Camila Soto', 'Mexico DF')",
    );

    // --- Songs Data (Doubled) ---
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (1, 'Bohemian Rhapsody', 'Queen', 'Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (2, 'Like a Prayer', 'Madonna', 'Pop')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (3, 'Smells Like Teen Spirit', 'Nirvana', 'Grunge')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (4, 'Hey Jude', 'The Beatles', 'Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (5, 'Billie Jean', 'Michael Jackson', 'Pop')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (6, 'Hotel California', 'Eagles', 'Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (7, 'Wonderwall', 'Oasis', 'Britpop')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (8, 'Rolling in the Deep', 'Adele', 'Soul')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (9, 'Stairway to Heaven', 'Led Zeppelin', 'Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (10, 'Shape of You', 'Ed Sheeran', 'Pop')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (11, 'Don''t Stop Believin''', 'Journey', 'Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (12, 'Blinding Lights', 'The Weeknd', 'Pop')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (13, 'Zombie', 'The Cranberries', 'Alternative')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (14, 'Sweet Child o'' Mine', 'Guns N'' Roses', 'Hard Rock')",
    );
    await executeQuery(
        "INSERT INTO songs (song_id, title, artist, genre) VALUES (15, 'Uptown Funk', 'Mark Ronson ft. Bruno Mars', 'Funk')",
    );

    // --- Listens Data (Doubled) ---
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (101, 1, '2024-01-05')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (102, 2, '2024-01-05')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (101, 3, '2024-01-10')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (103, 1, '2024-01-12')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (104, 4, '2024-01-15')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (105, 5, '2024-01-20')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (102, 1, '2024-01-25')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (103, 4, '2024-02-01')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (106, 6, '2024-02-03')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (107, 7, '2024-02-05')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (108, 8, '2024-02-10')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (109, 9, '2024-02-12')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (110, 10, '2024-02-15')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (101, 2, '2024-02-18')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (105, 3, '2024-02-20')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (107, 1, '2024-02-22')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (111, 11, '2024-03-01')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (112, 12, '2024-03-03')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (113, 13, '2024-03-05')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (114, 14, '2024-03-08')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (115, 15, '2024-03-10')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (104, 1, '2024-03-12')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (108, 2, '2024-03-15')",
    );
    await executeQuery(
        "INSERT INTO listens (user_id, song_id, listen_date) VALUES (110, 3, '2024-03-18')",
    );

    // OLAP: listens_by_genre_month (More Granular and Doubled)
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Rock', '2024-01', 3)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Pop', '2024-01', 2)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Grunge', '2024-01', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Rock', '2024-02', 2)" // Increased from 1
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Pop', '2024-02', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Britpop', '2024-02', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Soul', '2024-02', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Rock', '2024-03', 2)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Pop', '2024-03', 2)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Alternative', '2024-03', 1)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Hard Rock', '2024-03', 1)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_genre_month (genre, month, total_listens) VALUES ('Funk', '2024-03', 1)" // New month
    );

    // OLAP: listens_by_city_month (More Granular and Doubled)
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Caracas', '2024-01', 2)"
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Bogota', '2024-01', 3)"
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Mexico DF', '2024-01', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Caracas', '2024-02', 1)" // Increased from 0
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Mexico DF', '2024-02', 1)"
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Lima', '2024-02', 1)" // New city
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Santiago', '2024-02', 1)" // New city
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Bogota', '2024-02', 2)" // New
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Caracas', '2024-03', 2)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Bogota', '2024-03', 2)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Mexico DF', '2024-03', 1)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Lima', '2024-03', 1)" // New month
    );
    await executeQuery(
        "INSERT INTO listens_by_city_month (city, month, total_listens) VALUES ('Santiago', '2024-03', 1)" // New month
    );

    // OLAP: recommendations_by_city (More Varied and Doubled)
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Caracas', 1, 'Bohemian Rhapsody', 'Queen', 'Rock', 2)" // Increased listens
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Caracas', 4, 'Hey Jude', 'The Beatles', 'Rock', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Caracas', 13, 'Zombie', 'The Cranberries', 'Alternative', 1)" // New song
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Bogota', 2, 'Like a Prayer', 'Madonna', 'Pop', 2)" // Increased listens
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Bogota', 5, 'Billie Jean', 'Michael Jackson', 'Pop', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Bogota', 1, 'Bohemian Rhapsody', 'Queen', 'Rock', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Bogota', 14, 'Sweet Child o'' Mine', 'Guns N'' Roses', 'Hard Rock', 1)" // New song
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Mexico DF', 1, 'Bohemian Rhapsody', 'Queen', 'Rock', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Mexico DF', 10, 'Shape of You', 'Ed Sheeran', 'Pop', 1)" // New song
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Lima', 6, 'Hotel California', 'Eagles', 'Rock', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Lima', 11, 'Don''t Stop Believin''', 'Journey', 'Rock', 1)" // New song
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Santiago', 7, 'Wonderwall', 'Oasis', 'Britpop', 1)"
    );
    await executeQuery(
        "INSERT INTO recommendations_by_city (city, song_id, title, artist, genre, total_listens) VALUES ('Santiago', 12, 'Blinding Lights', 'The Weeknd', 'Pop', 1)" // New song
    );

    console.log("Seed completado.");
}

seed()
    .catch(console.error)
    .finally(() => {
        process.exit(0);
    });