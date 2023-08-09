import { useEffect, useState } from "react";
import { Repos } from "@/modules/github";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

interface Repo {
  id: number;
  name: string;
  html_url: URL;
  language: string;
}

export default function GitHub() {
  const [repolist, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    async function contibutionFetch() {
      const res = await Repos();
      const repos = res.map(
        (repo: {
          html_url: URL;
          id: number;
          name: string;
          language: string;
        }) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          language: repo.language,
        })
      );
      setRepoList(repos);
    }

    contibutionFetch();
  }, []);

  const imagesforlan: Record<string, string> = {
    JavaScript:
      "https://logospng.org/download/javascript/logo-javascript-icon-1024.png",
    CSS: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    HTML: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
    TypeScript:
      "https://miro.medium.com/v2/resize:fit:256/1*iA-WRbWcbYd3BFAzzFypWg.png",
    PHP: "https://www.php.net/images/meta-image.png",
  };

  return (
    <div
      id="github"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20"
    >
      <div className="flex border border-line w-32 justify-between items-center rounded-3xl px-4 py-1 mb-16">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          className="inline-block text-end octicon octicon-mark-github h-6 w-6"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <div>GitHub</div>
      </div>
      <div className="flex flex-col max-w-5xl">
        <h1 className="py-4 text-xl font-sans text-justify">
          Through the pixels of my{" "}
          <span className="text-accent-color text-3xl">
            GitHub contribution map
          </span>
          , I paint the story of my coding journey, embracing the beauty of open
          source and the power of collaborative creation.
        </h1>
        <div className="flex w-full justify-evenly flex-col items-center gap-4 pb-8 rounded">
          <div className=" py-8 flex flex-col justify-center rounded">
            <GitHubCalendar
              colorScheme={"dark"}
              renderBlock={(block, activity) => (
                <Tooltip
                  followCursor
                  title={`${activity.count} activities on ${activity.date}`}
                >
                  {block}
                </Tooltip>
              )}
              username="vasanth-selvaraj"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:mt-10 gap-6">
            <div className="flex p-4 justify-center items-center">
              <h1 className="text-3xl font-bold">
                My <span className="text-accent-color">Repositories</span>
              </h1>
            </div>
            {repolist.map((repos) => {
              return (
                <Link
                  href={
                    repos.html_url &&
                    (repos.html_url !== null || repos.html_url !== undefined)
                      ? repos.html_url
                      : "#"
                  }
                  target="_blank"
                  className="flex p-2 cursor-pointer hover:scale-105 group justify-center transform transition duration-300 border border-accent-color rounded"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex justify-between text-justify p-4">
                      <h3 className="text-sm font-medium font-sans">
                        {repos.name}
                      </h3>
                      <Image
                        src={`https://opengraph.githubassets.com/1/vasanth-selvaraj/${repos.name}`}
                        height={150}
                        width={150}
                        className="rounded"
                        alt="repo img"
                      />
                    </div>
                    <div className=" flex items-center">
                      <div className="pl-4 flex py-4 gap-4">
                        {repos.language !== null && (
                          <Image
                            src={imagesforlan[repos.language]}
                            height={25}
                            width={25}
                            alt="key"
                            className="rounded flex justify-center items-center"
                          />
                        )}
                      </div>
                      <h3 className="text-xs pl-2">
                        {repos.language !== null && repos.language}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
