
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaSellcast, FaUserDoctor, FaUserPen, FaChrome } from "react-icons/fa6";
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
          className="d-md-none position-absolute absolute-right mb-3 border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          aria-expanded={open}
        >
          <RiMenu3Fill className="fs-3" />
        </button>
      )}

      {/* Sidebar Content */}
      <Collapse in={open} dimension="width">
      
        <div
          id="sidebar"
          className="custom-sidebar-width text-white p-4 sidebar-bg d-md-block"
          style={{ minHeight: "100vh" }}
        >
        <button
          className="d-lg-none  d-flex ms-auto justify-content-end sidebar-bg fs-3 text-white border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          
          aria-expanded={open}
        >
          x
        </button>
          <div>
            <h4 className="d-flex gap-3 mt-lg-4 mb-4">
              <LuLayoutDashboard /> Dashboard
            </h4>
         
          </div>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center">
              <FaUserDoctor />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Doctors</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <FaSellcast />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Sell menu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <MdOutlineEventAvailable />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">
                  Lab Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <MdOutlineSupervisorAccount />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Accounts</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <TbReport />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Report</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <FaChrome />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">HR Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item href="#/Item1-3">Item3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <FaUserPen />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">User Role</Dropdown.Toggle>
                <Dropdown.Menu>
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
