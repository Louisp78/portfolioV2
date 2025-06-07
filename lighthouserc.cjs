module.exports = {
  ci: {
    upload: {
      target: "filesystem",
      outputDir: "lhci_results",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
}
