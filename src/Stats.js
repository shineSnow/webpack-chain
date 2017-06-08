const { ChainableOrderedMap } = require('./mutable');

module.exports = (parent) => ChainableOrderedMap(parent, [
  'assets',
  'assetsSort',
  'cached',
  'cachedAssets',
  'children',
  'chunks',
  'chunkModules',
  'chunkOrigins',
  'chunksSort',
  'context',
  'colors',
  'depth',
  'entrypoints',
  'errors',
  'errorDetails',
  'exclude',
  'hash',
  'maxModules',
  'modules',
  'modulesSort',
  'moduleTrace',
  'performance',
  'providedExports',
  'publicPath',
  'reasons',
  'source',
  'timings',
  'usedExports',
  'version',
  'warnings',
  'warningsFilter'
]);
