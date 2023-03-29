import React, { useState } from "react";
import { Fragment } from "react";

import {
  BsInfo,
  BsFillLightbulbFill,
  BsFillChatRightTextFill,
  BsChevronDown,
  BsPlus,
  BsLink,
  BsPencil,
} from "react-icons/bs";
import TechnicalProject from "../TechnicalProject";
import ThreadBuild from "../ThreadBuild";
import StructurePointer from "./StructurePointer";
import SaModel from "../SaModel";

const category = ["category", "remak", "item"];

const Process = ["Question", "analogy", "sercasm"];
const Card = () => {
  const [categorysOpen, SetCategorysOpen] = useState(false);
  const [processOpen, SetProcessOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4">
      {/* card 1 */}
      <TechnicalProject />

      {/* card 2 */}
      <ThreadBuild />
      {/* card 3  */}
      <StructurePointer />
      {/* card 4 */}
      <SaModel />
    </div>
  );
};

export default Card;
