import { AiOutlineAppstore,AiFillHdd, AiFillContainer, AiOutlineUserSwitch} from "react-icons/ai";
export const Menus = [


    {title: "Dashboard", icon: <AiOutlineAppstore/>, url:"Dashboard", roles: "User-Admin" },
    {title: "Quản lý chương trình", icon: <AiFillHdd/>, url: "ProcessManager", roles: "Admin"},
    {title: "Quản lý môn học", icon: <AiFillContainer/>, url:"SubjectManager", roles: "User-Admin"},
    {title: "Quản lý giảng viên", icon: <AiOutlineUserSwitch/>, url:"TeacherManager", roles: "Admin"},
    
]