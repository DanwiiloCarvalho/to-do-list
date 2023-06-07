import { ImgHTMLAttributes } from "react"
import styles from "./Logo.module.css"

export function Logo(params: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
         {...params}
         className={styles.logo} 
        />
    )
}