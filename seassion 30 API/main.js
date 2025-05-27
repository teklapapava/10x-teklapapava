const container = document.getElementById("container");
// const inputCountry = document.getElementById("inputCountry");
// const button = document.getElementById("button");
// let allCountries = [];



const renderContainer = async () => {
    // container.innerHTML = "";

    try{
        const res = await fetch("https://restcountries.com/v3.1/all");
        const counrties = await res.json();
        
        // console.log(counrties);

        counrties.forEach((country) => {
            
            const card = document.createElement("div");
            card.classList.add("country-card");
            card.style.color = "white"
    
            const flag = document.createElement("img");
            flag.src = country.flags.png;
            flag.alt = `Flag of ${country.name.common}`;
    
            const name = document.createElement("h3");
            name.textContent = country.name.common;
    
            const population = document.createElement("p");
            population.textContent = `Population: ${country.population}`;
    
            const region = document.createElement("p");
            region.textContent = `Region: ${country.region}`;
    
            const capital = document.createElement("p");
            capital.textContent = `Capital: ${country.capital}`;
    
            card.appendChild(flag);
            card.appendChild(name);
            card.appendChild(population);
            card.appendChild(region);
            card.appendChild(capital);
            
            container.appendChild(card);
        });
    }catch(err){
        console.log("Error:", err)
    }
}

renderContainer();




// const renderCountriesr = async () => {
//     try{
//         const res = await fetch("https://restcountries.com/v3.1/all");
//         const counrties = await res.json();
//         allCountries = counrties;
//         renderContainer(allCountries);
//     }catch(err){
//         console.log(`Error:`, err);
//     }
// }



// inputCountry.addEventListener("input", ()=>{
//     const searchTerm = inputCountry.value.toLowerCase();
//     const filtered = allCountries.filter((country ) =>
//      country.name.common.toLowerCase().includes(searchTerm)
//         );
//     renderContainer(filtered);
// })
// button.addEventListener("click", ()=>{
//     const searchTerm = inputCountry.value.toLowerCase();
//     const filtered = allCountries.filter((country ) =>
//      country.name.common.toLowerCase().includes(searchTerm)
//      );
//      renderContainer(filtered);

// })