const shortEatsFlag = import.meta.env.VITE_FEATURE_SHORT_EATS

const shortEatsEnabled = shortEatsFlag
  ? shortEatsFlag.toLowerCase() !== 'false'
  : true

export const features = Object.freeze({
  shortEatsEnabled
})
