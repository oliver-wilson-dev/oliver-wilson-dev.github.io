import getInitialState from './getInitialState';
import { LIGHT_THEME } from '../../actions/constants';
import THEME_COOKIE from './constants';
import { getCookie } from '../../../utils/cookieUtilities';

jest.mock('../../../utils/cookieUtilities');


describe('getInitialState', () => {
  it('should call getCookie with the theme cookie constant', () => {
    getInitialState();
    expect(getCookie).toHaveBeenCalledWith({ name: THEME_COOKIE });
  });
  describe('when there is a cookie value already saved', () => {
    it('should return a representation of state with the given theme cookie and the boolean value of that cookie', () => {
      const mockThemeCookie = 'test-theme-cookie';
      getCookie.mockReturnValueOnce(mockThemeCookie);

      expect(getInitialState()).toEqual({ theme: mockThemeCookie, checkBoxChecked: true });
    });
  });

  describe('when there is not a cookie value already saved', () => {
    it('should return a representation of state with the theme set to light and indicating the checkbox is unchecked/false', () => {
      getCookie.mockReturnValueOnce(undefined);

      expect(getInitialState()).toEqual({ theme: LIGHT_THEME, checkBoxChecked: false });
    });
  });
});
