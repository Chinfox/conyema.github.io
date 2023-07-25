export async function getAcctPredction(reqUrl: string, data: {}) {
  try {
        let options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }

        // console.log(data)

        const response = await fetch(reqUrl, options)
    
        // Get the response data from API as JSON.
        const prediction = await response.json()

        return prediction
    
  } catch (error) {
    console.log(error)
  }
}