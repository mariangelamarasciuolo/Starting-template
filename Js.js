const apiKey = "uMIse1RZdjvFwo4tozlsRuNGvmAsJokVGEya7pgr1NcHc1oxxmHrDWov";
fetch ("https://api.pexels.com/v1/search?query=cats",{

    headers: {
        Authorization: apiKey
    }
    
})
.then((res) => {
if(res.ok) return res.json();
})
.then((data) => {
    console.log(data)
    })

    async function load1img() {
        try {
            const resp = await fetch(URL, {
                headers: {
                    Authorization: "uMIse1RZdjvFwo4tozlsRuNGvmAsJokVGEya7pgr1NcHc1oxxmHrDWov",
                },
            });
            const data = await resp.json();
          
        } catch (error) {
            console.log(error);
        }
    }