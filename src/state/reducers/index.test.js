import { combineReducers } from 'redux';
import theme from './theme';
import sections from './sections';
import cookieDisclaimer from './cookieDisclaimer';
import navigation from './navigation';
import serverOnly from './serverOnly';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./sections');
jest.mock('./theme');
jest.mock('./cookieDisclaimer');
jest.mock('./navigation');
jest.mock('./serverOnly');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    theme.mockReturnValueOnce(Symbol('test-theme-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
  });

  it('should return the result of combineReducers', () => {
    expect(require('./').default).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    require('./');
    expect(combineReducers).toHaveBeenCalledWith({
      sections, theme, cookieDisclaimer, navigation, serverOnly
    });
  });
});
