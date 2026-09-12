"use strict";

const { User, Article } = require("../models");
const { bcryptHash } = require("../helper/bcrypt");

// Configurable via env vars so this seeder can stamp out other demo users too,
// e.g. SEED_USERNAME=janedoe SEED_ARTICLES=3 npm run sqlz -- db:seed --seed create-demo-users.js
const USERNAME = process.env.SEED_USERNAME || "johndoe";
const EMAIL = process.env.SEED_EMAIL || `${USERNAME}@mail.com`;
const PASSWORD = process.env.SEED_PASSWORD || `${USERNAME}123`;
const BIO = process.env.SEED_BIO || "I work at statefarm";
const ARTICLE_COUNT = Number(process.env.SEED_ARTICLES) || 1;

module.exports = {
  async up() {
    // findOrCreate makes this safe to re-run against a DB that already has
    // the user (no need to drop/recreate the DB every time).
    const [user] = await User.findOrCreate({
      where: { username: USERNAME },
      defaults: {
        email: EMAIL,
        password: await bcryptHash(PASSWORD),
        bio: BIO,
      },
    });

    const existingArticles = await Article.count({ where: { userId: user.id } });
    const toCreate = Math.max(ARTICLE_COUNT - existingArticles, 0);

    for (let i = 0; i < toCreate; i++) {
      const n = existingArticles + i + 1;
      await Article.create({
        slug: `how-to-train-your-dragon-${USERNAME}-${n}`,
        title: `How to train your dragon (${n})`,
        description: "Ever wonder how?",
        body: "It takes a Jacobian",
        userId: user.id,
      });
    }
  },

  async down() {
    await User.destroy({ where: { username: USERNAME } });
  },
};
