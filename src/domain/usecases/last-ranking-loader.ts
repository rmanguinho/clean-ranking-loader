import { RankingScore } from '@/domain/entities'

export interface LastRankingLoader {
  load: () => Promise<RankingScore[]>
}
