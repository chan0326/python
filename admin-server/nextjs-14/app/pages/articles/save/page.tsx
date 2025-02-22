'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { NextPage } from "next";
import { findAllArticles } from "@/app/components/article/service/article.service";
import { useSelector, useDispatch } from 'react-redux'
import { getAllArticles } from "@/app/components/article/service/article.slice";
import Columns from "@/app/components/article/module/columns";



export default function WriterArticlesPage ()  {
    

    return (<>
        <h2>게시글 내용</h2>
        <div className="relative mb-3" data-twe-input-wrapper-init>
  <textarea
    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlTextarea1"
    rows={10}
    placeholder="Your message"></textarea>
  <label
    htmlFor="exampleFormControlTextarea1"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Example textarea</label>
</div>
    </>)
}

