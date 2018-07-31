<template>
    <div>
        <textarea id="editor" rows="10" cols="80"></textarea>
        <textarea id="editor1" rows="10" cols="80"></textarea>
    </div>
</template>

<script>
    import CKEDITOR from "CKEDITOR"
    export default {
        name: "editor",
        mounted() {
            CKEDITOR.replace("editor", {width: "100%",toolbar:'normal'});
            CKEDITOR.replace( 'editor1',
                {
                    toolbar : 'MyToolbar'
                });

        },
    }
</script>

<style scoped>

</style>