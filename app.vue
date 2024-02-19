<script setup lang="ts">
import type { FileUploadProgressEvent, FileUploadUploadEvent, FileUploadUploaderEvent } from 'primevue/fileupload';

const uploadProgress = ref();

async function uploader(event: FileUploadUploaderEvent) {
  console.debug('Upload')
  const response = await $fetch('/api/test-upload', {
    method: 'POST',
    body: event
  })
  // console.log(response)
}

function onUploadProgress(event: FileUploadProgressEvent) {
  uploadProgress.value = event.progress; 
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
      :auto="false"
      @uploader="uploader"
      @progress="onUploadProgress"
    />

    
    <ProgressBar :value="uploadProgress"></ProgressBar>

  </div>
</template>

