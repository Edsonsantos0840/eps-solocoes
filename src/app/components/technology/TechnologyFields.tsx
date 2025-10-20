//Ícones.
import { ReactElement } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";

interface TechnologyFieldsProps{
    text: string,
    ico:  ReactElement
}

export const  TechnologyFields: TechnologyFieldsProps[] = [
    {
        text: "HTML" ,
        ico: <FaHtml5 className="text-7xl md:text-9xl lg:text-7xl"  />
    },
    {
        text: "CSS"  ,
        ico: <FaCss3Alt className="text-7xl md:text-9xl lg:text-7xl"  />
    },
    {
        text: "JAVASCRIPT" ,
        ico: <TbBrandJavascript className="text-7xl md:text-9xl lg:text-7xl"  />
    },
    {
        text: "REACT" ,
        ico: <FaReact className="text-7xl md:text-9xl lg:text-7xl"  />
    },
    {
        text: "NEXT.JS" ,
        ico: <TbBrandNextjs className="text-7xl md:text-9xl lg:text-7xl" />
    },
    {
        text: "TAILWIND"  ,
        ico: <TbBrandTypescript className="text-7xl md:text-9xl lg:text-7xl" />
    },
    {
        text: "TYPESCRIPT" ,
        ico: <TbBrandTailwind className="text-7xl md:text-9xl lg:text-7xl"  />
    },
    {
        text: "MONGODB" ,
        ico: <TbBrandMongodb className="text-7xl md:text-9xl lg:text-7xl" />
    },
    {
        text: "NODEJS",
        ico: <FaNodeJs className="text-7xl md:text-9xl lg:text-7xl" />
    }
]