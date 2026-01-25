//Ícones.

import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";
import { TechnologyFieldsProps } from "../types";



export const  TechnologyFields: TechnologyFieldsProps[] = [
    {
        text: "HTML" ,
        icon: FaHtml5 
    },
    {
        text: "CSS"  ,
        icon:FaCss3Alt 
    },
    {
        text: "JAVASCRIPT" ,
        icon:TbBrandJavascript 
    },
    {
        text: "REACT" ,
        icon:FaReact 
    },
    {
        text: "NEXT.JS" ,
        icon:TbBrandNextjs 
    },
    {
        text: "TAILWIND"  ,
        icon:TbBrandTypescript 
    },
    {
        text: "TYPESCRIPT" ,
        icon:TbBrandTailwind 
    },
    {
        text: "MONGODB" ,
        icon:TbBrandMongodb 
    },
    {
        text: "NODEJS",
        icon:FaNodeJs 
    }
]