# Rhythm Recommender 🎵

<p align="center">
  <img src=".github/banner-rhythm-recommender.jpg" alt="Rhythm Recommender Banner" width="700"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache-cassandra&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/CLI-22223B?style=for-the-badge&logo=gnubash&logoColor=white"/>
</p>

Sistema de recomendación musical tipo CLI, inspirado en Spotify, con análisis OLAP y base de datos Cassandra.

---

## 🚀 Instalación y Setup

### 1. Clona el repositorio
```bash
git clone https://github.com/adiazt01/rhythm-recommender.git
cd rhythm-recommender
```

### 2. Instala dependencias
```bash
yarn install
```

### 3. Configura el entorno
Copia el archivo `.env.example` a `.env` y ajusta los valores si es necesario:
```bash
cp .env.example .env
```

Variables principales:
- `CASSANDRA_HOST` (por defecto: localhost)
- `CASSANDRA_PORT` (por defecto: 9042)
- `CASSANDRA_DATACENTER` (por defecto: datacenter1)
- `CASSANDRA_KEYSPACE` (por defecto: rhythm_recommender)

### 4. Levanta Cassandra con Docker
```bash
docker-compose up -d
```
Esto creará un contenedor con Cassandra y los volúmenes necesarios.

### 5. Ejecuta migraciones y seed de datos
```bash
yarn migrate:db
yarn seed:db
```
Esto creará las tablas y poblará la base de datos con datos de ejemplo.

---

## 🟢 Uso de la aplicación

### Ejecuta la CLI
```bash
yarn app
```

Verás un menú interactivo tipo Spotify donde podrás:
- Explorar usuarios
- Explorar canciones
- Obtener recomendaciones personalizadas
- Consultar estadísticas OLAP (por género/mes, ciudad/mes)

Navega con las flechas y sigue las instrucciones en pantalla.

---

## 🛠️ Estructura del proyecto

```
project-root/
├── src/
│   ├── controllers/         # Controladores de flujo y menús
│   ├── services/            # Lógica de negocio y acceso a datos
│   ├── ui/                  # Utilidades visuales y helpers de CLI
│   └── utils/               # Utilidades de paginación, tablas, prompts
├── db/                      # Configuración, migraciones y seeds de Cassandra
├── .env                     # Variables de entorno
├── docker-compose.yml       # Servicio Cassandra listo para usar
└── README.md
```

---

## 🧩 Notas útiles
- Si cambias el modelo de datos, vuelve a correr las migraciones y el seed.
- Si tienes problemas de conexión, revisa que Cassandra esté corriendo y los datos de `.env` sean correctos.
