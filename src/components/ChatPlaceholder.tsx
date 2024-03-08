import { headers } from "next/headers";
import IconSunTwentyFour from "./icons/IconSunTwentyFour";
import IconGithub from "./icons/IconGithub";
import IconLinkedin from "./icons/IconLinkedin";

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="text-4xl font-bold text-center my-8">CHAT OPENAI</h3>
      <div className="flex flex-col justify-center md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSunTwentyFour width={24} height={24} className="mr-3" />
            Seja bem vindo ao projeto!
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3 space-y-2">
            <div>Desenvolvido por <b>Leandro Silva</b></div>
            <div>Dev Full Stack</div>
          </div>
          <div className="flex justify-center bg-white/5 rounded text-sm text-white mb-3 p-3">
            <IconGithub width={24} height={24} />
            <a
              href="https://www.github.com/leandrochs"
              className="underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex justify-center bg-white/5 rounded text-sm text-white mb-3 p-3 pr-1">
            <IconLinkedin width={24} height={24}/>
            <a
              href="https://www.linkedin.com/in/leandrosi/"
              className="underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
