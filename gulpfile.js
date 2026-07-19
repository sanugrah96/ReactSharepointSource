'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.addSuppression(/Warning - \[tslint\]/);
build.addSuppression(/Warning - \[sass\]/);
build.addSuppression(/Warning - \[configure-webpack\]/);

// Disable tslint to allow ship builds
build.tslintCmd.enabled = false;

// Only bundle moment's English locale — no code calls moment.locale(), so the
// other ~160 locale files (~300 KB min per consuming bundle) are dead weight.
const webpack = require('webpack');
build.configureWebpack.mergeConfig({
  additionalConfiguration: (cfg) => {
    cfg.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/en$/));
    return cfg;
  }
});

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

/* fast-serve */
const { addFastServe } = require("spfx-fast-serve-helpers");
addFastServe(build);
/* end of fast-serve */

build.initialize(require('gulp'));

