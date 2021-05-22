export const getQueryString = (searchParams: string[]) => {
    const search = window.location.search
    const params = new URLSearchParams(search)

    const results = searchParams.map(s => {
        if (params.has(s) === true)
            return params.get(s)
    })
    return results
}
