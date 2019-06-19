if (process.env.NODE_ENV == "production") {
  prodDevSecret = process.env.PROD_SECRET;
} else {
  prodDevSecret = "K0nJ0b3aUT1fUlP4sS10n";
}

module.exports = {
  jwtSecret: prodDevSecret,
  jwtSession: {
    session: false
  }
};
