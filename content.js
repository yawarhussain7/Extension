function getArticle() {
    const article = document.querySelector("article")
    if (article) {
        return article.innerText;
    }



    const paragraph = Array.from(document.querySelector("p"))
    return paragraph.map((p) => p.innerText).join("\n")

}


chrome.runtime.onMessage.addListener((request, sender, sentresponse) => {
    if (request.type === "GET_ARTICLE_TEXT") {
        const text = getArticle()
        sentresponse({ text })
    }
})
