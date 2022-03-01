// eslint-disable-next-line complexity
export function getTypeColor(type) {
  switch (type) {
    case 'dragon':
      return '#7038F8';
    case 'fire':
      return '#F08030';
    case 'grass':
      return '#78C850';
    case 'fighting':
      return '#C03028';
    case 'psychic':
      return '#F85888';
    case 'rock':
      return '#B8A038';
    case 'poison':
      return '#A040A0';
    case 'normal':
      return '#A8A878';
    case 'ice':
      return '#98D8D8';
    case 'ghost':
      return '#705898';
    case 'water':
      return '#6890F0';
    case 'flying':
      return '#A890F0';
    case 'bug':
      return '#A8B820';
    case 'dark':
      return '#705848';
    case 'steel':
      return '#B8B8D0';
    case 'fairy':
      return '#EE99AC';
    case 'electric':
      return '#F8D030';
    default:
      return '99c6c5';
  }
}
