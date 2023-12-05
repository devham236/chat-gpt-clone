import React, { useState } from "react"

const App = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)
  return (
    <div className="w-[100vw] h-[100vh] bg-[#343541]">
      <section
        className={`side-bar ${
          sidebarOpened ? "w-[20%]" : "w-0"
        } h-full bg-black relative`}
      >
        <div className="top-part">
          <div>
            {/*OpenAI-Icon*/}
            {/*Title*/}
          </div>
          {/*New-chat-Icon*/}
        </div>
        <ul></ul>
        <div
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className="absolute right-[-20px] top-[50%] cursor-pointer"
        >
          <i
            className={`fa-solid fa-angle-${
              sidebarOpened ? "left" : "right"
            } text-lg text-[#8e8ea0]`}
          ></i>
        </div>
      </section>
    </div>
  )
}

export default App
