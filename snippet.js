document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('articles-container');
 
    // 讀取 JSON 資料
    fetch('data/articles.json')
        .then(response => response.json())
        .then(articles => {
            renderArticles(articles);
        })
        .catch(error => {
            container.innerHTML = '<p>無法載入文章資料，請檢查網路連線或檔案路徑。</p>';
            console.error('Error loading articles:', error);
        });
 
    function renderArticles(articles) {
        container.innerHTML = articles.map(article => `
<article class="card">
<div class="card-header">
<h2 class="card-title">${article.title}</h2>
<div class="card-meta">
<span class="author">👤 ${article.author}</span> | 
<span class="date">📅 ${article.date}</span>
</div>
</div>
<div class="card-body">
<strong>核心摘要：</strong>
<ul class="summary-list">
                        ${article.summary.map(point => `<li>${point}</li>`).join('')}
</ul>
<a href="${article.link}" target="_blank" class="read-more">閱讀原文 (FDA 官網)</a>
</div>
</article>
        `).join('');
    }
});