<div class="article">
    <h1 class="article-title">
        {article.title}
    </h1>
    {#if article.publicationDate}
        <div class="article-publication-date">
            Article published on: { new Date(article.publicationDate).toLocaleString() }
        </div>
    {/if}
    <div class="article-content">
        <StructuredText data={article.content}/>
    </div>
</div>


<style>
    .article h1 {
        font-size: 55px;
        margin-bottom: 12px;
    }

    .article .article-publication-date {
        color: #696969;
        font-size: 16px;
        margin-bottom: 44px;
    }

    .article .article-content {
        font-size: 18px;
        line-height: 30px;
    }
</style>

<script>
    import { StructuredText } from "@datocms/svelte"
    import {error} from "@sveltejs/kit"

    export let data
    const { article } = data

    if (!article) {
        throw error(404, { message: "Article Not found" })
    }

</script>
