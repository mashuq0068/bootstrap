
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import {  FaUserDoctor, FaUserPen, FaChrome } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineEventAvailable,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";

const Sidebar = () => {
  // toggle state
  const [open, setOpen] = useState(false);

  return (
    <div className="position-relative">
      {/* Toggle Button for small device */}
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
          className="custom-sidebar-width  text-white p-4 bg-main d-lg-block"
          style={{ minHeight: "100vh" }}
        >
          {/* Toggle cross Button for small device */}
        <button
        style={{right:2}}
          className="d-lg-none   position-absolute  top-0 bg-main fs-3 text-white border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          
          aria-expanded={open}
        >
          <RxCross1 className="fw-bold"/>
        </button>
        {/* dashboard */}
          <div>
            <h4 className="d-flex gap-3 mt-3 mt-lg-4 mb-4">
              <LuLayoutDashboard /> Dashboard
            </h4>
         {/* doctors */}
          </div>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex ">
              <FaUserDoctor className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Doctors</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu" >
                  <Dropdown.Item className=""  href="#/Item1-1">Doctor Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3"  href="#/Item1-2">Commission Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3"  href="#/Item1-3">Patient Referral Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3"  href="#/Item1-3">Doctor Ledge</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* patient */}
            <div className="d-flex ">
              <FaParking  className="mt-2"  />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Patient</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Patient Registration</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Appointment Scheduling</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Patient History</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Payment Tracking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* lab test */}
            <div className="d-flex ">
              <MdOutlineEventAvailable className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">
                  Lab Test
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Test Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Invoice Generation</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Test Result Input</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Report Generation</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* accounts */}
            <div className="d-flex ">
              <MdOutlineSupervisorAccount className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Accounts</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Income Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Expense Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Due Collection</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Doctor Commission Payment</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Ledger Management</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* report */}
            <div className="d-flex ">
              <TbReport className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Report</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Profit/Loss Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Sales Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Expense Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Commission Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Income Statement</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* hr */}
            <div className="d-flex ">
              <FaChrome className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">HR</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Employee Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Attendance Tracking</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Payroll Management</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Performance Tracking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* user role */}
            <div className="d-flex ">
              <FaUserPen className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">User Role</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">Item1</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">Item2</Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">Item3</Dropdown.Item>
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
