import { FaRegCopyright } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const GitHubFooter = () => {
  return (
    <div className="px-3 py-3 md:py-5 md:px-10 flex flex-row justify-between items-center">
      <div className="git-username flex flex-row items-center gap-1 text-xs md:text-sm text-slate-400 font-semibold">
        <p>
          <FaRegCopyright fontSize={13} />
        </p>
        <p>
          2024 TaskCraft :{" "}
          <a href="https://github.com/jatinrathore" target="_blank">
            jatinrathore
          </a>
        </p>
      </div>
      <div className="git-logo">
        <a href="https://github.com/jatinrathore/taskcraft" target="_blank">
          <FaGithubSquare fontSize={25} />
        </a>
      </div>
    </div>
  );
};

export default GitHubFooter;
