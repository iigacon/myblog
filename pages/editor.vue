<template>
  <div class="flex flex-col">
    <span class="h1">Title</span>
    <input />
    <client-only placeholder="loading...">
      <ckeditor-nuxt v-model="contentHolder" :config="editorConfig"  />
    </client-only>
    <span>{{contentHolder}}</span>
  </div>
</template>

<script lang="ts">
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  components: {
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  data: ()=> {
    return {
      // editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        removePlugins: ['Title'],
        simpleUpload: {
          uploadUrl: 'http://localhost:4000/api/v1/upload',
          headers: {
            // 'Authorization': 'Client-ID 15058a5735a55f4'
          }
        }
      },
      contentHolder: ""
    }
  }
}
</script>

<style scoped>

</style>
