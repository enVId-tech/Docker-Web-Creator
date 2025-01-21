"use client";
import React from "react";
import styles from "@/styles/pagetemplate.module.scss";

export default function PageTemplate({ children }: {children?: React.ReactNode}) {
    return (
        <div className={styles.page}>
            <h1 className={styles.mainTitle}>Docker Website Hosting Platform</h1>

            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
    );
}