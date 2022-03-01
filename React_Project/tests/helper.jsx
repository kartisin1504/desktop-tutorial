/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';

const BaseWrapper = ({children, store}) => (
  <Provider store={store || global.helperStore}>
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  </Provider>
);

BaseWrapper.propTypes = {
  children: PropTypes.any,
  store: PropTypes.any,
};

const BaseWrapperExcludingRouter = ({children, store}) => (
  <Provider store={store || global.helperStore}>{children}</Provider>
);

BaseWrapperExcludingRouter.propTypes = {
  children: PropTypes.any,
  store: PropTypes.any,
};

export const mountWithBaseWrapperExcludingRouter = (node, store) =>
  mount(node, {
    wrappingComponent: BaseWrapperExcludingRouter,
    wrappingComponentProps: {
      store,
    },
  });

export const mountWithBaseWrapper = (node, store) =>
  mount(node, {
    wrappingComponent: BaseWrapper,
    wrappingComponentProps: {
      store,
    },
  });

export const shallowWithBaseWrapper = (node, store) =>
  shallow(node, {
    wrappingComponent: BaseWrapper,
    wrappingComponentProps: {
      store,
    },
  });

export const testRender = (ui, options) =>
  render(ui, {wrapper: BaseWrapper, ...options});
