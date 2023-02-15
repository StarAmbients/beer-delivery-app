/* eslint-disable arrow-parens */
import create from 'zustand';

const socialLoginStore = create(set => ({
  socialLoginPayload: {},
  setSocialLoginPayload:
  socialLoginPayload => set(state => ({ ...state, socialLoginPayload })),
}));

export default socialLoginStore;
