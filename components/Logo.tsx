export function LogoIcon({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FantaPick"
    >
      <path
        d="M28 4L6 12V28C6 40 16 50 28 52C40 50 50 40 50 28V12L28 4Z"
        fill="#0D2A52"
        stroke="#1A5A99"
        strokeWidth="1.5"
      />
      <path
        d="M28 16L29.8 21.6H35.7L31 25L32.9 30.6L28 27.2L23.1 30.6L25 25L20.3 21.6H26.2L28 16Z"
        fill="#F0B429"
      />
      <path
        d="M28 32V42M28 42L23 37M28 42L33 37"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoSmall() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FantaPick"
    >
      <path
        d="M28 4L6 12V28C6 40 16 50 28 52C40 50 50 40 50 28V12L28 4Z"
        fill="#0D2A52"
        stroke="#1A5A99"
        strokeWidth="1.5"
      />
      <path
        d="M28 16L29.8 21.6H35.7L31 25L32.9 30.6L28 27.2L23.1 30.6L25 25L20.3 21.6H26.2L28 16Z"
        fill="#F0B429"
      />
      <path
        d="M28 32V42M28 42L23 37M28 42L33 37"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
