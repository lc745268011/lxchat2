<template>
    <div>
        <textarea id="editor" rows="10" cols="80"></textarea>

    </div>
</template>

<script>
    import CKEDITOR from "CKEDITOR"

    export default {
        name: "editor",
        mounted() {
            CKEDITOR.replace("editor", {height: "300px", width: "100%", toolbar: "Full"});
            var editor = CKEDITOR.instances.editor2;
        },
    }
</script>

<style scoped>

</style>