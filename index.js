
import {Component} from 'inferno';
import {cloneVNode} from 'inferno-clone-vnode';
import {createElement} from 'inferno-create-element';
import {hydrate} from 'inferno-hydrate';
import framework from '@activewidgets/frameworks/html';
import * as pkg from '@activewidgets/grid';

const {build, tags} = framework({Component, createElement, cloneVNode, hydrate});

export const {Grid, Row, View, Scrollbars} = build(pkg);
export {createElement as h, tags};

