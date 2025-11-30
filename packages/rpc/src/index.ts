import { hc } from 'hono/client'
import type { AppType } from '../../../apps/server/src/index'

export const createClient = (baseUrl: string) => {
  return hc<AppType>(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// Export types for inference
export type { InferRequestType, InferResponseType } from 'hono/client'
