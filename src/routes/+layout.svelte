<div class="header">
    <a href="/">My Svelte Blog</a>
</div>
<div class="container">
    <slot />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

    * {
        font-family: "Inter", Helvetica, Arial,serif;
    }

    .header {
        color: white;
        background-color: #696969;
        padding: 30px;
        margin-bottom: 30px;
        border-radius: 10px;
    }

    .header a {
        all: unset;
        font-size: 28px;
    }

    .header a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .container {
        width: 100%;
        max-width: 1140px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 768px) {
        .container {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }
</style>
