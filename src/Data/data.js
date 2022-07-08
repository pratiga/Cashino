// Sidebar imports 
import {
    UilEstate,
    UilClipboardAlt,
    UilPackage,
    UilUsersAlt,
    UilChart,
   
    
} from "@iconscout/react-unicons";



// Sidebar Data 
export const SidebarData = [
    {
        path:"/",
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        path:"/agent",
        icon:UilClipboardAlt,
        heading:"Agent",
    },
    {
        path:"/customer",
        icon:UilUsersAlt,
        heading:"Customers",
    },
    {
        path:"/company",
        icon:UilPackage,
        heading:"Company",
    },
    {
        path:"/gametype",
        icon:UilPackage,
        heading:"GamesType",
    },
    {
        path:"/cashtrans",
        icon: UilChart,
        heading: 'CashTrans'
    },
    {
        path:"/playing",
        icon: UilChart,
        heading: 'Playing'
    },
    
    
];
