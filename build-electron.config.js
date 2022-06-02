module.exports = {
	mainEntry: "src-main/index.js", // Entry point Electron main process
	preloadEntry: "src-preload/index.js", // Entry point Electron preload (load preload script before Electron renderer process's loading)
	outDir: "public",
	mainTarget: "electron19.0-main",
	preloadTarget: "electron19.0-preload",
};
