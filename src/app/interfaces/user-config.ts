export interface UserConfig {
  weather:{position:Position},
  nasa:{position:Position},
  cartoon:{position:Position},
  maps:{position:Position, mapsConfiguration:MapsConfiguration},
  public_transport:{position:Position},
  stocks:{position:Position},
  text_of_the_day:{position:Position},
  "daily-news":{position:Position}
}
export interface Position {
  x:number
  y:number
}
export interface MapsConfiguration {
  origin:string
  destination:string
  mode:string
  avoid:string[]
  measurements:string
}