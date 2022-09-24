let myCustomPromise = async () => {
    try {
        // var API_KEY='7c4b22203497477c862f5df25ba7e69d'
        let a = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-24&sortBy=publishedAt&apiKey=7c4b22203497477c862f5df25ba7e69d')
        if (a) {
            let b = a.json()
            b.then((value) => {
                for (let key in value) {
                    console.log(value[key].articles)
                    document.getElementById("demo").innerHTML += `<h3>${value[key].articles}</h3>`;
                    console.log(value)
                }
                
                // console.log(value)
                // if (value) {
                //     throw "asadad"
                // }
            })
            // b.catch((error) => {
            //     console.log(error)
            // })
        } else {
            throw "asadad"
        }
    } catch (error) {
        document.getElementById("demo").innerHTML = error;
        console.log(error)
    }
    
}
myCustomPromise()