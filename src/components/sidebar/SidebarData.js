import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { FaRoute } from 'react-icons/fa';
import { TiWarningOutline } from 'react-icons/ti';
import { MdOutlineDashboard } from 'react-icons/md';
import {IoNewspaperOutline} from 'react-icons/io5';
import {MdMyLocation} from 'react-icons/md';
import {VscBell} from 'react-icons/vsc';
import {FaRegUser} from 'react-icons/fa';
import {HiOutlineUsers} from 'react-icons/hi';
import {BiStats} from "react-icons/bi";

export const SidebarData=[
    {
        title:'Overview',
        path:'/',
        icon:<MdOutlineDashboard/>,
        cName:'nav-over'
    },
    {
        title:'Track',
        cName:'nav-track'
    },
    {
        title:'Vehicle',
        path:'/vehicle',
        icon:<BsTruck/>,
        cName:'nav-text'
    },
    {
        title:'Trails',
        path:'/trails',
        icon:<FaRoute/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoNewspaperOutline/>,
        cName:'nav-text'
    },
    {
        title:'Panic',
        path:'/panic',
        icon:<TiWarningOutline/>,
        cName:'nav-text'
    },
    {
        title:'Manage',
        cName:'nav-manage'
    },
    {
        title:'Groups/Assests',
        path:'/groups',
        icon:<HiOutlineUsers/>,
        cName:'nav-text'
    },
    {
        title:'Route',
        path:'/enroute',
        icon:<BiStats/>,
        cName:'nav-text'
    },
    {
        title:'Geofence',
        cName:'nav-text',
        icon:<MdMyLocation/>,
    },
    {
        title:'Alarm',
        cName:'nav-text',
        icon:<VscBell/>
    },
    {
        title:'Users/Roles',
        cName:'nav-text',
        icon:<FaRegUser/>
    },

];
 