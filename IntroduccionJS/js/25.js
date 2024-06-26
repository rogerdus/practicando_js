/// Fetch API con promises
const url = 'https://jsonplaceholder.typicode.com/comments'

/// sin functio
// fetch(url)
//     .then((response) => {
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error('Something went wrong')
//         }
//     })
//     .then(comments => console.log(comments))
//     .catch(error => console.log(error))

/// async await y try catch

const consultarAPI = async () => {
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Something went wrong')
        }
        
        const data = await response.json()
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

consultarAPI()