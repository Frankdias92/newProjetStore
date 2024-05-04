import React, { useState, useEffect, useRef } from "react";


interface VideoProps {
    videoId: string
}

export function LazyYoutube({ videoId }: VideoProps ) {

  return (
    <div className="flex w-full rounded-t-xl">
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
    </div>
  )
}