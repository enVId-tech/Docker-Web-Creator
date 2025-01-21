"use client";
import React from "react";
import styles from "@/styles/edit.module.scss";
import PageTemplate from "@/app/_components/pageTemplate";

export default function Edit(): React.ReactElement {
    const [content, setContent] = React.useState<string>("");
    const [domain, setDomain] = React.useState<string>("");

    const errorRef = React.useRef<HTMLHeadingElement>(null);
    const domainRef = React.useRef<HTMLInputElement>(null);

    const goToNext = (): void => {
        if (!domain) {
            errorRef.current!.innerText = "Please input a domain";

            setTimeout(() => {
                errorRef.current!.innerText = "";
            }, 5000);

            return;
        }

        if (!domain.endsWith(".etran.dev")) {
            errorRef.current!.innerText = "Please make sure your domain ends in .etran.dev";

            setTimeout(() => {
                errorRef.current!.innerText = "";
            }, 5000);

            return;
        }
        window.location.href = `/edit/${domain}`;
    }

    return <PageTemplate>
        <h1 className={styles.mainTitle}>Editor</h1>
        <div className={styles.mainContent}>
            <p>Input your given domain</p>
            <input type="text" value={domain} ref={domainRef} onChange={(e) => setDomain(e.target.value)}/>
            <h6>NOTE: Your given domain ends in .etran.dev</h6>
        </div>
        <h1 className={styles.error} ref={errorRef} />
        <span className={styles.bottomSelector}>
            <button className={styles.submitButton} onClick={(): string => window.location.href = "/"}>Back</button>
            <button className={styles.submitButton} onClick={(): void => goToNext()}>Next</button>
        </span>
    </PageTemplate>
}