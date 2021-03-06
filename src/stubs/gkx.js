/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule gkx
 * @format
 * @flow
 */

'use strict';

module.exports = function(name: string) {
  if (typeof window !== 'undefined' && window.__DRAFT_GKX) {
    return window.__DRAFT_GKX[name];
  }
  return false;
};
