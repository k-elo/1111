document.addEventListener("DOMContentLoaded", function () {
    const articlesList = document.getElementById("articles-list");

    if (articlesList) {
        // ჩატვირთე სტატიის მოკლე აღწერები blog.html-ზე
        fetch("articles.json")
            .then(response => response.json())
            .then(articles => {
                articles.forEach(article => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="article.html?id=${article.id}">${article.title}</a> - ${article.excerpt}`;
                    articlesList.appendChild(li);
                });
            });
    }

    // ჩატვირთე სრულად გახსნილი სტატია article.html-ზე
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");

    if (articleId) {
        fetch("articles.json")
            .then(response => response.json())
            .then(articles => {
                const article = articles.find(a => a.id === articleId);
                if (article) {
                    document.getElementById("article-title").innerText = article.title;
                    document.getElementById("article-content").innerText = article.content;
                } else {
                    document.getElementById("article-title").innerText = "სტატია ვერ მოიძებნა";
                }
            });
    }
});
