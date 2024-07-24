'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Test } from '@nihilapp/react-editor';

interface Props {
  className?: ClassNameValue;
}

export function HomeContent({ className, }: Props) {
  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div className={css.default}>content</div>

      <Test />
    </>
  );
}
