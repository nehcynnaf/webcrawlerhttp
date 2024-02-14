//normalized URL
//steps: stub out function you want to test-> write out test for the function-> implement function
function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0 , -1)
    }
    return hostPath




    
}

module.exports = {
    normalizeURL
}