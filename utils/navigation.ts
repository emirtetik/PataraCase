import { NextRouter } from 'next/router'

export const goToHome = (router: NextRouter) => {
  router.push('/home')
}

export const goToSignIn = (router: NextRouter) => {
  router.push('/auth/signin')
}