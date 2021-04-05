import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import clipboardCopy from '@iconify-icons/heroicons-solid/clipboard-copy';
import activateBreakpoints from '@iconify-icons/codicon/activate-breakpoints';
import debugIcon from '@iconify-icons/codicon/debug';

export const Copy = () => <Icon icon={clipboardCopy} flip="horizontal" />;

const debugColor = '#a00';

export const breakpoint = () => (
  <InlineIcon icon={activateBreakpoints} color={debugColor} />
);

export const debug = () => <InlineIcon icon={debugIcon} color={debugColor} />;
