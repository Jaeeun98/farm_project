"use client";

import { GOOGL_MAP_KEY } from "@/utils/env";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Image from "next/image";

export default function MapComponent() {
  return (
    <div className="w-[24%] max-[425px] h-[218px] rounded-xl shadow-lg overflow-hidden">
      <APIProvider apiKey={GOOGL_MAP_KEY}>
        <Map
          style={{ width: "100%", height: "80%", borderRadius: 20 }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
      <div className="flex justify-between px-10 items-center h-[20%] text-[14px]">
        <p className="text-text_default">주소지</p>
        <button className="flex items-center">
          <Image
            src="/images/icon/copy.png"
            alt="copy_icon"
            width={24}
            height={24}
          />
          <span className="text-point_color">복사</span>
        </button>
      </div>
    </div>
  );
}
