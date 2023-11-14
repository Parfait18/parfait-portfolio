"use client";
import Typewriter from "typewriter-effect";

interface WriterProps {
  content?: Array<string> | string;
}

export default function TypeWriter(props: WriterProps) {
  console;
  return (
    <span className="w-full">
      <Typewriter
        options={{
          strings:
            props.content && Array.isArray(props.content)
              ? [...props.content]
              : props.content || "< Fullstack Developer />",
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
}
