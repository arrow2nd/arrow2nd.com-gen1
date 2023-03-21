module.exports = {
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "always",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^animations/(.*)$",
    "^components/(.*)$",
    "^data/(.*)$",
    "^hooks/(.*)$",
    "^libs/(.*)$",
    "^public/(.*)$",
    "^styles/(.*)$",
    "^types/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
