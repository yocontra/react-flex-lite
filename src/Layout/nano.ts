import { create } from 'nano-css'
import { addon as addonRule } from 'nano-css/addon/rule'
import { addon as addonSheet } from 'nano-css/addon/sheet'
import { addon as addonStable } from 'nano-css/addon/stable'

const nano = create()
addonStable(nano)
addonRule(nano)
addonSheet(nano)
const { sheet } = nano
export { nano, sheet }
