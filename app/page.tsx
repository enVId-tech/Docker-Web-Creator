"use client";
import img1 from "@/public/docker-logo.png";
import React from "react";
import styles from "@/styles/homepage.module.scss";
import PageTemplate from "@/app/_components/pageTemplate";

export default function Home(): React.ReactElement {
    return <PageTemplate>
      <span className={styles.mainTitle}>
          <img src={`${img1.src}`} className={styles.img1} alt="Docker logo"/>
      </span>
        <p>
            This website lets you host your own website using Docker in a very simple and easy process.
        </p>
        <p>
            You also get your own domain name and will update every so often
        </p>

        <span className={styles.bottomSelector}>
          <div className={styles.selectDiv1}>
              <h1>Get Started</h1>
              <p>Want to set up a website?</p>
              <button onClick={(): string => window.location.href="setup"}>Get Started</button>
          </div>
          <div className={styles.selectDiv2}>
                <h1>Edit Website</h1>
                <p>Have an existing website? Edit it here.</p>
                <button onClick={(): string => window.location.href="edit"}>Edit Website</button>
          </div>
      </span>
    </PageTemplate>
}
