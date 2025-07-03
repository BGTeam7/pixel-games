function isMatch(media) {
    const query = `(min-width: ${sizes[media]})`;
    return window.matchMedia(query).matches;
}

function findClosest(queries) {
    for (let i = queries.length - 1; i >= 0; i--) {
        if (isMatch(queries[i])) {
            return queries[i];
        }
    }
    return 'sm';
}

