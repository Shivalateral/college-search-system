document.getElementById('searchForm').addEventListener('submit', function(event) {
                    event.preventDefault();
                
                    const name = document.getElementById('name').value;
                    const location = document.getElementById('location').value;
                    const type = document.getElementById('type').value;
                
                    fetch(`/search?name=${name}&location=${location}&type=${type}`)
                        .then(response => response.json())
                        .then(data => {
                            const resultsDiv = document.getElementById('results');
                            resultsDiv.innerHTML = '';
                
                            if (data.message) {
                                resultsDiv.innerHTML = `<p>${data.message}</p>`;
                            } else {
                                data.forEach(college => {
                                    resultsDiv.innerHTML += `
                                        <div class="result-item">
                                            <h2>${college.name}</h2>
                                            <p><strong>Location:</strong> ${college.location}</p>
                                            <p><strong>Type:</strong> ${college.type}</p>
                                        </div>
                                    `;
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });
                