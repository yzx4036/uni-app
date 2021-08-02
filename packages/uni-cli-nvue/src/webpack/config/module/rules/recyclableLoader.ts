import { RuleSetRule } from 'webpack'
import { resolveLoader } from '../../../loader'

export function createRecyclableLoader(): RuleSetRule {
  return {
    resourceQuery: function (query) {
      return (
        query.indexOf('vue&type=template') !== -1 &&
        query.indexOf('mpType=page') === -1
      )
    },
    use: [{ loader: resolveLoader('recyclable') }],
  }
}
