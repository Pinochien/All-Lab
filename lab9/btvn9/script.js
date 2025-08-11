// 1. Callback version
function getDataWithCallback(callback) {
    setTimeout(() => {
        const mockData = ["Alice", "Bob", "Charlie", "David"];
        callback(mockData);
    }, 1000);
}

// 2. Promise version
function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockData = ["Alice", "Bob", "Charlie", "David"];
            // reject("Something went wrong!"); // Uncomment để test lỗi
            resolve(mockData);
        }, 1000);
    });
}

// 3. Async/Await version
async function getDataWithAsyncAwait() {
    try {
        const data = await getDataWithPromise();
        return data;
    } catch (error) {
        throw error;
    }
}

// 4. Display function
function displayData(title, data) {
    const container = document.getElementById("data-container");
    container.innerHTML += `<h3>${title}</h3><ul>${data.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// 5. Event listener
document.getElementById("fetch-data").addEventListener("click", () => {
    document.getElementById("data-container").innerHTML = ""; // clear old content

    // Callback example
    getDataWithCallback((data) => {
        displayData("Callback Result", data);

        // Promise example
        getDataWithPromise()
            .then(data => {
                displayData("Promise Result", data);

                // Async/Await example
                getDataWithAsyncAwait()
                    .then(data => {
                        displayData("Async/Await Result", data);
                    })
                    .catch(err => console.error("Async/Await Error:", err));
            })
            .catch(err => console.error("Promise Error:", err));
    });
});
