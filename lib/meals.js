import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() { // async used to simulate delay only
    await new Promise((resolve) => setTimeout(resolve, 2000)); // to simulate delay only remove this
    return db.prepare('SELECT * FROM meals').all();
}