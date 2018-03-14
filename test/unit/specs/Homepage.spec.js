import { shallow } from '@vue/test-utils';

import Homepage from '@/containers/Homepage';

const localVue = shallow(Homepage, {
  mocks: {
    $route: {
      path: '/',
    },
  },
});

describe('App.vue', () => {
  it('should render correct contents', () => {
    expect(localVue.vm.$el.querySelector('h1').textContent)
      .toEqual('Homepage');
  });
});
