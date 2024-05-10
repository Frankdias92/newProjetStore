import React, { useState, useEffect, useRef } from "react";


interface VideoProps {
    videoId: string
}

export function LazyYoutube({ videoId }: VideoProps ) {

  return (
    <div className="flex w-full h-full rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="480"
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