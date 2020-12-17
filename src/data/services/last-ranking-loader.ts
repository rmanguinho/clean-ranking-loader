import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { RankingUnavailableError } from '@/domain/errors'
import { LoadLastRankingRepository } from '@/data/contracts'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async load (): Promise<RankingScore[]> {
    if (new Date().getHours() > 22) {
      throw new RankingUnavailableError()
    }
    return this.loadLastRankingRepository.loadLastRanking()
  }
}
