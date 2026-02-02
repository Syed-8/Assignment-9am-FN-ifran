import React from 'react'

function DashBoard({ Header, Footer, Sidebar, Content }) {
  return (
    <div>
      <header>
        <h1>My DashBoard:{Header}</h1>
      </header>

      <aside>
        <ul>
          <li> Home</li>
          <li>Profile</li>
          <li>Settings</li>
          This is sideBar:{Sidebar}
        </ul>
       
        </aside>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem dolores earum illo ducimus deleniti blanditiis assumenda deserunt, 
        totam, aut adipisci nisi quidem molestias quo dicta ab explicabo esse? Aspernatur, doloremque? :{Content}</p>

  <footer>
        <h3> copyright 2024@{Footer} </h3>
      </footer>

    </div>
  )
}

export default DashBoard
