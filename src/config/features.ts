const shortEatsFlag = import.meta.env.VITE_FEATURE_SHORT_EATS
const cakesFlag = import.meta.env.VITE_FEATURE_CAKES

const shortEatsEnabled = shortEatsFlag
  ? shortEatsFlag.toLowerCase() !== 'false'
  : true

const cakesEnabled = cakesFlag
  ? cakesFlag.toLowerCase() !== 'false'
  : true

export const features = Object.freeze({
  shortEatsEnabled,
  cakesEnabled
})
