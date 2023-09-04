import React from "react";

type Props = {
  label: string;
  version: string;
};

export default function Header({ version, label }: Props) {
  return (
    <div>
      Header {label} {version}
    </div>
  );
}
