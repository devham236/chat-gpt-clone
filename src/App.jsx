import React from "react"

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#343541]">
      <section className="side-bar w-[20%] h-full bg-black relative">
        <div className="top-part">
          <div>
            {/*OpenAI-Icon*/}
            {/*Title*/}
          </div>
          {/*New-chat-Icon*/}
        </div>
        <ul></ul>
        <div className="absolute right-[-20px] top-[50%] cursor-pointer">
          <i className="fa-solid fa-angle-right text-lg text-[#8e8ea0]"></i>
        </div>
      </section>
    </div>
  )
}

export default App
