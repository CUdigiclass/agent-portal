import React from 'react';

import * as IoIcons from 'react-icons/io';


import {RiDashboardFill} from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    // icon: <ImProfile />
   icon: <RiDashboardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Agent',
    path: '/create-agent',
    icon: <MdSupportAgent />,
    cName: 'nav-text'
  },
  {
    title: 'Announcement',
    path: '/announcement',
    icon: <TfiAnnouncement />,
    cName: 'nav-text'
  },
 
 
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <VscFeedback />,
    cName: 'nav-text'
  }
];
