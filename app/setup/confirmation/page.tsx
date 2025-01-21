"use server";
import React from "react";
import styles from "@/styles/confirmation.module.scss";
import PageTemplate from "@/app/_components/pageTemplate";

export default async function Setup(): Promise<React.ReactElement> {
    return <PageTemplate>
        <h1 className={styles.mainTitle}>Confirmation</h1>
        <div className={styles.mainContent}>

        </div>
    </PageTemplate>
}