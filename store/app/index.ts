import { atom } from 'recoil'

export const appReadyState = atom<boolean>({
  key: 'app/appReady',
  default: false,
})
