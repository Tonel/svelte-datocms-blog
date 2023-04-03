<div>
    <div class="title">
        <h1>
            Blog Posts
        </h1>
    </div>
    <div class="articles">
        <div class="article-cards">
            {#each articles as article}
                <a href="blog/{article.slug}">
                    <div class="article-card">
                        <div class="article-title">
                            {article.title}
                        </div>

                        {#if article.publicationDate}
                            <div class="article-publication-date">
                                Post released on: { new Date(article.publicationDate).toLocaleString() }
                            </div>
                        {/if}
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    .title h1 {
        font-size: 35px;
        text-align: center;
        margin-bottom: 20px;
    }

    .articles a {
        all: unset;
    }

    .articles a:hover {
        cursor: pointer;
    }

    .articles .article-card {
        border-radius: 10px;
        border: solid 1px #696969;
        padding: 25px 15px;
        margin-bottom: 10px;
    }

    .articles a:hover .article-card {
        border: solid 1px #FF7751;
    }

    .articles a:hover .article-title {
        color: #FF7751;
    }

    .articles .article-card .article-title {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .articles .article-card .article-publication-date {
        color: #696969;
        font-size: 14px;
    }
</style>

<script>
    export let data

    const articles = data?.allArticles || []
</script>
