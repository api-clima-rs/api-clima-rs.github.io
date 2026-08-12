
async function getDataTo(cityName) {
    try {
        let response = await fetch("https://raw.githubusercontent.com/api-clima-rs/api-clima-rs.github.io/refs/heads/main/api/repository/data/cities.json");
        if (!response.ok) {
            throw new (`HTTP Error ${resposta.status}: Fetch data error `);
        }
        let cityObjData = null;
        let json = await response.json();
        console.log("Procurando por " + cityName)
        await json.find(element => { 
            let cityObjDataFromMap = new Map(Object.entries(element)).get(cityName);
            if(cityObjDataFromMap != undefined) {
                cityObjData = cityObjDataFromMap;
            }
            return undefined;
        });
        return cityObjData;
    } catch (error) {
        console.error("Unable to fetch data:", error);
        throw error;
    }
}