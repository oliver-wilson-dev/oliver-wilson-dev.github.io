import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

Object.defineProperty(window, 'scrollTo', { value: jest.fn(() => {}), writable: true });
