"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/navigation.module.css"

export default function Navigation(){
    const path = usePathname();
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "!" : ""}
                </li>
                <li>
                    <Link href="/about">about</Link> {path === "/about" ? "!" : ""}
                </li>
            </ul>
        </nav>
    )
}