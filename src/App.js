import { useState, useRef, useEffect } from "react";
import initialSiteTasks from "./data/siteTasks.json";
import "./App.scss";

function App() {
  const [siteTasks, setSiteTasks] = useState(initialSiteTasks);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // save siteTask
  useEffect(() => {
    inputRef.current.focus();
    const lsTasks = JSON.parse(localStorage.getItem("tasks"));
    if (lsTasks != null) {
      setSiteTasks(lsTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(siteTasks));
  }, [siteTasks]);

  const handleUpdateCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleUpdateTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (category === "" || title === "") {
      setMessage("Please fill both inputs to submit a task.");
      inputRef.current.focus();
    } else {
      setSiteTasks((prevSiteTasks) => [
        ...prevSiteTasks,
        { category, title, id: prevSiteTasks.length + 1 },
      ]);
      setCategory("");
      setTitle("");
      inputRef.current.focus();
    }
  };
  const handleKeyPress = (key) => {
    if (key === "Enter") {
      if (category === "" || title === "") {
        setMessage("Please fill both inputs to submit a task.");
        inputRef.current.focus();
      } else {
        setSiteTasks((prevSiteTasks) => [
          ...prevSiteTasks,
          { category, title, id: prevSiteTasks.length },
        ]);
        setCategory("");
        setTitle("");
        inputRef.current.focus();
      }
    }
  };
  const deleteTask = (siteTask) => {
    setSiteTasks((n) => [...siteTasks.filter((m) => m.id !== siteTask.id)]);
  };

  //DROPDOWN
  const categoryDropdownArray = [
    "newFeature",
    "newPage",
    "newShowcase",
    "newCreatePage",
    "tech",
    "bugFix",
    "newDataType",
  ];
  const handleUpdateCategorySelect = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="App">
      <h1>Website Task Management App</h1>
      {/* input search */}
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {siteTasks
        .filter((siteTask) => {
          if (!searchTerm === "") {
            return "";
          } else if (
            siteTask.title
              .toLowerCase()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return siteTask.title;
          }
        })
        .map((siteTask, key) => {
          return <div key={key}>{siteTask.title} </div>;
        })}
      <form action="" onSubmit={handleAddTask}>
        <select
          name="taskCategory"
          id="taskCategory"
          onChange={handleUpdateCategorySelect}
          defaultValue="DEFAULT"
        >
          <option disabled value="DEFAULT">
            Choose Category
          </option>
          {categoryDropdownArray.map((taskCatergory, index) => {
            return (
              <option value={taskCatergory} key={index}>
                {taskCatergory}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          value={category}
          onChange={handleUpdateCategory}
          ref={inputRef}
        />
        <input
          type="text"
          value={title}
          onChange={handleUpdateTitle}
          onKeyPress={handleKeyPress}
        />
        <button>
          <i class="fas fa-plus"></i>
        </button>{" "}
        <br />
        <span>Number Of Tasks : {siteTasks.length}</span>
        {message !== "" && <p className="message">{message}</p>}
      </form>

      <table>
        <tbody>
          {siteTasks.reverse().map((siteTask) => {
            return (
              <tr key={siteTask.id}>
                <td className="id">{siteTask.id}</td>
                <td>
                  {siteTask.category.charAt(0).toUpperCase() +
                    siteTask.category
                      .substr(1, siteTask.category.length)
                      .toLowerCase()}
                </td>

                <td>
                  {siteTask.title.substr(0, 1).toUpperCase() +
                    siteTask.title
                      .substr(1, siteTask.title.length)
                      .toLowerCase()}

                  <i
                    class="fas fa-trash"
                    onClick={() => deleteTask(siteTask)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
