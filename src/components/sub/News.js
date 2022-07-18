import Layout from "./Layout";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Popup from "../common/styled/popup/Popup";
import { Link } from "react-router-dom";
import { newsPosts } from "../../asset/news";

function News() {
  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);
  const editPop = useRef(null);
  const txtPop = useRef(null);
  const createPop = useRef(null);
  const subTxt =
    "We make digital experiences that use technology to create emotions technology.";
  const getLocalData = () => {
    const data = localStorage.getItem("post");
    if (data) {
      return JSON.parse(data);
    } else {
      return newsPosts;
    }
  };

  const [Posts, setPosts] = useState(getLocalData());
  const [EditIdx, setEditIdx] = useState(0);
  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(Posts));
  }, [Posts]);

  //게시글 보기
  const onShow = (e, idx) => {
    e.preventDefault();
    txtPop.current.open();
    setEditIdx(idx);
  };

  //글 초기화  함수
  const resetPost = () => {
    input.current.value = "";
    textarea.current.value = "";
    if (inputEdit.current) {
      inputEdit.current.value = "";
      textareaEdit.current.value = "";
    }
    createPop.current.close();
  };

  //글 저장 함수
  const createPost = () => {
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      resetPost();
      return alert("Please enter both title and text.");
    }
    createPop.current.close();
    setPosts([
      { title: input.current.value, content: textarea.current.value },
      ...Posts,
    ]);
    resetPost();
  };

  //글 삭제 함수
  const deletePost = (index) => {
    setPosts(Posts.filter((_, idx) => index !== idx));
  };

  //실제 글 수정 함수
  const updatePost = (index) => {
    editPop.current.close();

    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      resetPost();
      return alert("Please enter both the title and text to be edited.");
    }

    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) {
          post.title = inputEdit.current.value;
          post.content = textareaEdit.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };

  //글 수정모드 변경함수
  const enableUpdate = (index) => {
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = true;

        return post;
      })
    );
    setEditIdx(index);
    console.log(Posts[EditIdx]);
    editPop.current.open();
  };

  //출력모드 변경함수
  const disableUpdate = (index) => {
    editPop.current.close();
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = false;
        return post;
      })
    );
  };

  //글쓰기창
  const onWrite = () => {
    createPop.current.open();
  };

  return (
    <>
      <Layout name={"News"} title={"News"} subTxt={subTxt}>
        <div className="write">
          <button onClick={onWrite} className="ani-content4">
            Write
          </button>
        </div>
        <div className="showBox">
          {Posts.map((post, idx) => {
            return (
              <article className="list" key={idx}>
                <span className="num">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx}
                </span>
                <div className="txt">
                  <Link
                    className="link"
                    to={`${idx}`}
                    onClick={(e) => {
                      onShow(e, idx);
                    }}
                  >
                    <h3 className="title">{post.title}</h3>
                    <p>{post.content}</p>
                  </Link>
                </div>
                <div className="btnSet">
                  <button className="edit" onClick={() => enableUpdate(idx)}>
                    <span className="h">Edit</span>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="delete" onClick={() => deletePost(idx)}>
                    <span className="h">Delete</span>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Layout>
      <Popup ref={txtPop}>
        <article className="newsList">
          <div>
            <h3 className="newsListTitle">News</h3>
            <h4 className="txtTitle">{Posts[EditIdx].title}</h4>
            <p className="txt">{Posts[EditIdx].content}</p>
          </div>
        </article>
      </Popup>
      <Popup ref={editPop}>
        <article className="inputBox">
          <h3 className="inputBoxTitle">Edit post</h3>
          <div>
            <input
              type="text"
              defaultValue={Posts[EditIdx].title}
              ref={inputEdit}
            />
            <textarea
              cols="30"
              rows="5"
              ref={textareaEdit}
              defaultValue={Posts[EditIdx].content}
            ></textarea>
          </div>
          <div className="btnSet">
            <button onClick={() => disableUpdate(EditIdx)}>Cancel</button>
            <button className="saveBtn" onClick={() => updatePost(EditIdx)}>
              Save
            </button>
          </div>
        </article>
      </Popup>
      <Popup ref={createPop}>
        <article className="inputBox">
          <h3 className="inputBoxTitle">Write a post</h3>
          <div>
            <input
              type="text"
              placeholder="Please enter a title."
              ref={input}
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Please enter text."
              ref={textarea}
            ></textarea>
          </div>
          <div className="btnSet">
            <button onClick={resetPost}>Cancel</button>
            <button className="saveBtn" onClick={createPost}>
              Write
            </button>
          </div>
        </article>
      </Popup>
    </>
  );
}

export default News;
