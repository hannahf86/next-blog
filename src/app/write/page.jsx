"use client";

// REACT
import React, { useState } from "react";

// NEXT JS
import Image from "next/image";

// STYLES
import styles from "./write.module.css";

// REACT QUILL
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />

      <div className={styles.editor}>
        <button>
          <Image
            src="/plus.png"
            alt="a plus sign to add images to the blog"
            width={16}
            height={16}
            className={styles.button}
            onClick={() => !open}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button>
              <Image
                src="/image.png"
                alt="a plus sign to add images to the blog"
                width={16}
                height={16}
                className={styles.addButton}
              />
            </button>

            <button>
              <Image
                src="/external.png"
                alt="a plus sign to add images to the blog"
                width={16}
                height={16}
                className={styles.addButton}
              />
            </button>

            <button>
              <Image
                src="/video.png"
                alt="a plus sign to add images to the blog"
                width={16}
                height={16}
                className={styles.addButton}
              />
            </button>
          </div>
        )}

        {/* REACT QUILL */}
        <ReactQuill
          theme="bubble"
          value={textValue}
          onChange={setTextValue}
          placeholder="Write something good!"
        />
      </div>
    </div>
  );
};

export default WritePage;
