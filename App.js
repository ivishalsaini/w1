import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <label class="navbar-brand" style={{ color: "off-white" ,fontStretch: "expanded"}} ><b><h2>Vidrona</h2></b></label>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </nav>


        <div style={{backgroundColor:"" ,border: "25px solid #FAEBD7", height: "100%" }}>
          <h1 style={{ textAlign: "center",paddingBottom: "20px",paddingTop: "20px",font:"verdana" }}><b><p>OPTIONS</p></b></h1>

          <div class="row " >
            <div class="col col-3 " id="1">
              <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><input type="image" alt="Clientinfo" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px", paddingLeft: "10px", height: "25vh", width: "25vh" }} src={"https://ciklopea.com/wp-content/uploads/2018/05/Customer-Experience-800x600.png"} width="60%" /></div>
              <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Client Info</b></p></div>
            </div>
            <div class="col col-3 " id="2">
              <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><input type="image" alt="Projects" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "20px", paddingLeft: "10px", height: "25vh", width: "25vh",marginleft: "50px" }} src={"http://globaliaconsultancy.com/wp-content/uploads/2019/02/PJ.jpg"} width="60%" /></div>
              <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Projects</b></p></div>
            </div>
            <div class="col col-3 " id="3">
              <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><img alt="Current Projects" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px", paddingLeft: "10px", height: "25vh", width: "25vh" }} src={"https://jonathanmjavier.files.wordpress.com/2018/06/ongoing-projects.gif?w=379"} width="60%" /></div>
              <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Current Projects</b></p></div>
            </div>
            <div class="col col-3 " id="4">
              <div  class="row" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><input type="image" alt="Asset Health" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px", paddingLeft: "10px", height: "25vh", width: "25vh" }} src={"https://cdn140.picsart.com/238915689015202.gif?to=min&r=640"} width="60%" /></div>
              <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Asset Health</b></p></div>
            </div>

            
              <div class="col col-3 " id="5">
                <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><img alt="Vegetative Health" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "50px",float: "left", paddingBottom: "10px", paddingLeft: "50px", height: "25vh", width: "25vh" }} src={"https://image.shutterstock.com/image-vector/green-tree-on-white-background-260nw-603174926.jpg"} width="80%" /></div>
                <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Vegetative Health</b></p></div>
              </div>
              <div class="col col-3 " id="6">
                <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><img alt="Analytics" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "20px", paddingLeft: "10px", height: "25vh", width: "25vh" }} src={"https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"} width="60%" /></div>
                <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Analytics</b></p></div>
              </div>
              <div class="col col-3 " id="7">
                <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><img alt="Maintenance" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px", paddingLeft: "10px", height: "25vh", width: "25vh" }} img src={"https://www.gerard-perrier.com/wp-content/uploads/maintenance-ht-bt.png"} width="60%" /></div>
                <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>Maintenance</b></p></div>
              </div>
              <div class="col col-3 " id="8">
                <div  class="row"style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><img alt="QA" style={{ border: "2px solid #979898", paddingTop: "10px", paddingRight: "70px", paddingBottom: "10px", paddingLeft: "65px", height: "25vh", width: "25vh" }} src={"https://image.flaticon.com/icons/svg/1271/1271736.svg"} width="60%" /></div>
                <div class="row" style={{ color: "#979898", fontSize: "30px", justifyContent: "center" }}><p><b>QA</b></p></div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default App;