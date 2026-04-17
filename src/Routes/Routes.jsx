import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
 {
     path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            element: <Homepage/>
        },
        {
            path: "/timeline",
            element:<Timeline/>,
        },
        {
            path: "/stats",
            element: <Stats/>,
        },
        {
            path: "/friendDetails/:id",
            element: <FriendDetails/>,
            loader: () => fetch("/friendsData.json"),
        }
    ]
 }
]);