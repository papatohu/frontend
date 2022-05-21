export interface UserConfig {
  weather:{position:Position},
  nasa:{position:Position},
  cartoon:{position:Position},
  maps:{position:Position, mapsConfiguration:MapsConfiguration},
  public_transport:{position:Position, origin:string},
  stocks:{position:Position},
  text_of_the_day:{position:Position},
  "daily-news":{position:Position},
  chuck: {position:Position},
  tronaldDump: {position:Position}
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
export interface User {
  id: string
  username: string
  pw: string
  tileConfigs: UserConfig
}
