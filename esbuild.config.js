require("esbuild")
  .build({
    entryPoints: ["lib/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "dist/app.js",
  })
  .catch(() => process.exit(1));
