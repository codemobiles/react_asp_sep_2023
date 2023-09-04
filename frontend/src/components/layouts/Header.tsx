import React from "react";

type Props = {
  version: string;
};

export default function Header({ version }: Props) {
  return <div>Header version {version}</div>;
}
