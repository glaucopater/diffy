export const getQueryString = (searchParams: string[]) => {
    const search = window.location.search
    const params = new URLSearchParams(search)

    return searchParams.map(s => (params.has(s) === true) && params.get(s))
}
