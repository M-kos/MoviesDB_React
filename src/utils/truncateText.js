function truncateText(text, requiredLength = 200) {
  if (text.length > requiredLength) {
    const subString = text.slice(0, requiredLength)

    const spaceIndex = subString.lastIndexOf(' ')

    // eslint-disable-next-line no-bitwise
    return ~spaceIndex ? `${subString.slice(0, spaceIndex)}...` : `${subString}...`
  }

  return text
}

export default truncateText