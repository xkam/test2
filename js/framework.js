/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/js';
import {Component, cloneElement, createElement, isValidElement, render} from 'preact';
import htm from 'htm';

export const {h, build, mount} = adapter({Component, cloneElement, createElement, isValidElement, render});
export const tpl = htm.bind(h);
