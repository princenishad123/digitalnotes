import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { services } from "../Firebase/service";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const View = () => {
  const { name, id } = useParams();
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [copy, setCopy] = useState(<MdOutlineContentCopy />);

  services.getOneDoc(name, id).then((res) => {
    setContent(res.content);
    setQuestion(res.question);
    setDescription(res.description);
  });

  const copyCode = () => {
    navigator.clipboard.writeText(content);
    setCopy(<FaCheck />);
    setTimeout(() => {
      setCopy(<MdOutlineContentCopy />);
    }, 3000);
  };

  return (
    <Layout
      title={`${name}`}
      description={"view syntax and copy easly"}
      author={"Prince Nishad"}
      keyword={"HTML,CSS,JavaScripr,React"}
    >
      <div className="p-2 z-10">
        <h4 className=" mt-4 rounded-md text-2xl max-sm:text-xl bg-gray dark:bg-gray-700 dark:border-gray-700">
          {question}
        </h4>
        <p className="description my-2">{description}</p>

        <div className="bg-slate-800 relative">
          <button
            onClick={copyCode}
            className="float-end m-2 text-[1rem] py-1 px-2 rounded-md  dark:bg-gray-700 text-white  bg-gray-500"
          >
            {copy}
          </button>

          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </Layout>
  );
};

export default View;
