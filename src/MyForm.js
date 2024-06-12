import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function MyForm() {
  //name
  const [Name, setName] = useState("");
  //bracelet id
  const [Bracelet_Id, setBracelet_Id] = useState("");
  //color
  const [Color, setColor] = useState("");
  //pin
  const [Pin, setPin] = useState("");
  //start hour
  const [Start_Hour, setStart_Hour] = useState("");
  //escape room 1
  const [Escape_Room1, setEscape_Room1] = useState("");
  const [Cb_Er1, setCb_Er1] = useState("");
  const [H_Er1, setH_Er1] = useState("");
  //escape room 2
  const [Escape_Room2, setEscape_Room2] = useState("");
  const [Cb_Er2, setCb_Er2] = useState("");
  const [H_Er2, setH_Er2] = useState("");
  //escape room 3
  const [Escape_Room3, setEscape_Room3] = useState("");
  const [Cb_Er3, setCb_Er3] = useState("");
  const [H_Er3, setH_Er3] = useState("");
  //escape room 4
  const [Escape_Room4, setEscape_Room4] = useState("");
  const [Cb_Er4, setCb_Er4] = useState("");
  const [H_Er4, setH_Er4] = useState("");
  //escape room 5
  const [Escape_Room5, setEscape_Room5] = useState("");
  const [Cb_Er5, setCb_Er5] = useState("");
  const [H_Er5, setH_Er5] = useState("");
  //laser room 1
  const [Laser_Room1, setLaser_Room1] = useState("");
  const [Cb_Lr1, setCb_Lr1] = useState("");
  const [H_Lr1, setH_Lr1] = useState("");
  //laser room 2
  const [Laser_Room2, setLaser_Room2] = useState("");
  const [Cb_Lr2, setCb_Lr2] = useState("");
  const [H_Lr2, setH_Lr2] = useState("");
  //conference room
  const [Conference_Room, setConference_Room] = useState("");
  const [Cb_ConfR, setCb_ConfR] = useState("");
  const [H_ConfR, setH_ConfR] = useState("");
  //console room
  const [Console_Room, setConsole_Room] = useState("");
  const [Cb_ConsR, setCb_ConsR] = useState("");
  const [H_ConsR, setH_ConsR] = useState("");
  //event room
  const [Event_Room, setEvent_Room] = useState("");
  const [Cb_EventR, setCb_EventR] = useState("");
  const [H_EventR, setH_EventR] = useState("");
  //axe throwing
  const [Axe_Throwing, setAxe_Throwing] = useState("");
  const [Cb_At, setCb_At] = useState("");
  const [H_At, setH_At] = useState("");
  //game on
  const [Game_On, setGame_On] = useState("");
  const [Cb_Go, setCb_Go] = useState("");
  const [H_Go, setH_Go] = useState("");
  //is super
  const [Cb_Super, setCb_Super] = useState("");
  //is admin
  const [Cb_Admin, setCb_Admin] = useState("");
  //is Cleaning
  const [Cb_Cleaning, setCb_Cleaning] = useState("");

  //Name
  const NameChange = (e) => {
    setName(e.target.value);
  };
  //bracelet id
  const Bracelet_IdChange = (e) => {
    setBracelet_Id(e.target.value);
  };
  //color
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  //pin
  const PinChange = (e) => {
    setPin(e.target.value);
  };
  //start hour
  const handleStart_HourChange = (e) => {
    setStart_Hour(e.target.value);
  };
  //escape room 1
  const handleEscape_Room1Change = (e) => {
    setEscape_Room1(e.target.value);
  };
  const handleCb_Er1Change = (e) => {
    setCb_Er1(e.target.checked);
  };
  const handleH_Er1Change = (e) => {
    setH_Er1(e.target.value);
  };
  //escape room 2
  const handleEscape_Room2Change = (e) => {
    setEscape_Room2(e.target.value);
  };
  const handleCb_Er2Change = (e) => {
    setCb_Er2(e.target.checked);
  };
  const handleH_Er2Change = (e) => {
    setH_Er2(e.target.value);
  };
  //escape room 3
  const handleEscape_Room3Change = (e) => {
    setEscape_Room3(e.target.value);
  };
  const handleCb_Er3Change = (e) => {
    setCb_Er3(e.target.checked);
  };
  const handleH_Er3Change = (e) => {
    setH_Er3(e.target.value);
  };
  //escape room 4
  const handleEscape_Room4Change = (e) => {
    setEscape_Room4(e.target.value);
  };
  const handleCb_Er4Change = (e) => {
    setCb_Er4(e.target.checked);
  };
  const handleH_Er4Change = (e) => {
    setH_Er4(e.target.value);
  };
  //escape room 5
  const handleEscape_Room5Change = (e) => {
    setEscape_Room5(e.target.value);
  };
  const handleCb_Er5Change = (e) => {
    setCb_Er5(e.target.checked);
  };
  const handleH_Er5Change = (e) => {
    setH_Er5(e.target.value);
  };
  //laser room 1
  const handleLaser_Room1Change = (e) => {
    setLaser_Room1(e.target.value);
  };
  const handleCb_Lr1Change = (e) => {
    setCb_Lr1(e.target.checked);
  };
  const handleH_Lr1Change = (e) => {
    setH_Lr1(e.target.value);
  };
  //laser room 2
  const handleLaser_Room2Change = (e) => {
    setLaser_Room2(e.target.value);
  };
  const handleCb_Lr2Change = (e) => {
    setCb_Lr2(e.target.checked);
  };
  const handleH_Lr2Change = (e) => {
    setH_Lr2(e.target.value);
  };
  //conference room
  const handleConference_RoomChange = (e) => {
    setConference_Room(e.target.value);
  };
  const handleCb_ConfRChange = (e) => {
    setCb_ConfR(e.target.checked);
  };
  const handleH_ConfRChange = (e) => {
    setH_ConfR(e.target.value);
  };
  //console room
  const handleConsole_RoomChange = (e) => {
    setConsole_Room(e.target.value);
  };
  const handleCb_ConsRChange = (e) => {
    setCb_ConsR(e.target.checked);
  };
  const handleH_ConsRChange = (e) => {
    setH_ConsR(e.target.value);
  };
  //event room
  const handleEvent_RoomChange = (e) => {
    setEvent_Room(e.target.value);
  };
  const handleCb_EventRChange = (e) => {
    setCb_EventR(e.target.checked);
  };
  const handleH_EventRChange = (e) => {
    setH_EventR(e.target.value);
  };
  //axe throwing
  const handleAxe_ThrowingChange = (e) => {
    setAxe_Throwing(e.target.value);
  };
  const handleCb_AtChange = (e) => {
    setCb_At(e.target.checked);
  };
  const handleH_AtChange = (e) => {
    setH_At(e.target.value);
  };
  //game on
  const handleGame_OnChange = (e) => {
    setGame_On(e.target.value);
  };
  const handleCb_GoChange = (e) => {
    setCb_Go(e.target.checked);
  };
  const handleH_GoChange = (e) => {
    setH_Go(e.target.value);
  };
  //is super
  const handleCb_SuperChange = (e) => {
    setCb_Super(e.target.checked);
  };
  //is admin
  const handleCb_AdminChange = (e) => {
    setCb_Admin(e.target.checked);
  };
  //is Cleaning
  const handleCb_CleaningChange = (e) => {
    setCb_Cleaning(e.target.checked);
  };

  const handleSubmit = (e) => {
    console.log(Start_Hour !== "" ? Start_Hour : "taaat");
    var json = {
      name: Name != null ? Name : "",
      cardNo: Bracelet_Id,
      color: Color,
      pin: Pin,
      startHour: parseInt(Start_Hour !== "" ? Start_Hour : "9"),
      numberOfHours: 0,
      Escape1: {
        access: Cb_Er1 ? 1 : 0,
        startHour: parseInt(Escape_Room1 !== "" ? Escape_Room1 : "9"),
        numberOfHours: parseInt(H_Er1 !== "" ? H_Er1 : "1"),
      },
      Escape2: {
        access: Cb_Er2 ? 1 : 0,
        startHour: parseInt(Escape_Room2 !== "" ? Escape_Room2 : "9"),
        numberOfHours: parseInt(H_Er2 !== "" ? H_Er2 : "1"),
      },
      Escape3: {
        access: Cb_Er3 ? 1 : 0,
        startHour: parseInt(Escape_Room3 !== "" ? Escape_Room3 : "9"),
        numberOfHours: parseInt(H_Er3 !== "" ? H_Er3 : "1"),
      },
      Escape4: {
        access: Cb_Er4 ? 1 : 0,
        startHour: parseInt(Escape_Room4 !== "" ? Escape_Room4 : "9"),
        numberOfHours: parseInt(H_Er4 !== "" ? H_Er4 : "1"),
      },
      Escape5: {
        access: Cb_Er5 ? 1 : 0,
        startHour: parseInt(Escape_Room5 !== "" ? Escape_Room5 : "9"),
        numberOfHours: parseInt(H_Er5 !== "" ? H_Er5 : "1"),
      },
      Laser1: {
        access: Cb_Lr1 ? 1 : 0,
        startHour: parseInt(Laser_Room1 !== "" ? Laser_Room1 : "9"),
        numberOfHours: parseInt(H_Lr1 !== "" ? H_Lr1 : "1"),
      },
      Laser2: {
        access: Cb_Lr2 ? 1 : 0,
        startHour: parseInt(Laser_Room2 !== "" ? Laser_Room2 : "9"),
        numberOfHours: parseInt(H_Lr2 !== "" ? H_Lr2 : "1"),
      },
      Conference: {
        access: Cb_ConfR ? 1 : 0,
        startHour: parseInt(Conference_Room !== "" ? Conference_Room : "9"),
        numberOfHours: parseInt(H_ConfR !== "" ? H_ConfR : "1"),
      },
      Console: {
        access: Cb_ConsR ? 1 : 0,
        startHour: parseInt(Console_Room !== "" ? Console_Room : "9"),
        numberOfHours: parseInt(H_ConsR !== "" ? H_ConsR : "1"),
      },
      EventRoom: {
        access: Cb_EventR ? 1 : 0,
        startHour: parseInt(Event_Room !== "" ? Event_Room : "9"),
        numberOfHours: parseInt(H_EventR !== "" ? H_EventR : "1"),
      },
      AxeThrowing: {
        access: Cb_At ? 1 : 0,
        startHour: parseInt(Axe_Throwing !== "" ? Axe_Throwing : "9"),
        numberOfHours: parseInt(H_At !== "" ? H_At : "1"),
      },
      GameOn: {
        access: Cb_Go ? 1 : 0,
        startHour: parseInt(Game_On !== "" ? Game_On : "9"),
        numberOfHours: parseInt(H_Go !== "" ? H_Go : "1"),
      },
      isSuper: Cb_Super !== "" ? Cb_Super : false,
      isAdmin: Cb_Admin !== "" ? Cb_Admin : false,
      isCleaning: Cb_Cleaning !== "" ? Cb_Cleaning : false,
    };
    AddUser(json);
    console.log(json);
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <table striped bordered hover>
          <tbody>
            <tr>
              <td>
                <label class="label">Name:</label>
              </td>
              <td colSpan={2}>
                {" "}
                <input
                  class="text-field"
                  type="text"
                  id="Name"
                  name="Name"
                  value={Name}
                  onChange={NameChange}
                  className="FormControl"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" htmlFor="Bracelet_Id">
                  Bracelet ID:
                </label>
              </td>
              <td colSpan={2}>
                <input
                  class="text-field"
                  type="text"
                  id="Bracelet_Id"
                  name="Bracelet_Id"
                  value={Bracelet_Id}
                  onChange={Bracelet_IdChange}
                  className="FormControl"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" htmlFor="Color">
                  Bracelet Color:
                </label>
              </td>
              <td colSpan={2}>
                <select
                  id="Color"
                  name="Color"
                  value={Color}
                  onChange={handleColorChange}
                  className="custom-dropdown" // Add a custom class
                >
                  <option value="">--Please choose a Color --</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Orange">Orange</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" htmlFor="Pin">
                  Pin:
                </label>
              </td>
              <td colSpan={2}>
                <input
                  class="text-field"
                  type="text"
                  id="Pin"
                  name="Pin"
                  value={Pin}
                  onChange={PinChange}
                  className="FormControl"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" htmlFor="Start_Hour">
                  Start Time :
                </label>
              </td>
              <td colSpan={2}>
                <select
                  id="Start_Hour"
                  name="Start_Hour"
                  value={Start_Hour}
                  onChange={handleStart_HourChange}
                  className="custom-dropdown"
                >
                  <option value="">--Please choose a Start Time : --</option>
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label class="label">Games:</label>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Er1"
                  name="Cb_Er1"
                  value={Cb_Er1}
                  onChange={handleCb_Er1Change}
                />
                <label class="label" htmlFor="Cb_Er1">
                  Prison Break
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Escape_Room1">
                  Start Time :
                </label>
                <select
                  id="Escape_Room1"
                  name="Escape_Room1"
                  value={Escape_Room1}
                  onChange={handleEscape_Room1Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Er1">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Er1"
                  name="H_Er1"
                  value={H_Er1}
                  onChange={handleH_Er1Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Er2"
                  name="Cb_Er2"
                  value={Cb_Er2}
                  onChange={handleCb_Er2Change}
                />
                <label class="label" htmlFor="Cb_Er2">
                  Escape Room2
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Escape_Room2">
                  Start Time :
                </label>
                <select
                  id="Escape_Room2"
                  name="Escape_Room2"
                  value={Escape_Room2}
                  onChange={handleEscape_Room2Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Er1">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Er2"
                  name="H_Er2"
                  value={H_Er2}
                  onChange={handleH_Er2Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Er3"
                  name="Cb_Er3"
                  value={Cb_Er3}
                  onChange={handleCb_Er3Change}
                />
                <label class="label" htmlFor="Cb_Er3">
                  Sabotage
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Escape_Room3">
                  Start Time :
                </label>
                <select
                  id="Escape_Room3"
                  name="Escape_Room3"
                  value={Escape_Room3}
                  onChange={handleEscape_Room3Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Er1">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Er3"
                  name="H_Er3"
                  value={H_Er3}
                  onChange={handleH_Er3Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Er4"
                  name="Cb_Er4"
                  value={Cb_Er4}
                  onChange={handleCb_Er4Change}
                />
                <label class="label" htmlFor="Cb_Er4">
                  Escape Room4
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Escape_Room4">
                  Start Time :
                </label>
                <select
                  id="Escape_Room4"
                  name="Escape_Room4"
                  value={Escape_Room4}
                  onChange={handleEscape_Room4Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Er4">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Er4"
                  name="H_Er4"
                  value={H_Er4}
                  onChange={handleH_Er4Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Er5"
                  name="Cb_Er5"
                  value={Cb_Er5}
                  onChange={handleCb_Er5Change}
                />
                <label class="label" htmlFor="Cb_Er5">
                  Escape Room5
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Escape_Room5">
                  Start Time :
                </label>
                <select
                  id="Escape_Room5"
                  name="Escape_Room5"
                  value={Escape_Room5}
                  onChange={handleEscape_Room5Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Er5">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Er5"
                  name="H_Er5"
                  value={H_Er5}
                  onChange={handleH_Er5Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Lr1"
                  name="Cb_Lr1"
                  value={Cb_Lr1}
                  onChange={handleCb_Lr1Change}
                />
                <label class="label" htmlFor="Cb_Lr1">
                  Floor is Lava
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Laser_Room1">
                  Start Time :
                </label>
                <select
                  id="Laser_Room1"
                  name="Laser_Room1"
                  value={Laser_Room1}
                  onChange={handleLaser_Room1Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Lr1">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Lr1"
                  name="H_Lr1"
                  value={H_Lr1}
                  onChange={handleH_Lr1Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Lr2"
                  name="Cb_Lr2"
                  value={Cb_Lr2}
                  onChange={handleCb_Lr2Change}
                />
                <label class="label" htmlFor="Cb_Lr2">
                  Interactivity 2
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Laser_Room2">
                  Start Time :
                </label>
                <select
                  id="Laser_Room2"
                  name="Laser_Room2"
                  value={Laser_Room2}
                  onChange={handleLaser_Room2Change}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Lr2">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Lr2"
                  name="H_Lr2"
                  value={H_Lr2}
                  onChange={handleH_Lr2Change}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_ConfR"
                  name="Cb_ConfR"
                  value={Cb_ConfR}
                  onChange={handleCb_ConfRChange}
                />
                <label class="label" htmlFor="Cb_ConfR">
                  Conference Room
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Conference_Room">
                  Start Time :
                </label>
                <select
                  id="Conference_Room"
                  name="Conference_Room"
                  value={Conference_Room}
                  onChange={handleConference_RoomChange}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_ConfR">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_ConfR"
                  name="H_ConfR"
                  value={H_ConfR}
                  onChange={handleH_ConfRChange}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_ConsR"
                  name="Cb_ConsR"
                  value={Cb_ConsR}
                  onChange={handleCb_ConsRChange}
                />
                <label class="label" htmlFor="Cb_ConsR">
                  Console Room
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Console_Room">
                  Start Time :
                </label>
                <select
                  id="Console_Room"
                  name="Console_Room"
                  value={Console_Room}
                  onChange={handleConsole_RoomChange}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_ConsR">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_ConsR"
                  name="H_ConsR"
                  value={H_ConsR}
                  onChange={handleH_ConsRChange}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_EventR"
                  name="Cb_EventR"
                  value={Cb_EventR}
                  onChange={handleCb_EventRChange}
                />
                <label class="label" htmlFor="Cb_EventR">
                  Event Room
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Event_Room">
                  Start Time :
                </label>
                <select
                  id="Event_Room"
                  name="Event_Room"
                  value={Event_Room}
                  onChange={handleEvent_RoomChange}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_EventR">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_EventR"
                  name="H_EventR"
                  value={H_EventR}
                  onChange={handleH_EventRChange}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_At"
                  name="Cb_At"
                  value={Cb_At}
                  onChange={handleCb_AtChange}
                />
                <label class="label" htmlFor="Cb_At">
                  Axe Throwing
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Axe_Throwing">
                  Start Time :
                </label>
                <select
                  id="Axe_Throwing"
                  name="Axe_Throwing"
                  value={Axe_Throwing}
                  onChange={handleAxe_ThrowingChange}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_At">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_At"
                  name="H_At"
                  value={H_At}
                  onChange={handleH_AtChange}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Go"
                  name="Cb_Go"
                  value={Cb_Go}
                  onChange={handleCb_GoChange}
                />
                <label class="label" htmlFor="Cb_Go">
                  Game On
                </label>
              </td>
              <td>
                <label class="label" htmlFor="Game_On">
                  Start Time :
                </label>
                <select
                  id="Game_On"
                  name="Game_On"
                  value={Game_On}
                  onChange={handleGame_OnChange}
                  className="custom-dropdown"
                >
                  <option value="80">8:00</option>
                  <option value="85">8:30</option>
                  <option value="90">9:00</option>
                  <option value="95">9:30</option>
                  <option value="100">10:00</option>
                  <option value="105">10:30</option>
                  <option value="110">11:00</option>
                  <option value="115">11:30</option>
                  <option value="120">12:00</option>
                  <option value="125">12:30</option>
                  <option value="130">13:00</option>
                  <option value="135">13:30</option>
                  <option value="140">14:00</option>
                  <option value="145">14:30</option>
                  <option value="150">15:00</option>
                  <option value="155">15:30</option>
                  <option value="160">16:00</option>
                  <option value="165">16:30</option>
                  <option value="170">17:00</option>
                  <option value="175">17:30</option>
                  <option value="180">18:00</option>
                  <option value="185">18:30</option>
                  <option value="190">19:00</option>
                  <option value="195">19:30</option>
                  <option value="200">20:00</option>
                  <option value="205">20:30</option>
                  <option value="210">21:00</option>
                  <option value="215">21:30</option>
                  <option value="220">22:00</option>
                  <option value="225">22:30</option>
                  <option value="230">23:00</option>
                  <option value="235">23:30</option>
                  <option value="0">00:00</option>
                  <option value="5">00:30</option>
                  <option value="10">01:00</option>
                </select>
              </td>
              <td>
                <label class="label" htmlFor="H_Go">
                  Count (per 30 minutes):
                </label>
                <select
                  id="H_Go"
                  name="H_Go"
                  value={H_Go}
                  onChange={handleH_GoChange}
                  className="custom-dropdown"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Super"
                  name="Cb_Super"
                  value={Cb_Super}
                  onChange={handleCb_SuperChange}
                />
                <label class="label" htmlFor="Cb_Super">
                  Super
                </label>
              </td>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Admin"
                  name="Cb_Admin"
                  value={Cb_Admin}
                  onChange={handleCb_AdminChange}
                />
                <label class="label" htmlFor="Cb_Admin">
                  Admin
                </label>
              </td>
              <td>
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  id="Cb_Cleaning"
                  name="Cb_Cleaning"
                  value={Cb_Cleaning}
                  onChange={handleCb_CleaningChange}
                />
                <label class="label" htmlFor="Cb_Cleaning">
                  Cleaning
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div>
                  <button class="submit" variant="contained" type="submit">
                    Submit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default MyForm;
async function AddUser(json) {
  return fetch("https://bursting-choice-snapper.ngrok-free.app/addNewUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  }).then((data) => {
    data.json();
    console.log(data);
  });
}
