export const categories = {
  76: 'sports',
  68: 'economie',
  74: 'societe',
  70: 'culture&style',
  72: 'politique',
}

export function formaterDateLong(date) {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long', // Ou 'short', 'medium', 'full'
  }).format(date)
}

export const videos = [
  {
    id: 'PlCMZhG5MfI',
    desc: "Points de Vue - L'entretien Ep 1 avec Fabrice Lago",
  },
  { id: 'Tpnq7oq9Tw4', desc: "Oser l'Élite : Dr Jules N’GUESSAN" },
  { id: 'Io3JQnQQ54k', desc: 'AgroMakers Ep 1 - Fabrice Tamegnon' },
  {
    id: 'DaQQkt9iBRE',
    desc: 'AgroMakers Ep 02 - Les réalités de la transformation locale - Axel Emmanuel, le Chocolatier Ivoirien',
  },
]

export function getFonts(first, second, root = 10) {
  const v = (100 * (second.y - first.y)) / (second.x - first.x)
  const r = (first.x * second.y - second.x * first.y) / (first.x - second.x)
  return {
    v,
    r: r / 10,
  }
}
