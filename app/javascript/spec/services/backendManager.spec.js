import * as backendManager from '../../diary/services/backendManager';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('backendManager', () => {
  const axiosMock = new MockAdapter(axios);
  const validUserBody = {
      email: 'some email',
  };

  const invalidUserBody = {
    badkey: 'nonsense value',
  };

  beforeAll(() => {
    axiosMock.onPost('/api/user', validUserBody).reply(
      201,
      validUserBody,
    );
    axiosMock.onPost('/api/user', invalidUserBody).reply(
      201,
      validUserBody,
    );
  });

  describe('post', () => {
    test('should call axios with the expected arguments', () => {
      backendManager.post(path, validUserBody);
      expect(axiosMock).toHaveReceived();
    });
  });
});
