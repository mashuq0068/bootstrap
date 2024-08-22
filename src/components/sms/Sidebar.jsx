
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaSellcast, FaUserDoctor, FaUserPen, FaChrome } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineEventAvailable,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="position-relative">
      {/* Toggle Button */}
      {!open && (
        <button
          className="d-lg-none  mb-3 border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          aria-expanded={open}
        >
          <RiMenu3Fill className="fs-3" />
        </button>
      )}

      {/* Sidebar Content */}
      <Collapse in={open} className="position-relative" dimension="width">
      
        <div
          id="sidebar"
          className="custom-sidebar-width text-white p-4 bg-main d-lg-block"
          style={{ minHeight: "100vh" }}
        >
        <button
        style={{right:2}}
          className="d-lg-none   position-absolute  top-0 bg-main fs-3 text-white border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          
          aria-expanded={open}
        >
          <RxCross1 className="fw-bold"/>
        </button>
          <div>
            <h4 className="d-flex gap-3 mt-3 mt-lg-4 mb-4">
              <LuLayoutDashboard /> Dashboard
            </h4>
         
          </div>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex ">
              <FaUserDoctor className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Doctors</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu" >
                  <Dropdown.Item  href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item  href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item  href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <FaSellcast className="mt-2"  />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Sell menu</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <MdOutlineEventAvailable className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">
                  Lab Report
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <MdOutlineSupervisorAccount className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Accounts</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <TbReport className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Report</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <FaChrome className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">HR Menu</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex ">
              <FaUserPen className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">User Role</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Collapse>
     
    </div>
  );
};

export default Sidebar;
