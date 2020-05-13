function matchesPlayedPerYear(matches) {
    const result = {}
    for (let match of matches) {
        if (result[match.season]) {
            result[match.season] += 1
        } else {
            result[match.season] = 1
        }
    }
    return result
}

module.exports = matchesPlayedPerYear
