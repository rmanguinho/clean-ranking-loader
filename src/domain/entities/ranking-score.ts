export type RankingScore = {
  player: Player
  score: number
  matchDate: Date
  heroes: Hero[]
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
