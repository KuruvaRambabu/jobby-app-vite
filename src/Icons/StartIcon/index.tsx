import * as React from "react"

const StartIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={16}
    height={16}
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={-1483.396}
        x2={-1155.767}
        y1={1056.787}
        y2={1056.787}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#a"
      />
      <linearGradient id="a">
        <stop offset={0} stopColor="#fcd635" />
        <stop offset={1} stopColor="#f7a928" />
      </linearGradient>
    </defs>
    <path
      fill="url(#b)"
      d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
      color="#000"
      overflow="visible"
      transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
      style={{
        marker: "none",
      }}
    />
  </svg>
)

export default StartIcon
