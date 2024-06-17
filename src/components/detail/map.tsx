"use client";

import { GOOGL_MAP_KEY } from "@/utils/env";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Image from "next/image";
import CopyIcon from "../ui/copy_icon";
import CopyButton from "../common/copy_button";

interface Props {
  lat: number;
  lng: number;
  zip: string;
}

export default function MapComponent({ lat, lng, zip }: Props) {
  return (
    <div className="w-[24%] max-[425px] h-[218px] rounded-xl shadow-lg overflow-hidden">
      <APIProvider apiKey={GOOGL_MAP_KEY}>
        <Map
          style={{ width: "100%", height: "80%", borderRadius: 20 }}
          defaultCenter={{ lat, lng }}
          defaultZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
        <Marker position={{ lat, lng }} />
      </APIProvider>
      <div className="flex justify-between px-10 items-center h-[20%] text-[14px]">
        <p className="text-text_default">주소지</p>
        <CopyButton copyText={zip}/>
      </div>
    </div>
  );
}
