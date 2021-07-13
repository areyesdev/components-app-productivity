const ICONS_ASSETS_PATH = '/icons',
  iconMap = {
    arrowRight: 'arrow-right',
    angleDown: 'angle-down',
  },
  iconSize = {
    sm: 15,
    md: 26,
    lg: 40,
    xl: 40,
  }

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`
export const mapSize = (size) => iconSize[size]
