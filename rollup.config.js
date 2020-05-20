import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";

import { config } from "dotenv";

const parsedEnv = {};
const envObject = config().parsed;
Object.keys(envObject).map(
  (item) => (parsedEnv[`process.env.${item}`] = JSON.stringify(envObject[item]))
);

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "app/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    copy({
      targets: [{ src: "app/index.html", dest: "public" }],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      ),
      ...parsedEnv,
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
    production && terser(), // minify, but only in production
    postcss({
      loaders: [
        {
          name: "css",
          test: /\.(css)$/,
        },
      ],
      extract: true,
      extensions: [".css"],
      minimize: true,
    }),
    livereload()
  ],
};
