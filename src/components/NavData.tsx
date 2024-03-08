import { AiOutlineControl, AiOutlineFileDone, AiOutlineFileProtect, AiOutlineFileSearch } from "react-icons/ai";
import { BsFileMedical } from "react-icons/bs";
import { FaUserCog, FaUserInjured, FaUserMd } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";

export const menuItems = [
    {
        label: "Dashboard",
        icon: <MdOutlineAnalytics />,
        path: "/"
    },
    {
        label: "Patients",
        icon: <FaUserInjured />,
        path: "/pacientes"
    },
    {
        label: "Medics",
        icon: <FaUserMd />,
        path: "/medicos"
    },
    {
        label: "Exams",
        icon: <AiOutlineFileDone />,
        path: "/examenes"
    },
    {
        label: "Analysis",
        icon: <AiOutlineFileSearch />,
        path: "/analisis"
    },
    {
        label: "Take Exams",
        icon: <BsFileMedical />,
        path: "/realizar-examen"
    },
    {
        label: "Results",
        icon: <AiOutlineFileProtect />,
        path: "/resultado-examen"
    },
    {
        label: "Settings",
        icon: <FiSettings />,
        path: "/configuraciones",
        spacing: true,
        submenu: true,
        submenuItems: [
            {
                label: "Users",
                icon: <FaUserCog />,
                path: "/configuraciones/usuarios"
            },
            {
                label: "Roles",
                icon: <AiOutlineControl/>,
                path: "/configuraciones/roles"
            }
        ]
    }
]