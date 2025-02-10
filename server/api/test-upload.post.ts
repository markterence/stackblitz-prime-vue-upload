export default defineEventHandler(async (event) => {

    const formData = await readMultipartFormData(event);
    console.log(formData);
    
    return {
      status: 200,
      message: 'agsas'
    }
  })