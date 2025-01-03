import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="fixed hidden xl:flex bottom-5 right-16 z-50 cursor-pointer">
        <Link
          href="https://vasanth-selvaraj.github.io/my-blog/"
          target="_blank"
          // className="flex p-2 h-full w-full justify-center items-center cursor-pointer "
        >
          <svg
            viewBox="0 0 306 306"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[70px] w-[70px] animate-spin duration-1000 relative"
          >
            <path
              d="M125.4 18.6667C126.9 9.63333 134.733 3 143.9 3H162.117C171.283 3 179.117 9.63333 180.617 18.6667L183.1 33.5667C184.267 40.6333 189.5 46.3 196.1 49.0667C202.733 51.8 210.35 51.4333 216.183 47.2667L228.467 38.4833C232.079 35.9009 236.491 34.6845 240.917 35.0508C245.342 35.417 249.494 37.3422 252.633 40.4833L265.517 53.3833C272.017 59.8667 272.85 70.0833 267.517 77.55L258.733 89.8333C254.567 95.6667 254.2 103.267 256.95 109.9C259.7 116.517 265.367 121.733 272.45 122.9L287.333 125.4C296.383 126.9 303 134.733 303 143.883V162.117C303 171.283 296.383 179.117 287.333 180.617L272.45 183.1C265.367 184.267 259.7 189.483 256.95 196.1C254.2 202.733 254.567 210.333 258.733 216.167L267.517 228.467C272.85 235.917 272 246.133 265.517 252.633L252.617 265.517C249.479 268.654 245.33 270.576 240.908 270.942C236.486 271.308 232.078 270.095 228.467 267.517L216.167 258.733C210.333 254.567 202.733 254.2 196.117 256.95C189.5 259.7 184.283 265.367 183.1 272.433L180.617 287.333C179.117 296.367 171.283 303 162.117 303H143.883C134.717 303 126.9 296.367 125.383 287.333L122.917 272.433C121.733 265.367 116.517 259.7 109.9 256.933C103.267 254.2 95.6667 254.567 89.8333 258.733L77.5333 267.517C70.0833 272.85 59.8667 272 53.3667 265.517L40.4833 252.617C37.3422 249.478 35.417 245.326 35.0508 240.9C34.6845 236.475 35.9009 232.063 38.4833 228.45L47.2667 216.167C51.4333 210.333 51.8167 202.733 49.0667 196.1C46.3167 189.483 40.65 184.267 33.5667 183.1L18.6667 180.6C9.63333 179.1 3 171.267 3 162.117V143.883C3 134.717 9.63333 126.883 18.6667 125.383L33.5667 122.9C40.6333 121.733 46.3167 116.517 49.0667 109.9C51.8167 103.267 51.45 95.6667 47.2833 89.8333L38.5 77.5333C35.9176 73.9207 34.7012 69.5088 35.0674 65.0832C35.4337 60.6576 37.3588 56.5056 40.5 53.3667L53.3833 40.4833C56.5223 37.3422 60.6742 35.417 65.0998 35.0508C69.5254 34.6845 73.9374 35.9009 77.55 38.4833L89.8333 47.2667C95.6667 51.4333 103.283 51.8 109.9 49.05C116.517 46.3 121.733 40.6333 122.9 33.5667L125.4 18.6667Z"
              stroke="#e5e7eb"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="font-medium absolute top-[25%] left-[22%] text-xl dark:text-text-color text-light-text-color">
            Blog
          </h3>
        </Link>
      </div>
    </>
  );
}
