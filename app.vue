<script setup lang="ts">
import type { FileUploadProgressEvent, FileUploadUploadEvent, FileUploadUploaderEvent } from 'primevue/fileupload';

const uploadProgress = ref();

async function uploader(event: FileUploadUploaderEvent) {
  console.debug('Upload') 
  const form = new FormData();
  const handle = 'file';

  if (Array.isArray(event.files)) {
    event.files.forEach((file) => {
      form.append(handle, file as File);
    });
  } else {
    form.append(handle, event.files as File);
  }

  const createExampleUploader = useExampleUploader();
  const performUpload = createExampleUploader.uploadFiles();

  const result = await performUpload(form);
  
  // const response = await $fetch('/api/test-upload', {
  //   method: 'POST',
  //   body: event
  // })
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
function useExampleUploader() {
  const uploadFiles = (id?: string | number) => {
    return async(formData: any | FormData, requestOptions?: any) => {
      const xhrResponse = await $fetch('/api/test-upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return xhrResponse;
    }
  }

  return {
    uploadFiles
  }
}

</script>

<template>
  <div>
    <h2>Upload Component</h2>

    <h3>Basic</h3>
    <FileUpload mode="basic" name="file[]"
      accept="image/*" 
      customUpload 
      :multiple="true"
      :auto="false"
      @uploader="uploader"
      @progress="onUploadProgress"
    />


    <h3>Advanced</h3>
    <FileUpload mode="advanced" name="file[]"
      accept="image/*" 
      customUpload 
      :multiple="true"
      :auto="false"
      @uploader="uploader"
      @progress="onUploadProgress"
    />

    
    <ProgressBar :value="uploadProgress"></ProgressBar>

  </div>
</template>

