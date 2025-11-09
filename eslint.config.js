import tseslint from 'typescript-eslint' // TypeScript 전용 규칙 세트
import { normalConfigArray } from './eslint.config.generate.js'

export default tseslint.config(...normalConfigArray)
