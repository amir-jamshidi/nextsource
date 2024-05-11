import qs from 'query-string'
export const urlCreator = ({ params, key, value }: { params: string, key: string, value: string | null }) => {
    const currentUrl = qs.parse(params);
    currentUrl[key] = value;
    return qs.stringifyUrl({
        url: location.pathname,
        query: currentUrl
    }, { skipNull: true })
}   