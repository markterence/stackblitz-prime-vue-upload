export default defineEventHandler(async (event) => {

    const formData = await readMultipartFormData(event);
    console.log(formData);
    
    return {
      status: 400,
      message: 'agsas'
    }
  })