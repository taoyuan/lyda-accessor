"use strict";

// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');
var SG = require('strong-globalize');

SG.SetRootDir(path.join(__dirname, '..'), { autonomousMsgLoading: 'all' });
module.exports = SG();
