import compose from 'compose-function';
import { withRouter } from './with-router';
import { withStore } from './with-store';
import { withQuery } from './with-query';
import { withTheme } from './with-theme';

export const withProviders = compose(withRouter, withStore, withQuery, withTheme);

