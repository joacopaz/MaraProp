const searchTerm = sessionStorage.getItem("search").toLowerCase();
const properties = {
	"Propiedad 1": "Av. Cabildo 2677, Belgrano 4°A",
	"Propiedad 2": "Av. Cabildo 2677, Belgrano 4°C",
	"Propiedad 3": "Av. Cabildo 2677, Belgrano 5°",
	"Propiedad 4": "Av. Cabildo 2677, Belgrano 6°",
	"Propiedad 5": "Av. Cabildo 2677, Belgrano 9°A",
	"Propiedad 6": "Av. Cabildo 2677, Belgrano 9°B",
	"Propiedad 7": "Av. Córdoba 3341 PB",
	"Propiedad 8": "Av. Córdoba 3341 1°",
	"Propiedad 9": "Av. Córdoba 3341 2° y 3°",
	"Propiedad 10": "Av. Humboldt 2495 3°",
	"Propiedad 11": "Av. Humboldt 2495 4°",
	"Propiedad 12": "Av. Humboldt 2495 5°",
	"Propiedad 13": "Av. Humboldt 2495 6°",
	"Propiedad 14": "Av. Humboldt 2495 7°",
	"Propiedad 15": "Olleros 2387 1°",
	"Propiedad 16": "Olleros 2387 2°",
	"Propiedad 17": "Olleros 2387 3°",
	"Propiedad 18": "Olleros 2387 4°",
};

let results = [];

for (const key in properties) {
	const propiedad = properties[key];
	if (propiedad.toLowerCase().includes(searchTerm)) results.push(propiedad);
}

if (results)
	results.forEach((result) => {
		const li = document.createElement("li");
		const resultList = document.querySelector("[data-results]");
		li.textContent = result;
		li.addEventListener("click", () => {
			const id = Object.keys(properties).find(
				(propiedad) => properties[propiedad] === li.textContent,
			);
			sessionStorage.setItem("propiedad", id);
			location.href = "./propiedad.html";
		});
		resultList.appendChild(li);
	});
if (results.length < 1) {
	document.querySelector(".results h4").textContent =
		"No se han encontrado resultados!";
	const a = document.createElement("a");
	a.href = "./index.html";
	a.textContent = "Regresar";
	a.classList.add("link");
	document.querySelector(".results").appendChild(a);
}
