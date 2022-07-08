import React from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCircleInfo, faHouse, faUserGroup, faChartColumn, faFileLines, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useRouter} from 'next/router'


const MobileSide = () => {

    const router = useRouter();

  return (
    <>
      {false ? (
        <div className="MobileSideContainer">
          <ul>
            <li id={router.pathname == "/login" ? "active" : ""}>
              <Link href="/login">
                <a>
                  <FontAwesomeIcon icon={faArrowRightToBracket} size="lg" />
                </a>
              </Link>
            </li>
            <span id="LoginSpan">Log in</span>

            <li id={router.pathname == "/documentation" ? "active" : ""}>
              <Link href="/documentation">
                <a>
                  <FontAwesomeIcon icon={faCircleInfo} size="lg" />
                </a>
              </Link>
            </li>
            <span id="HelpSpan">Help</span>
          </ul>
        </div>
      ) : (
        <div className="MobileSideContainerAuth">
            <ul>
            <li id={router.pathname == "/dashboard" ? "active" : ""}>
              <Link href="/dashboard">
                <a>
                  <FontAwesomeIcon icon={faHouse} size="lg" />
                </a>
              </Link>
            </li>
           

            <li id={router.pathname == "/patients" ? "active" : ""}>
              <Link href="/patients">
                <a>
                  <FontAwesomeIcon icon={faUserGroup} size="lg" />
                </a>
              </Link>
            </li>
           

            <li id={router.pathname == "/statistics" ? "active" : ""}>
              <Link href="/statistics">
                <a>
                  <FontAwesomeIcon icon={faChartColumn} size="lg" />
                </a>
              </Link>
            </li>
            

            <li id={router.pathname == "/reports" ? "active" : ""}>
              <Link href="/reports">
                <a>
                  <FontAwesomeIcon icon={faFileLines} size="lg" />
                </a>
              </Link>
            </li>
            

            <li id={router.pathname == "/" ? "active" : ""}>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </a>
              </Link>
            </li>
           
          </ul>


        </div>
      )}
    </>
  );
};

export default MobileSide;
