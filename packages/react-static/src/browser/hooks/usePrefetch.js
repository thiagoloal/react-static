import { useEffect } from 'react'
import { getRoutePath } from '../utils'
import { prefetch } from '../'
import onVisible from '../utils/Visibility'

export const usePrefetch = (ref, path) => {
  useEffect(
    () => {
      if (!ref.current) {
        return
      }
      onVisible(ref.current, () => prefetch(getRoutePath(path)))
    },
    [ref.current, path]
  )
}