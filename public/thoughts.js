async function loadPosts() {
  const response = await fetch("./thoughts.json");
  const posts = await response.json();
  const blog = document.getElementById("blog");

  posts.forEach(post => {
    const article = document.createElement("article");
    article.className = "post";
    article.innerHTML = `
      <h2>${post.date}</h2>
      <p>${post.text}</p>
    `;
    blog.appendChild(article);
  });
}
loadPosts();