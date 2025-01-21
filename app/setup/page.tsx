"use client";
import React from "react";
import styles from "@/styles/setup.module.scss";
import PageTemplate from "@/app/_components/pageTemplate";

export default function Setup(): React.ReactElement {
    const [existingDocker, setExistingDocker] = React.useState<boolean>(false);

    const githubInputRef = React.useRef<HTMLInputElement>(null);
    const domainInputRef = React.useRef<HTMLInputElement>(null);
    const dockerImageRef = React.useRef<HTMLInputElement>(null);
    const dockerfileRef = React.useRef<HTMLInputElement>(null);
    const errorRef = React.useRef<HTMLHeadingElement>(null);

    const clearInputs = (): void => {
        document.getElementsByClassName(styles.githubInput)[0].innerHTML = "";
        document.getElementsByClassName(styles.domainInput)[0].innerHTML = "";
        document.getElementsByClassName(styles.dockerInput)[0].innerHTML = "";
    }

    const goToNext = (): void => {
        if (!existingDocker) {
            errorRef.current!.innerHTML = "Please make sure to have a Dockerfile within the requested GitHub repository.";
            setTimeout(() => {
                errorRef.current!.innerHTML = "";
            }, 10000);
        }

        if (githubInputRef.current!.value === "" || domainInputRef.current!.value === "") {
            errorRef.current!.innerHTML = "Please make sure to fill out all the fields.";
            setTimeout(() => {
                errorRef.current!.innerHTML = "";
            }, 10000);
        }

        window.location.href = "/setup/confirmation";
    }

    return <PageTemplate>
        <h1 className={styles.mainTitle}>Setup a website</h1>
        <div className={styles.mainContent}>
            <span className={styles.selectDiv1}>
                <h1>Enter GitHub repository</h1>
                <input className={styles.githubInput} type="text" placeholder="GitHub website" ref={githubInputRef}/>
            </span>
            <span className={styles.selectDiv2}>
                <h1>Enter the requested subdomain</h1>
                <input className={styles.domainInput} type="text" placeholder="example" ref={domainInputRef}/>
            </span>
            <span className={styles.selectDiv3}>
                <h1>Already have an existing <a
                    href={"https://docs.docker.com/get-started/introduction/build-and-push-first-image/"}>docker image</a>?</h1>
                <input className={styles.dockerInput} type={"text"} placeholder="(OPTIONAL) Image URL" ref={dockerImageRef}/>
            </span>
            <span className={styles.selectDiv4}>
                <h1>Have a <a
                    href={'https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/'}
                    target={"_blank"}>Dockerfile</a> in GitHub?</h1>
                <input className={styles.dockerfileInput} type={"checkbox"} ref={dockerfileRef}
                       onChange={(): void => setExistingDocker(!existingDocker)}/>
            </span>
        </div>

        <h1 className={styles.error} ref={errorRef}/>

        <span className={styles.bottomSelector}>
            <button className={styles.submitButton} onClick={(): string => window.location.href = "/"}>Back</button>
            <button className={styles.submitButton} onClick={(): void => clearInputs()}>Clear</button>
            <button className={styles.submitButton} onClick={(): void => goToNext()}>Next</button>
        </span>
    </PageTemplate>
}