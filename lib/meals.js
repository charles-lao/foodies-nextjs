import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() { // async used to simulate delay only
    await new Promise((resolve) => setTimeout(resolve, 5000)); // to simulate delay only remove this
    // throw new Error('Loading meals failed'); // test error page
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}