/* eslint-disable arrow-parens */
import create from 'zustand';

const socialLoginStore = create(set => ({
  socialLoginPayload: {},
  setSocialLoginPayload:
  socialLoginPayload => set(state => ({ ...state, socialLoginPayload })),
}));

const socialRegisterGoogle = create((set) => ({
  socialRegister: null,
  setSocialRegister: (socialRegister) => set((state) => ({
    ...state,
    socialRegister,
  })),
}));

export { socialLoginStore, socialRegisterGoogle };
