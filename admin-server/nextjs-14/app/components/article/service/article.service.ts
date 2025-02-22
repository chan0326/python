import {createAsyncThunk} from "@reduxjs/toolkit"
import { DeleteArticleByIdAPI, findAllArticlesAPI,  findArticlesByIdAPI ,UpdateArticleByIdAPI } from "./article.api"


export const findAllArticles: any =createAsyncThunk('articles/findAllArticles',
async(page:number, {rejectWithValue})=>{
    
    const data:any = await  findAllArticlesAPI(page);

        const {message, result}:any = data
        return data
}
)
export const findArticleById: any =createAsyncThunk('articles/findArticleById',
async(id:number, {rejectWithValue})=>  await findArticlesByIdAPI(id)
)
export const DeleteArticleById: any =createAsyncThunk('articles/DeleteArticleById',
async(id:number, {rejectWithValue})=>  await DeleteArticleByIdAPI(id)
)
export const UpdateArticleById: any =createAsyncThunk('articles/UpdateArticleById',
async(id:number, {rejectWithValue})=>  await UpdateArticleByIdAPI(id)
)
