import * as backendManager from '../../diary/services/backendManager';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('backendManager', () => {
  const axiosMock = new MockAdapter(axios);

  describe('post', () {
    test('should call axios with the expected arguments', () => {
      backendManager.post(path, payload);
      expect(axiosMock).toHaveReceived();
    });
  });
});
