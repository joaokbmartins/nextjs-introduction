const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase, { defaultConfig }) => {
  const { STAGING } = process.env;
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isPrd = phase === PHASE_PRODUCTION_BUILD && STAGING !== "1";
  const isStg = phase === PHASE_PRODUCTION_BUILD && STAGING === "1";

  const env = {
    HOST: (() => {
      if (isDev) return "http://localhost:3000";
      if (isPrd) return "https://nextjsintroduction.vercel.app";
    })(),
  };

  return {
    reactStrictMode: true,
    env,
  };
};
