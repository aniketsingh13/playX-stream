import {useEffect} from "react";

export const useDocumentTitle = (title) => {
            useEffect(() => {
         document.title = `PlayX-Stream | ${title}`
            },[title])
}