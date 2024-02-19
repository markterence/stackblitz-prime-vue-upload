<script setup lang="ts">
import type { FileUploadUploadEvent, FileUploadUploaderEvent } from 'primevue/fileupload';
 
function upload(event: FileUploadUploaderEvent) {
    $fetch('/api/test-upload', {
      method: 'POST',
      body: event
    })
}


/** 
 * Custom Upload API 
 * 
 * This is a mock function that wraps the interface of our Upload API
 */
function useModelUploader() {
  const uploadFiles = (id: string | number) => {
    return (formData: any | FormData, requestOptions: any) => {
      
    }
  }
}

</script>

<template>
  <div>
    <h2>Upload Component</h2>

    <FileUpload mode="basic" name="file[]"
      accept="image/*" 
      customUpload 
      @uploader="upload"
    />

  </div>
</template>

