import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

export default function Textarea(prop) {
  const [text, settext] = useState("");
  const [textforimage, settextforimage] = useState("");
  const [imageResults, setImageResults] = useState([]);
  const inputElement = useRef()

  const API_KEY = "38620953-57ef6660a415607fd2835b40b"; // Replace input with your Pixabay API key

  window.addEventListener("beforeunload", function (event) {
    // Clear the local storage when the window is closed
    localStorage.clear();
  });

  useEffect (function (){},[])
  const onchange = (event) => {
    // console.log("Event");
    settext(event.target.value);
  };

  const change = () => {
    // convert into uppercase
    // console.log("change");
    let t = text.toUpperCase();
    settext(t);
  };

  const change1 = () => {
    // convert into lowercase
    // console.log("change");
    let t = text.toLowerCase();
    settext(t);
  };

  const change2 = () => {
    // make textarea clear
    // console.log("change");
    settext("");
  };

  const Copy = () => {
    // copy the content of textarea
    // console.log("copy");
    var copytext = document.getElementById("message");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  };

  const extraspace = () => {
    // remove extraspace from content
    // console.log("extraspace removed");
    let newtext = text.split(/\s+/);
    settext(newtext.join(" "));
  };

  const download = () => {
    // console.log("download");
    const doc = new jsPDF();

    const margin = 10;
    const maxWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    const lineHeight = 10;

    // Split content by whitespace characters
    const words = text.split(/\s+/);
    let posY = margin;

    let currentPage = 1;
    let line = "";

    words.forEach((word) => {
      const width = doc.getTextWidth(line + " " + word);

      if (width < maxWidth) {
        line += (line === "" ? "" : " ") + word;
      } else {
        doc.text(line, margin, posY);
        posY += lineHeight;

        // Check if we need a new page
        if (posY + lineHeight > doc.internal.pageSize.getHeight()) {
          doc.addPage();
          currentPage = currentPage + 1;
          posY = margin;
        }
        line = word;
      }
    });

    // Add the last line
    doc.text(line, margin, posY);
    doc.save("TextUtils.pdf");
  };

  const sentencecase = () => {
    // convert text into Sentence case
    // console.log("change");
    const sentenceCaseText = text.replace(
      /(^|\.\s+|!\s+|\?\s+)([a-z])/g,
      (match, boundary, letter) => {
        return boundary + letter.toUpperCase();
      }
    );
    settext(sentenceCaseText);
  };

  const inveresCase = () => {
    // console.log("change");

    let result = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    settext(result);
  };

  const handleSearch = async () => {
    // console.log("Search is done");
    if (!text.trim()) return; // searching a image
    try {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: textforimage || text,
          image_type: "photo", // You can specify the type of images you want (photo, illustration, vector)
        },
      });
      settextforimage("");
      if (response.data.hits) {
        // console.log(response.data);
        setImageResults(response.data.hits);
      } else {
        setImageResults([]);
      }
    } catch (error) {
      // console.error("Error fetching data: ", error);
      setImageResults([]);
    }
  };

  const selectedtext = () => {
    const { selectionStart, selectionEnd } = document.getElementById("message");
    if (selectionStart !== selectionEnd) {
      const selectedText = text.substring(selectionStart, selectionEnd);
      settextforimage(selectedText);
      // console.log(selectedText);
    } else {
      settextforimage("");
    }
  };

  return (
    <div className="bg-stone-200 h-screen">
      <div className="r">
        <h1>{prop.heading}</h1>

        <label
          htmlFor="message"
          className="max-w-screen-xl  items-center justify-between mx-auto p-4 bg-white-200 block mb-2 text-4xl text-black-900 font-bold dark:text-white"
        >
          Enter Text
        </label>

        <textarea
          id="message"
          value={text}
          onChange={onchange}
          onMouseUp={selectedtext}
          rows="10"
          className=" max-w-screen-xl  flex-wrap items-center justify-between mx-auto p-4 bg-white-200 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write  here...or Select the word using mouse to find image"
          ref={inputElement}
        ></textarea>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white-200">
          <button
            type="button"
            onClick={sentencecase}
            className="grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Sentence Case
          </button>

          <button
            type="button"
            onClick={change}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            UpperCase
          </button>

          <button
            type="button"
            onClick={change1}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            LowerCase
          </button>

          <button
            type="button"
            onClick={inveresCase}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            InveresCase
          </button>

          <button
            type="button"
            onClick={change2}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Clear
          </button>

          <button
            type="button"
            onClick={extraspace}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Remove Extraspace
          </button>

          <button
            type="button"
            onClick={Copy}
            className=" grow  text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={download}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Download
          </button>

          <button
            type="button"
            onClick={handleSearch}
            className=" grow text-white bg-gradient-to-br from-stone-600 to-stone-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-stone-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Find image
          </button>
        </div>
      </div>

      <div className="bg-stone-200">
        <p className="max-w-screen-xl  items-center justify-between mx-auto p-4 bg-white-200">
          {text.split(" ").length} Words and {text.length} Charactes{" "}
        </p>
        <h1 className="max-w-screen-xl  items-center justify-between mx-auto p-4 bg-white-200 text-2xl text-black-900 font-bold md:text-4xl">
          Preview
        </h1>
        <div className="max-w-screen-xl  items-center justify-between mx-auto p-4 bg-white-200">
          {text.split("\n").map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>

        <div className="max-w-screen-xl  items-center justify-between mx-auto p-4 bg-white-200">
          <div className=" columns-2xs columns-4lg gap-7 ">
            {imageResults.map((item, index) => (
              <Link key={item.id} to="#">
                <img
                  className="w-full mb-7 rounded"
                  src={item.webformatURL}
                  alt={` ${index + 1}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
