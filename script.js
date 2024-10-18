document.getElementById('preferenceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const genre = document.getElementById('genre').value.toLowerCase();
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const recommendations = data.filter(movie => movie.genre.toLowerCase() === genre);
            displayRecommendations(recommendations);
        });
});

function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationsDiv.innerHTML = '<p>No recommendations found.</p>';
        return;
    }

    recommendations.forEach(movie => {
        const movieElement = document.createElement('p');
        movieElement.textContent = `${movie.title} (${movie.rating}/10)`;
        recommendationsDiv.appendChild(movieElement);
    });
    console.log("by A_Sri_Ram");
}
