const breakpoints = {
  sm: `576px`,
  md: `768px`,
  lg: `992px`,
  xl: `1200px`,
}

let mediaQueries = {}
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export default mediaQueries
