// eslint-disable-next-line @typescript-eslint/no-var-requires
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval({
  future: {
    webpack5: true
  },
  images: {
    domains: process.env.IMAGE_DOMAINS.split(","),
  },
});
