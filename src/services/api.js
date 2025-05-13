import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://localhost:3900/v1",
    timeout: 10000,
})

export const getPublicationsRequest = async()=>{
    try {
        return await apiClient.get('/publication/getPublications')
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const getCommentsByPublicationIdRequest = async(id)=>{
    try {
        return await apiClient.get(`/comment/getCommentsByPublication/${id}`)
    } catch (err) {
        return{
        error:true,
        err
        }
    }
}
    

export const createCommentRequest = async(comment)=>{
    try {
        return await apiClient.post('/comment/addComment',comment)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}