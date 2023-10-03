import { validateUpdateParams } from "../validation"
import { getDimensions, getPosition } from "../dimensions"

const runValidation = true

export function interpolator<Dimensions extends number | number[]>() {
  let game: Dimensions | undefined = undefined
  let futureGame: Dimensions | undefined = undefined

  let size: number | null = null

  return {
    update(params: { game: Dimensions; futureGame: Dimensions }) {
      if (runValidation) {
        validateUpdateParams(params, size)
      }

      size = getDimensions(params.game)

      game = params.game
      futureGame = params.futureGame
    },

    getPosition(): Dimensions {
      return getPosition(game, futureGame, size)
    },
  }
}
