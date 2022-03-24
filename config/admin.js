module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f78ad695a26b2192889cb17e784e879b'),
  },
});
