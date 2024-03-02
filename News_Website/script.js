
const apiKey = "45c2871e522b4c2b9740ffad29fc79df";

const blogContainer = document.getElementById("blog-container");


async function fetchRandomNews(){
    try{
        const apiUrl = `
        https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        return data.articles;
    }catch(error){
        console.error("Error fetching random news",error);
        return [];
    }
}


function displayBlogs(articles){
    blogContainer.innerHTML = " ";
    articles.forEach((article)=>{
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title ;

        const title = document.createElement("h2");
        const trucatedTitle = article.title.length > 30 ? article.title.slice(0,30)+'...':article.title;
        title.textContent = trucatedTitle;

        const descriptions = document.createElement("p");
        const trucatedDes = article.title.length > 120 ? article.description.slice(0,120)+'...':article.title;
        descriptions.textContent = trucatedDes;

        
        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(descriptions)

        blogCard.addEventListener("click",()=>{
            window.open(article.url,"_blank")
        })

        blogContainer.appendChild(blogCard);
    });
}


(async ()=>{
    try{
        const articles =await fetchRandomNews();
        displayBlogs(articles)
    }catch(error){
        console.log("Error fetching random news ", error);
    }
})();