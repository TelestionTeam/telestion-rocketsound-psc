/*
This file gets manipulated automatically using the tc-cli.

Please do not remove the // XXX_IMPORT_MARK comments or you will loose the ability to generate widgets automatically
using the tc-cli generate widget command.
 */

import { Widget } from '@wuespace/telestion-client-types';
import { widget as sampleWidget } from './sample-widget';
import { widget as nineDofWidget } from './9dof-widget';
import { widget as stateWidget } from './state-widget';
import { widget as ninedof } from './9dof';
import { widget as graphWidget } from './graph-widget';
// IMPORT_INSERT_MARK

export const projectWidgets: Widget[] = [
	// ARRAY_FIRST_ELEMENT_INSERT_MARK
	stateWidget,
	graphWidget as Widget,
	nineDofWidget,
	sampleWidget
];
