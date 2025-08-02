export function capitalize(string){
    return string.at(0).toUpperCase().concat(string.slice(1, string.length));
}