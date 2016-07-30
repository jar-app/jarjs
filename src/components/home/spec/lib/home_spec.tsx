import { Home } from '../../lib/home';
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';

describe("Home Component", () => {
  it("It renders on mounting", () => {
    TestUtils.renderIntoDocument(<Home/>);
    expect(false).toBe(true);
  });
});