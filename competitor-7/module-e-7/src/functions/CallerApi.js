export const CallerApi = async (endpoint, method = 'GET', content, bearer='a31405d272b94e5d12e9a52a665d3bfe') => {
    const response = await fetch('https://module-c-7-solution.dineease.com/api/v1/'+endpoint,{
        method,
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer '+bearer
        },
        body : JSON.stringify(content),
        redirect: "follow"
    })
    return await response.json()
}