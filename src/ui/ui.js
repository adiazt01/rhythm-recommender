import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";

export async function bienvenida() {
  console.clear();
  const msg = figlet.textSync("Rhythm Recommender", {
    horizontalLayout: "full",
  });
  console.log(gradient.instagram.multiline(msg));
  console.log(chalk.greenBright.bold('🎵 ¡Bienvenido a tu experiencia musical tipo Spotify! 🎵\n'));
  const anim = chalkAnimation.neon(
    "Explora, descubre y disfruta tus canciones favoritas.\n",
  );
  await new Promise((r) => setTimeout(r, 1700));
  anim.stop();
}

export function printTable(table) {
  console.log(table.toString());
}

export function printSuccess(msg) {
  console.log(chalk.greenBright(`✔ ${msg}`));
}

export function printError(msg) {
  console.log(chalk.redBright(`✖ ${msg}`));
}

export function printInfo(msg) {
  console.log(chalk.cyanBright(msg));
}

export function printEnd(msg) {
  console.log(chalk.gray(msg));
}
