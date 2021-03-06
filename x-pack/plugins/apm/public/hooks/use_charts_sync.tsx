/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { useContext } from 'react';
import {
  ChartsSyncContext,
  LegacyChartsSyncContext,
} from '../context/charts_sync_context';

export function useChartsSync() {
  const context = useContext(ChartsSyncContext);

  if (!context) {
    throw new Error('Missing ChartsSync context provider');
  }

  return context;
}

export function useLegacyChartsSync() {
  const context = useContext(LegacyChartsSyncContext);

  if (!context) {
    throw new Error('Missing ChartsSync context provider');
  }

  return context;
}
