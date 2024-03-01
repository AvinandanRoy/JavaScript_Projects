
const apiKey = "45c2871e522b4c2b9740ffad29fc79df";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiUrl = `
        https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.article;
    }catch(error){
        console.log("Error fetching random news",error);
        return [];
    }
}

function displayBlogs(article){
    
}

(async()=>{
    try{
        const article = await fetchRandomNews();
        displayBlogs(article);
    }catch(error){
        console.log("Error fetching random news",error);
    }
})