declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    appendDots?: (dots: React.ReactNode) => React.ReactNode;
    customPaging?: (i: number) => React.ReactNode;
    responsive?: {
      breakpoint: number;
      settings: Settings;
    }[];
  }

  export default class Slider extends React.Component<Settings> {}
}
