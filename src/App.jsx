import React, { useEffect, useState } from "react"

const App = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [input, setInput] = useState("")
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  const array = new Array(5).fill("item")

  const getMessage = async () => {
    try {
      const response = await fetch("http://localhost:8000/completions", {
        method: "POST",
        body: JSON.stringify({
          message: input,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.log(error)
    }
  }

  const createNewChat = () => {
    setMessage(null)
    setInput("")
    setCurrentTitle(null)
  }

  const changeChat = (title) => {
    setCurrentTitle(title)
    setMessage(null)
    setInput("")
  }

  useEffect(() => {
    if (!currentTitle && input && message) setCurrentTitle(input)
    if (currentTitle && input && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        { title: currentTitle, role: "user", content: input },
        { title: currentTitle, role: message.role, content: message.content },
      ])
    }
  }, [message, currentTitle])

  console.log(previousChats)

  const currentChat = previousChats.filter(
    (prevChat, index) => prevChat.title === currentTitle
  )
  const allTitles = previousChats.map((prevChat) => prevChat.title)
  const uniqueTitles = Array.from(new Set(allTitles))

  console.log(uniqueTitles)

  return (
    <div className="w-[100vw] h-[100vh] bg-[#343541] flex">
      <section
        className={`side-bar ${
          sidebarOpened ? "w-[350px] p-2" : "w-0 p-0"
        } h-full bg-black relative text-white flex flex-col`}
      >
        <div
          className={`top-part ${
            sidebarOpened ? "p-3" : "hidden p-0"
          } flex items-center justify-between`}
        >
          <div className="flex items-center justify-center">
            <i className="fa-brands fa-react text-3xl mr-1"></i>
            <h1 className="ml-1 text-xl font-bold">New Chat</h1>
          </div>
          <div
            onClick={createNewChat}
            className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          >
            <i className="fa-regular fa-square-plus text-3xl"></i>
          </div>
        </div>

        <ul
          className={`w-full max-h-full overflow-auto flex flex-col mt-4 ${
            sidebarOpened ? "" : "hidden"
          }`}
        >
          {uniqueTitles?.map((title, index) => (
            <li
              key={index}
              onClick={() => changeChat(title)}
              className="w-full hover:bg-[#656570] duration-300 p-3 mb-1 last:mb-0 rounded-md cursor-pointer"
            >
              {title}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className="absolute right-[-20px] top-[50%] cursor-pointer"
        >
          <i
            className={`fa-solid fa-angle-${
              sidebarOpened ? "left" : "right"
            } text-lg text-[#ececf1] opacity-50 hover:opacity-100 duration-300`}
          ></i>
        </div>
      </section>

      <section
        className={`chat-div flex flex-col h-full ${
          sidebarOpened ? "w-[calc(100%-350px)]" : "w-full"
        }`}
      >
        <div className="w-full h-[80%] flex items-center justify-center p-3 text-white">
          {!currentTitle && (
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-react text-4xl mb-2"></i>
              <h1 className="text-2xl font-bold">How can I help you today ?</h1>
            </div>
          )}
          <ul className="feed">
            {currentChat?.map((chatMessage, index) => (
              <li key={index}>
                <p>{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[20%] flex items-center justify-center p-3 border-t-2">
          <div className="w-[50%] flex items-center border-2 border-[#ececf1] border-opacity-50 px-3 py-3 rounded-md">
            <input
              type="text"
              value={input}
              placeholder="Message ChatGPT"
              className="w-full px-3 py-2 bg-transparent outline-none text-white"
              onChange={(e) => setInput(e.target.value)}
            />
            <div
              onClick={getMessage}
              className="bg-[#ececf1] px-3 py-2 rounded-md cursor-pointer opacity-50 hover:opacity-100 duration-300"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
