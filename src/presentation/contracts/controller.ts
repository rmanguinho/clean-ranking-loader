import { HttpResponse } from '@/presentation/contracts'

export interface Controller {
  handle: () => Promise<HttpResponse>
}
